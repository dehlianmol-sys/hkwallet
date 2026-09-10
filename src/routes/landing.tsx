import { createFileRoute } from "@tanstack/react-router";

import Landing from "@/pages/Landing";

export const Route = createFileRoute("/landing")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Download Vivrapay — Earn Money Online" },
      {
        name: "description",
        content: "Get the Vivrapay app, complete easy tasks and withdraw earnings instantly by UPI.",
      },
      { property: "og:title", content: "Download Vivrapay — Earn Money Online" },
      {
        property: "og:description",
        content: "Get the Vivrapay app, complete easy tasks and withdraw earnings instantly by UPI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});
