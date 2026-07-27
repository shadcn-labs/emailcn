import { renderEmailPreview } from "@/lib/render-email-preview";
import { BASE_NAMES } from "@/registry/bases";

interface ViewRouteContext {
  params: Promise<{
    base: string;
    name: string;
  }>;
}

export const GET = async (_request: Request, context: ViewRouteContext) => {
  const { base: requestedBase, name } = await context.params;
  const base = BASE_NAMES.find((candidate) => candidate === requestedBase);

  if (!base) {
    return new Response("Preview not found", { status: 404 });
  }

  try {
    const preview = await renderEmailPreview({ base, name });

    if (!preview) {
      return new Response("Preview not found", { status: 404 });
    }

    return new Response(preview.html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    });
  } catch {
    return new Response("Preview unavailable", { status: 500 });
  }
};
