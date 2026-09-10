import { createFileRoute } from "@tanstack/react-router";

import Agents from "@/pages/admin/Agents";
import { RequireSuperAdmin } from "@/components/Guards";

export const Route = createFileRoute("/admin/agents")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Agent Management — Vivrapay Admin" },
      { name: "description", content: "Agent Management in the Vivrapay admin console." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (<RequireSuperAdmin><Agents /></RequireSuperAdmin>),
});
