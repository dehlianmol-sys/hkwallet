import { createFileRoute } from "@tanstack/react-router";

import Register from "@/pages/Register";
import { RedirectIfAuthed } from "@/components/Guards";

export const Route = createFileRoute("/register")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Create Your Vivrapay Account" },
      {
        name: "description",
        content: "Register on Vivrapay with your mobile number and a referral code to start earning.",
      },
      { property: "og:title", content: "Create Your Vivrapay Account" },
      { property: "og:description", content: "Register on Vivrapay and start earning today." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <RedirectIfAuthed>
      <Register />
    </RedirectIfAuthed>
  ),
});
