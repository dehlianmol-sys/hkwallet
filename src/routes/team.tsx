import { createFileRoute } from "@tanstack/react-router";

import Team from "@/pages/Team";
import UserLayout from "@/components/UserLayout";
import { RequireUser } from "@/components/Guards";

export const Route = createFileRoute("/team")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "My Team — Vivrapay" },
      { name: "description", content: "Track your referrals, team size and commission earnings on Vivrapay." },
      { property: "og:title", content: "My Team — Vivrapay" },
      { property: "og:description", content: "Track your referrals, team size and commission earnings on Vivrapay." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <RequireUser>
      <UserLayout><Team /></UserLayout>
    </RequireUser>
  ),
});
