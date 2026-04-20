"use client";

import * as React from "react";

import { CodeCollapsibleWrapper } from "@/components/code-collapsible-wrapper";
import { EmailViewportToggle } from "@/components/email-viewport-toggle";
import type { EmailViewport } from "@/components/email-viewport-toggle";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useConfig } from "@/hooks/use-config";
import { cn } from "@/lib/utils";

export const CodeTabs = ({ children }: React.ComponentProps<typeof Tabs>) => {
  const [config, setConfig] = useConfig();

  const installationType = React.useMemo(
    () => config.installationType || "cli",
    [config]
  );

  return (
    <Tabs
      value={installationType}
      onValueChange={(value) =>
        setConfig({ ...config, installationType: value as "cli" | "manual" })
      }
      className="relative mt-6 w-full"
    >
      {children}
    </Tabs>
  );
};

const VIEWPORT_WIDTHS: Record<EmailViewport, string> = {
  desktop: "100%",
  mobile: "360px",
  tablet: "480px",
};

export interface EmailPreviewTabsProps {
  previewHtml: string;
  tsxHighlightedHtml?: string;
  htmlHighlightedHtml?: string;
  trailing?: React.ReactNode;
  hideCode?: boolean;
  height?: number;
  defaultViewport?: EmailViewport;
  className?: string;
  iframeTitle?: string;
}

export const EmailPreviewTabs = ({
  previewHtml,
  tsxHighlightedHtml,
  htmlHighlightedHtml,
  trailing,
  hideCode = false,
  height = 640,
  defaultViewport = "desktop",
  className,
  iframeTitle = "Email preview",
}: EmailPreviewTabsProps) => {
  const [viewport, setViewport] =
    React.useState<EmailViewport>(defaultViewport);

  return (
    <Tabs className={cn("w-full", className)} defaultValue="preview">
      <div className="flex items-center justify-between gap-2">
        <TabsList className="h-8 rounded-md bg-transparent p-0.5">
          <TabsTrigger className="h-7 px-3" value="preview">
            Preview
          </TabsTrigger>
          {!hideCode && tsxHighlightedHtml ? (
            <TabsTrigger className="h-7 px-3" value="tsx">
              TSX
            </TabsTrigger>
          ) : null}
          {!hideCode && htmlHighlightedHtml ? (
            <TabsTrigger className="h-7 px-3" value="html">
              HTML
            </TabsTrigger>
          ) : null}
        </TabsList>

        <div className="ml-auto flex items-center gap-2">
          <EmailViewportToggle onValueChange={setViewport} value={viewport} />
          <Separator className="mx-1 h-4!" orientation="vertical" />
          {trailing}
        </div>
      </div>
      <Separator className="mt-2 mb-4" />

      <TabsContent value="preview">
        <div className="overflow-hidden rounded-xl border border-border/60 bg-muted/30 shadow-none">
          <div className="flex justify-center p-4">
            <div
              className="mx-auto w-full transition-all duration-200"
              style={{ maxWidth: VIEWPORT_WIDTHS[viewport] }}
            >
              <iframe
                className="w-full rounded-md border bg-white"
                srcDoc={previewHtml}
                style={{ minHeight: height }}
                title={iframeTitle}
              />
            </div>
          </div>
        </div>
      </TabsContent>

      {!hideCode && tsxHighlightedHtml ? (
        <TabsContent value="tsx">
          <CodeCollapsibleWrapper>
            <div dangerouslySetInnerHTML={{ __html: tsxHighlightedHtml }} />
          </CodeCollapsibleWrapper>
        </TabsContent>
      ) : null}

      {!hideCode && htmlHighlightedHtml ? (
        <TabsContent value="html">
          <CodeCollapsibleWrapper>
            <div dangerouslySetInnerHTML={{ __html: htmlHighlightedHtml }} />
          </CodeCollapsibleWrapper>
        </TabsContent>
      ) : null}
    </Tabs>
  );
};
