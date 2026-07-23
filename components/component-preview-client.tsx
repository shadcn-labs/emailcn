"use client";

import { DownloadIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { toast } from "sonner";

import { CopyButton } from "@/components/copy-button";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { trackEvent } from "@/lib/events";
import { cn } from "@/lib/utils";

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
  darkHtml: string;
  html: string;
  plainText: string | null;
  title?: string;
  className?: string;
  hideNav?: boolean;
  height?: number;
}

export const ComponentPreviewClient = ({
  darkHtml,
  html,
  plainText,
  title,
  className,
  hideNav = false,
  height = 640,
}: ComponentPreviewClientProps) => {
  const [activeTab, setActiveTab] = useState("preview");
  const { resolvedTheme } = useTheme();
  const colorMode = resolvedTheme === "dark" ? "dark" : "light";
  const resolvedHtml = colorMode === "dark" ? darkHtml : html;

  return (
    <div className={cn("w-full scroll-mt-24", className)}>
      {title ? (
        <h3 className="mb-3 text-base font-semibold tracking-tight">{title}</h3>
      ) : null}

      <Tabs className="mt-4" value={activeTab} onValueChange={setActiveTab}>
        {!hideNav && (
          <div className="flex items-center justify-between gap-2">
            <TabsList className="h-8">
              <TabsTrigger className="h-6 px-2.5 text-xs" value="preview">
                Preview
              </TabsTrigger>
              {resolvedHtml ? (
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
          </div>
        )}
        <TabsContent className="m-0 rounded-xl border bg-card" value="preview">
          <iframe
            className="bg-background w-full rounded-xl"
            height={height}
            sandbox=""
            srcDoc={resolvedHtml}
            title={title}
          />
        </TabsContent>
        {resolvedHtml ? (
          <CodeTab language="html" code={resolvedHtml} value="html" />
        ) : null}
        {plainText ? (
          <CodeTab language="text" code={plainText} value="text" />
        ) : null}
      </Tabs>
    </div>
  );
};
