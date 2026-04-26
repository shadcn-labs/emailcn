import { EMAILCN_AGENT_SKILL_MD } from "@/lib/agent-discovery/emailcn-agent-skill";

export const GET = () =>
  new Response(EMAILCN_AGENT_SKILL_MD, {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
