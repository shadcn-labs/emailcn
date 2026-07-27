"use client";

import { DownloadIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { CopyButton } from "@/components/copy-button";
import { EmailViewportToggle } from "@/components/email-viewport-toggle";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { EmailViewport } from "@/hooks/use-viewport-toggle";
import { useViewportToggle } from "@/hooks/use-viewport-toggle";
import { trackEvent } from "@/lib/events";
import { cn } from "@/lib/utils";

const viewportWidths: Record<EmailViewport, string> = {
  desktop: "100%",
  mobile: "375px",
  tablet: "768px",
};

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

interface ComponentPreviewClientProps {
  html: string;
  plainText: string | null;
  iframeTitle: string;
  title?: string;
  className?: string;
  hideNav?: boolean;
  height?: number;
  previewScale?: number;
  showTitleBar?: boolean;
  viewUrl?: string;
}

export const ComponentPreviewClient = ({
  html,
  plainText,
  iframeTitle,
  title,
  className,
  hideNav = false,
  height = 640,
  previewScale,
  showTitleBar = false,
  viewUrl,
}: ComponentPreviewClientProps) => {
  const [activeTab, setActiveTab] = useState("preview");
  const [viewport] = useViewportToggle();
  const scaledPreviewHeight = previewScale
    ? Math.ceil(height / previewScale)
    : height;

  return (
    <div className={cn("w-full scroll-mt-24", className)}>
      {title && !showTitleBar ? (
        <h3 className="mb-3 text-base font-semibold tracking-tight">{title}</h3>
      ) : null}

      <Tabs className="mt-4" value={activeTab} onValueChange={setActiveTab}>
        {!hideNav && (
          <div className="flex w-full items-center gap-2">
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
            <EmailViewportToggle
              className="ml-auto"
              onViewportChange={() => setActiveTab("preview")}
              viewUrl={viewUrl}
            />
          </div>
        )}
        <TabsContent
          className="m-0 overflow-hidden rounded-xl border bg-card"
          value="preview"
        >
          {showTitleBar && title ? (
            <div className="flex h-10 items-center border-b px-4 text-sm font-medium">
              {title}
            </div>
          ) : null}
          <div
            className={cn(
              "bg-muted/40 flex justify-center",
              previewScale ? "overflow-hidden" : "overflow-x-auto"
            )}
            style={previewScale ? { height } : undefined}
          >
            <iframe
              className={cn(
                "block bg-transparent transition-[width] duration-200 ease-out",
                previewScale ? "shrink-0 origin-top" : "max-w-full"
              )}
              height={scaledPreviewHeight}
              sandbox=""
              srcDoc={html}
              style={{
                transform: previewScale ? `scale(${previewScale})` : undefined,
                width: previewScale ? "600px" : viewportWidths[viewport],
              }}
              title={iframeTitle}
            />
          </div>
        </TabsContent>
        {html ? <CodeTab language="html" code={html} value="html" /> : null}
        {plainText ? (
          <CodeTab language="text" code={plainText} value="text" />
        ) : null}
      </Tabs>
    </div>
  );
};
