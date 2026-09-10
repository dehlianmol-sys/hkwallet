import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from '@/lib/router-compat';
import { useStore } from '../lib/store';
import { lookupRefCode } from '../lib/agents';
import AuthShell from '../components/AuthShell';

export default function Register() {
  const { register } = useStore();
  const navigate = useNavigate();
  const { search } = useLocation();
  const lockedRef = (new URLSearchParams(search).get('ref') ?? '').toUpperCase();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [referral, setReferral] = useState(lockedRef);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const locked = Boolean(lockedRef);

  // Auto-fill the referral code from a pre-registration record when not locked by the link.
  useEffect(() => {
    if (locked) return;
    let active = true;
    const t = setTimeout(async () => {
      const code = await lookupRefCode(phone);
      if (active && code) setReferral(code.toUpperCase());
    }, 300);
    return () => {
      active = false;
      clearTimeout(t);
    };
  }, [phone, locked]);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setError('');
    const digits = phone.replace(/\D/g, '');
    if (digits.length !== 10) {
      setError('Enter a valid 10 digit mobile number.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }
    setLoading(true);
    try {
      const code = referral.trim() || (await lookupRefCode(digits)) || null;
      const res = await register(name.trim(), digits, password, code);
      if (!res.ok) {
        setError(res.message);
        return;
      }
      navigate('/landing', { replace: true });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell title="Create account" intro="Register here, then download the app.">
      <form onSubmit={submit}>
        <label>
          Full name
          <div className="field">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
        </label>
        <label>
          Mobile number
          <div className="phone-input">
            <span>
              +91 <em>|</em>
            </span>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
              inputMode="numeric"
              maxLength={10}
              placeholder="10 digit mobile number"
              required
            />
          </div>
        </label>
        <label>
          Password
          <div className="field">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
              required
              minLength={6}
            />
          </div>
        </label>
        <label>
          Confirm password
          <div className="field">
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="Re-enter password"
              required
              minLength={6}
            />
          </div>
        </label>
        <label>
          Referral code
          <div className="field">
            <input
              value={referral}
              onChange={(e) => setReferral(e.target.value.toUpperCase())}
              placeholder="Enter referral code"
              readOnly={locked}
              disabled={locked}
            />
          </div>
          {locked && <small className="hint">Applied from your invite link</small>}
        </label>
        {error && <div className="error-box">{error}</div>}
        <button className="dark-button" disabled={loading}>
          {loading ? 'Please wait' : 'Register'}
        </button>
      </form>
      <p className="auth-switch">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </AuthShell>
  );
}
