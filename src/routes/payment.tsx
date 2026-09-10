import { createFileRoute } from "@tanstack/react-router";

import Payment from "@/pages/Payment";
import UserLayout from "@/components/UserLayout";
import { RequireUser } from "@/components/Guards";

export const Route = createFileRoute("/payment")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Complete Payment — Vivrapay" },
      { name: "description", content: "Finish your pending Vivrapay deposit and upload the payment receipt." },
      { property: "og:title", content: "Complete Payment — Vivrapay" },
      { property: "og:description", content: "Finish your pending Vivrapay deposit and upload the payment receipt." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <RequireUser>
      <Payment />
    </RequireUser>
  ),
});
