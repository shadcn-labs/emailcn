import { emailcnAgentSkillDigest } from "@/lib/agent-discovery/emailcn-agent-skill";
import { requestOrigin } from "@/lib/agent-discovery/request-origin";

export const GET = (request: Request) => {
  const origin = requestOrigin(request);
  const base = origin.replace(/\/$/, "");

  return Response.json(
    {
      $schema: "https://schemas.agentskills.io/discovery/0.2.0/schema.json",
      skills: [
        {
          description:
            "Install and use emailcn email components via the public shadcn registry and documentation.",
          digest: emailcnAgentSkillDigest(),
          name: "emailcn-registry",
          type: "skill-md",
          url: `${base}/.well-known/agent-skills/emailcn-skill.md`,
        },
      ],
    },
    { headers: { "Cache-Control": "public, max-age=3600" } }
  );
};
