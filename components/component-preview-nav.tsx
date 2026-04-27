import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { CopyButton } from "./copy-button";
import { EmailSendButton } from "./email-send-button";

const CodeTab = ({ code, value }: { code: string; value: string }) => (
  <TabsContent
    className="bg-code m-0 max-h-[640px] overflow-auto p-4 text-code-foreground"
    value={value}
  >
    <pre className="whitespace-pre font-mono text-sm leading-relaxed">
      <code>{code}</code>
    </pre>
  </TabsContent>
);

export const ComponentPreviewNav = ({
  height,
  hideCode = false,
  htmlCode,
  iframeTitle,
  previewHtml,
}: {
  height: number;
  hideCode?: boolean;
  htmlCode?: string;
  iframeTitle: string;
  previewHtml: string;
  tsxCode?: string;
}) => {
  const defaultTab = hideCode ? "preview" : "preview";

  return (
    <Tabs className="mt-4" value={defaultTab}>
      <div className="flex items-center justify-between gap-2">
        <TabsList className="h-8">
          <TabsTrigger className="h-6 px-2.5 text-xs" value="preview">
            Preview
          </TabsTrigger>
          {!hideCode && htmlCode ? (
            <TabsTrigger className="h-6 px-2.5 text-xs" value="html">
              HTML
            </TabsTrigger>
          ) : null}
        </TabsList>
        <div className="flex items-center gap-1">
          {/* <EmailViewportToggle
            value="desktop"
            onValueChange={() => {
              return;
            }}
          /> */}
          <CopyButton event="copy_email_html" value={previewHtml} />
          <EmailSendButton defaultSubject={iframeTitle} markup={previewHtml} />
        </div>
      </div>

      <TabsContent className="m-0 rounded-xl border bg-card" value="preview">
        <iframe
          className="w-full bg-white rounded-xl"
          height={height}
          sandbox=""
          srcDoc={previewHtml}
          title={iframeTitle}
        />
      </TabsContent>
      {!hideCode && htmlCode ? <CodeTab code={htmlCode} value="html" /> : null}
    </Tabs>
  );
};
