/**
 * Single source of truth for brand assets and download links.
 *
 * Place the real files here (they are served from the site root):
 *   public/brand/logo.png          -> shown on landing, login, register, app header
 *   public/downloads/hkwallet.apk  -> the file the "Download App" button serves
 */
export const APP_NAME = 'HK Wallet';
export const APP_TAGLINE = 'Earn Money Online';

export const APP_LOGO = '/brand/logo.png';
export const APK_URL = '/downloads/hkwallet.apk';

export const SITE_ORIGIN = 'https://hkwallet.site';
/** Referral links always land on the web registration page. */
export const referralLink = (code: string) => `${SITE_ORIGIN}/register?ref=${code}`;

/** Default referral commission for a normal user, in percent. */
export const DEFAULT_COMMISSION_PERCENT = 5;
