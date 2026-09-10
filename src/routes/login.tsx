import { createFileRoute } from "@tanstack/react-router";

import Login from "@/pages/Login";
import { RedirectIfAuthed } from "@/components/Guards";

export const Route = createFileRoute("/login")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Login — Vivrapay" },
      { name: "description", content: "Sign in to your Vivrapay wallet to manage deposits and rewards." },
      { property: "og:title", content: "Login — Vivrapay" },
      { property: "og:description", content: "Sign in to your Vivrapay wallet." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <RedirectIfAuthed>
      <Login />
    </RedirectIfAuthed>
  ),
});
