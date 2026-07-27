import { ComponentPreviewClient } from "@/components/component-preview-client";
import { ComponentSource } from "@/components/component-source";
import type { DemoName } from "@/examples/__index__";
import { renderEmailPreview } from "@/lib/render-email-preview";
import type { BaseName } from "@/registry/bases";

interface ComponentPreviewProps {
  base?: BaseName;
  name: DemoName;
  title?: string;
  className?: string;
  centerPreview?: boolean;
  hideNav?: boolean;
  hideCode?: boolean;
  height?: number;
  previewScale?: number;
  showTitleBar?: boolean;
}

export const ComponentPreview = async ({
  base = "react-email",
  name,
  title,
  className,
  centerPreview = false,
  hideNav = false,
  hideCode = false,
  height,
  previewScale,
  showTitleBar = false,
}: ComponentPreviewProps) => {
  let html = "";
  let plainText: string | null = null;
  let previewHeight = 640;

  try {
    const preview = await renderEmailPreview({ base, centerPreview, name });

    if (!preview) {
      throw new Error(`No demo named "${name}" for base "${base}"`);
    }

    ({ height: previewHeight, html, plainText } = preview);
  } catch (error) {
    html = `<div style="padding: 40px; text-align: center; color: #666;">
      <p>Preview unavailable</p>
      <pre style="font-size: 12px; color: #999;">${error instanceof Error ? error.message : "Unknown error"}</pre>
    </div>`;
  }

  return (
    <>
      <ComponentPreviewClient
        className={className}
        height={height ?? previewHeight}
        hideNav={hideNav}
        html={html}
        iframeTitle={title ?? name}
        plainText={plainText}
        previewScale={previewScale}
        showTitleBar={showTitleBar}
        title={title}
        viewUrl={`/view/${encodeURIComponent(base)}/${encodeURIComponent(name)}`}
      />
      {!hideCode && (
        <ComponentSource className="mt-6" base={base} name={name} />
      )}
    </>
  );
};
