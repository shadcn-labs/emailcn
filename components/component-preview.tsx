"use client";

import { renderToMjml } from "@faire/mjml-react/utils/renderToMjml";
import { render as renderReactEmail, toPlainText } from "@react-email/render";
import { DownloadIcon } from "lucide-react";
import mjml2html from "mjml-browser";
import { useState } from "react";
import { toast } from "sonner";

import { ComponentSource } from "@/components/component-source";
import { CopyButton } from "@/components/copy-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { demos } from "@/examples/__index__";
import { trackEvent } from "@/lib/events";
// import { toPlainText as toPlainTextMjml } from "@/lib/mjml-plain-text";
import { cn } from "@/lib/utils";
import type { BaseName } from "@/registry/bases";

interface ComponentPreviewProps {
  base?: BaseName;
  name: string;
  title?: string;
  badge?: string;
  className?: string;
  hideNav?: boolean;
  hideCode?: boolean;
  height?: number;
}

const CodeTab = ({
  code,
  value,
  language,
}: {
  code: string;
  value: string;
  language: string;
}) => {
  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${language}-code.${language === "html" ? "html" : "txt"}`;
    document.body.append(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    trackEvent({
      name: "download_email",
      properties: {
        language,
      },
    });
    toast.success(`Downloaded ${language === "html" ? "HTML" : "Plain Text"}`);
  };

  return (
    <TabsContent
      className="bg-code relative m-0 max-h-[640px] overflow-auto p-4 rounded-lg text-code-foreground"
      value={value}
    >
      <CopyButton value={code} event="copy_email" />
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="size-7 bg-code hover:opacity-100 focus-visible:opacity-100 absolute top-3 right-10 z-10"
            onClick={handleDownload}
          >
            <span className="sr-only">Download</span>
            <DownloadIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          Download {language === "html" ? "HTML" : "Plain Text"}
        </TooltipContent>
      </Tooltip>
      <pre className="whitespace-pre font-mono text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
    </TabsContent>
  );
};

export const ComponentPreview = async ({
  base = "react-email",
  name,
  title,
  badge,
  className,
  hideNav = false,
  hideCode = false,
  height = 640,
}: ComponentPreviewProps) => {
  const [activeTab, setActiveTab] = useState("preview");

  const Demo = await demos[base][name];

  let html = "";
  let plainText: string | null = null;

  try {
    if (base === "react-email") {
      const result = await renderReactEmail(<Demo />, { pretty: true });
      html = result;
      plainText = toPlainText(html);
    } else {
      const result = await mjml2html(renderToMjml(<Demo />), {
        keepComments: false,
        validationLevel: "soft",
      });
      ({ html } = result);
    }
  } catch (error) {
    html = `<div style="padding: 40px; text-align: center; color: #666;">
      <p>Preview unavailable</p>
      <pre style="font-size: 12px; color: #999;">${error instanceof Error ? error.message : "Unknown error"}</pre>
    </div>`;
  }

  const sourceName = name.replace(/-demo$/, "");

  return (
    <div className={cn("w-full scroll-mt-24", className)}>
      {(title || badge) && (
        <div className="mb-3 flex items-center gap-2">
          {title && (
            <h3 className="text-base font-semibold tracking-tight">{title}</h3>
          )}
          {badge && (
            <Badge className="rounded-md" variant="secondary">
              {badge}
            </Badge>
          )}
        </div>
      )}

      <Tabs className="mt-4" value={activeTab} onValueChange={setActiveTab}>
        {!hideNav && (
          <div className="flex items-center justify-between gap-2">
            <TabsList className="h-8">
              <TabsTrigger className="h-6 px-2.5 text-xs" value="preview">
                Preview
              </TabsTrigger>
              {html ? (
                <TabsTrigger className="h-6 px-2.5 text-xs" value="html">
                  HTML
                </TabsTrigger>
              ) : null}
              {plainText ? (
                <TabsTrigger className="h-6 px-2.5 text-xs" value="text">
                  Plain Text
                </TabsTrigger>
              ) : null}
            </TabsList>
            {/* <div className="flex items-center gap-2">
              <EmailViewportToggle />
              <EmailSendButton defaultSubject={title} markup={html} />
            </div> */}
          </div>
        )}
        <TabsContent className="m-0 rounded-xl border bg-card" value="preview">
          <iframe
            className="w-full bg-white rounded-xl"
            height={height}
            sandbox=""
            srcDoc={html}
            title={title}
          />
        </TabsContent>
        {html ? <CodeTab language="html" code={html} value="html" /> : null}
        {plainText ? (
          <CodeTab language="text" code={plainText} value="text" />
        ) : null}
      </Tabs>

      {!hideCode && (
        <ComponentSource
          className="mt-6"
          base={base}
          name={sourceName}
          title={`${sourceName}.tsx`}
        />
      )}
    </div>
  );
};
