import { createFileRoute } from "@tanstack/react-router";

import Landing from "@/pages/Landing";
import Home from "@/pages/Home";
import UserLayout from "@/components/UserLayout";
import { Navigate } from "@/lib/router-compat";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Vivrapay — Earn Money Online With Easy Tasks" },
      {
        name: "description",
        content:
          "Download Vivrapay, complete simple tasks, get fast UPI withdrawals and earn referral rebates every day.",
      },
      { property: "og:title", content: "Vivrapay — Earn Money Online With Easy Tasks" },
      {
        property: "og:description",
        content: "Download Vivrapay, complete simple tasks and earn referral rebates every day.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RootEntry,
});

function RootEntry() {
  const { currentUser, loading } = useStore();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-white">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-[#2b8cff]" />
      </div>
    );
  }

  if (!currentUser) {
    // Referral visits go straight to the web registration page.
    const ref =
      typeof window === "undefined"
        ? null
        : new URLSearchParams(window.location.search).get("ref");
    if (ref) return <Navigate to={`/register?ref=${encodeURIComponent(ref)}`} replace />;
    return <Landing />;
  }
  if (currentUser.role !== "user") return <Navigate to="/admin" />;

  return (
    <UserLayout>
      <Home />
    </UserLayout>
  );
}
