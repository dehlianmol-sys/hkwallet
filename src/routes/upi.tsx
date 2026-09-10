import { createFileRoute } from "@tanstack/react-router";

import UPI from "@/pages/UPI";
import UserLayout from "@/components/UserLayout";
import { RequireUser } from "@/components/Guards";

export const Route = createFileRoute("/upi")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "UPI Tools — Vivrapay" },
      { name: "description", content: "Manage your linked UPI accounts and buy or sell orders on Vivrapay." },
      { property: "og:title", content: "UPI Tools — Vivrapay" },
      { property: "og:description", content: "Manage your linked UPI accounts and buy or sell orders on Vivrapay." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <RequireUser>
      <UserLayout><UPI /></UserLayout>
    </RequireUser>
  ),
});
