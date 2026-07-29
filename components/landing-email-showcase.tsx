"use client";

import {
  EyeIcon,
  FileIcon,
  FileCode2Icon,
  MonitorIcon,
  SmartphoneIcon,
} from "lucide-react";
import { useState } from "react";

import { CopyButton } from "@/components/copy-button";
import { LandingEmailPreview } from "@/components/landing-email-previews";
import {
  componentCatalog,
  emailRecipes,
  getEmailCode,
} from "@/components/landing-email-showcase-data";
import type {
  CodeOutput,
  ComponentPartId,
  EmailRecipe,
  EmailRecipeId,
} from "@/components/landing-email-showcase-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

type EmailBase = "react-email" | "mjml-react" | "jsx-email";
type PreviewViewport = "desktop" | "mobile";
type WorkspaceTab = "preview" | "code";

const emailBases: { id: EmailBase; label: string }[] = [
  { id: "react-email", label: "React Email" },
  { id: "mjml-react", label: "MJML React" },
  { id: "jsx-email", label: "JSX Email" },
];

const codeOutputs: { id: CodeOutput; label: string }[] = [
  { id: "react", label: "React" },
  { id: "html", label: "HTML" },
  { id: "text", label: "Plain text" },
];

const CodeViewer = ({
  code,
  output,
  onOutputChange,
}: {
  code: string;
  output: CodeOutput;
  onOutputChange: (output: CodeOutput) => void;
}) => {
  const lines = code.split("\n");

  return (
    <div className="flex h-full min-h-[560px] flex-col bg-code text-code-foreground lg:min-h-0">
      <div className="flex h-10 shrink-0 items-center border-b border-border/50 px-4">
        <Tabs
          value={output}
          onValueChange={(value) => onOutputChange(value as CodeOutput)}
          className="gap-0"
        >
          <TabsList className="h-8 bg-background/8 p-0.5">
            {codeOutputs.map((item) => (
              <TabsTrigger
                key={item.id}
                value={item.id}
                sound="toggleOn"
                className="h-7 px-2.5 text-xs data-[state=active]:bg-background data-[state=active]:text-foreground"
              >
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <CopyButton
          className="static ml-auto size-7 bg-transparent"
          value={code}
          event="copy_email"
        />
      </div>

      <div className="no-scrollbar flex-1 overflow-auto py-4">
        <ol className="min-w-max">
          {lines.map((line, index) => (
            <li
              key={`${index}-${line}`}
              className="grid grid-cols-[3.25rem_1fr] px-4 font-mono text-xs leading-6"
            >
              <span className="mr-4 select-none text-right text-code-number">
                {index + 1}
              </span>
              <code className="whitespace-pre pr-6">{line || " "}</code>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

const findEmail = (id: EmailRecipeId): EmailRecipe =>
  emailRecipes.find((email) => email.id === id) ?? emailRecipes[0];

export const LandingEmailShowcase = () => {
  const [selectedEmailId, setSelectedEmailId] =
    useState<EmailRecipeId>("product-drop");
  const [selectedComponentId, setSelectedComponentId] =
    useState<ComponentPartId>("image-grid-hero");
  const [workspaceTab, setWorkspaceTab] = useState<WorkspaceTab>("preview");
  const [viewport, setViewport] = useState<PreviewViewport>("desktop");
  const [codeOutput, setCodeOutput] = useState<CodeOutput>("react");
  const [emailBase, setEmailBase] = useState<EmailBase>("react-email");

  const selectedEmail = findEmail(selectedEmailId);
  const selectedComponent = componentCatalog[selectedComponentId];
  const code = getEmailCode(selectedEmail, codeOutput);
  const command = `npx shadcn@latest add @emailcn/${emailBase}/${selectedComponentId}`;

  const handleEmailChange = (emailId: EmailRecipeId) => {
    const nextEmail = findEmail(emailId);
    setSelectedEmailId(emailId);
    setSelectedComponentId(nextEmail.defaultComponentId);
  };

  const handleComponentChange = (componentId: ComponentPartId) => {
    setSelectedComponentId(componentId);
    setWorkspaceTab("preview");
  };

  return (
    <section className="container-wrapper pb-12 md:pb-16 lg:pb-24">
      <div className="container">
        <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
          <div className="grid min-h-12 grid-cols-[minmax(0,1fr)_auto] items-center gap-2 border-b px-3 py-2 lg:grid-cols-[1fr_auto_1fr] lg:gap-3 lg:px-4 lg:py-0">
            <div
              className="hidden justify-self-start gap-1.5 lg:flex"
              aria-hidden="true"
            >
              <span className="size-2.5 rounded-full bg-red-400" />
              <span className="size-2.5 rounded-full bg-amber-400" />
              <span className="size-2.5 rounded-full bg-emerald-400" />
            </div>
            <div
              className="flex min-w-0 items-center gap-2 text-sm font-medium text-muted-foreground lg:max-w-full lg:justify-self-center lg:px-2"
              title={selectedEmail.filename}
            >
              <FileIcon className="size-3.5" aria-hidden="true" />
              <span className="truncate">{selectedEmail.filename}</span>
            </div>

            <Select
              value={emailBase}
              onValueChange={(value) => setEmailBase(value as EmailBase)}
            >
              <SelectTrigger
                size="sm"
                aria-label="Email base"
                className="w-32 min-w-0 justify-self-end lg:hidden"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent align="end">
                {emailBases.map((base) => (
                  <SelectItem key={base.id} value={base.id}>
                    {base.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <ToggleGroup
              type="single"
              value={emailBase}
              size="sm"
              spacing={1}
              aria-label="Email base"
              className="hidden justify-self-end rounded-lg bg-muted p-0.5 lg:flex"
              onValueChange={(value) => {
                if (value) {
                  setEmailBase(value as EmailBase);
                }
              }}
            >
              {emailBases.map((base) => (
                <ToggleGroupItem
                  key={base.id}
                  value={base.id}
                  aria-label={base.label}
                  className="h-7 min-w-0 rounded-md px-2 text-xs data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-xs data-[state=on]:hover:bg-background data-[state=on]:hover:text-foreground"
                >
                  {base.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          <div className="lg:grid lg:h-[720px] lg:grid-cols-[14rem_minmax(0,1fr)_20rem]">
            <aside
              aria-label="Email examples"
              className="hidden flex-col bg-muted/20 lg:flex lg:h-full lg:border-r"
            >
              <div className="flex h-12 shrink-0 items-center border-b px-4">
                <p className="text-sm font-semibold">Email</p>
              </div>

              <div className="no-scrollbar flex gap-2 overflow-x-auto p-2 lg:flex-1 lg:flex-col lg:gap-1 lg:overflow-y-auto">
                {emailRecipes.map((email) => {
                  const isSelected = selectedEmailId === email.id;

                  return (
                    <Button
                      key={email.id}
                      type="button"
                      variant="ghost"
                      size="sm"
                      sound="click"
                      aria-pressed={isSelected}
                      className={cn(
                        "h-9 min-w-40 justify-start rounded-md border px-2 text-left text-sm lg:min-w-0",
                        isSelected
                          ? "border-border bg-muted text-foreground hover:bg-muted hover:text-foreground"
                          : "border-transparent text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                      )}
                      onClick={() => handleEmailChange(email.id)}
                    >
                      <span className="truncate">{email.name}</span>
                    </Button>
                  );
                })}
              </div>
            </aside>

            <Tabs
              value={workspaceTab}
              onValueChange={(value) => setWorkspaceTab(value as WorkspaceTab)}
              className="min-w-0 gap-0 bg-muted/55 lg:h-full"
            >
              <div className="flex h-12 shrink-0 items-center border-b bg-card/80 px-3 lg:hidden">
                <Select
                  value={selectedEmailId}
                  onValueChange={(value) =>
                    handleEmailChange(value as EmailRecipeId)
                  }
                >
                  <SelectTrigger
                    size="sm"
                    aria-label="Select email"
                    className="w-full min-w-0"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {emailRecipes.map((email) => (
                      <SelectItem key={email.id} value={email.id}>
                        {email.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex h-12 shrink-0 items-center justify-between gap-2 border-b bg-card/80 px-4 backdrop-blur">
                <TabsList className="h-8 p-0.5">
                  <TabsTrigger
                    value="preview"
                    sound="toggleOn"
                    className="h-7 px-2.5 text-xs"
                  >
                    <EyeIcon className="size-3.5" aria-hidden="true" />
                    Preview
                  </TabsTrigger>
                  <TabsTrigger
                    value="code"
                    sound="toggleOn"
                    className="h-7 px-2.5 text-xs"
                  >
                    <FileCode2Icon className="size-3.5" aria-hidden="true" />
                    Code
                  </TabsTrigger>
                </TabsList>

                {workspaceTab === "preview" ? (
                  <ToggleGroup
                    type="single"
                    value={viewport}
                    variant="outline"
                    size="sm"
                    spacing={0}
                    aria-label="Email preview viewport"
                    className="hidden lg:flex"
                    onValueChange={(value) => {
                      if (value) {
                        setViewport(value as PreviewViewport);
                      }
                    }}
                  >
                    <ToggleGroupItem
                      value="desktop"
                      aria-label="Desktop preview"
                      className="gap-1.5 px-2.5 text-xs"
                    >
                      <MonitorIcon className="size-3.5" aria-hidden="true" />
                      <span className="hidden xl:inline">Desktop</span>
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      value="mobile"
                      aria-label="Mobile preview"
                      className="gap-1.5 px-2.5 text-xs"
                    >
                      <SmartphoneIcon className="size-3.5" aria-hidden="true" />
                      <span className="hidden xl:inline">Mobile</span>
                    </ToggleGroupItem>
                  </ToggleGroup>
                ) : (
                  <Badge
                    variant="outline"
                    className="hidden font-mono text-xs font-normal text-muted-foreground sm:flex"
                  >
                    {code.split("\n").length} lines
                  </Badge>
                )}
              </div>

              <TabsContent value="preview" className="m-0 min-h-0">
                <div className="h-[520px] overflow-auto p-2 sm:h-[620px] sm:p-4 lg:h-[672px] lg:p-5">
                  <div
                    className={cn(
                      "mx-auto w-full max-w-[375px] overflow-hidden bg-white shadow-[0_18px_60px_rgb(15_23_42/0.14)] transition-[width] duration-200",
                      viewport === "desktop"
                        ? "lg:w-[600px] lg:max-w-full"
                        : "lg:w-[375px] lg:max-w-none"
                    )}
                  >
                    <LandingEmailPreview
                      emailId={selectedEmail.id}
                      selectedId={selectedComponentId}
                      onSelect={setSelectedComponentId}
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="code" className="m-0 min-h-0">
                <CodeViewer
                  code={code}
                  output={codeOutput}
                  onOutputChange={setCodeOutput}
                />
              </TabsContent>
            </Tabs>

            <aside
              aria-label="Components used in the selected email"
              className="no-scrollbar border-t bg-card lg:h-full lg:overflow-y-auto lg:border-t-0 lg:border-l"
            >
              <div className="flex h-12 shrink-0 items-center border-b px-4">
                <div className="flex w-full items-center justify-between gap-3">
                  <p className="text-sm font-semibold">Component Used</p>
                  <Badge
                    variant="outline"
                    className="font-mono text-xs text-muted-foreground"
                  >
                    {selectedEmail.componentIds.length}
                  </Badge>
                </div>
              </div>

              <div className="border-b p-2">
                <div className="no-scrollbar flex gap-2 overflow-x-auto lg:flex-col lg:gap-1">
                  {selectedEmail.componentIds.map((componentId, index) => {
                    const part = componentCatalog[componentId];
                    const isSelected = selectedComponentId === componentId;

                    return (
                      <Button
                        key={componentId}
                        type="button"
                        variant="ghost"
                        size="sm"
                        sound="click"
                        aria-pressed={isSelected}
                        className={cn(
                          "h-9 min-w-48 justify-start gap-2.5 rounded-md border px-2 text-left text-sm lg:min-w-0",
                          isSelected
                            ? "border-blue-500/40 bg-blue-500/10 text-blue-700 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-300"
                            : "border-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                        onClick={() => handleComponentChange(componentId)}
                      >
                        <span
                          className={cn(
                            "flex size-6 shrink-0 items-center justify-center rounded-md border bg-background font-mono text-xs",
                            isSelected && "border-blue-500/40 text-blue-600"
                          )}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0 flex-1 truncate font-medium">
                          {part.label}
                        </span>
                      </Button>
                    );
                  })}
                </div>
              </div>

              <div className="p-4" aria-live="polite">
                <h3 className="text-lg font-semibold tracking-tight">
                  {selectedComponent.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {selectedComponent.description}
                </p>

                <div className="mt-4">
                  <div className="flex items-center gap-2 rounded-lg border bg-code p-2 pl-3 text-code-foreground">
                    <code className="no-scrollbar min-w-0 flex-1 overflow-x-auto font-mono text-xs leading-5 whitespace-nowrap text-muted-foreground">
                      <span className="select-none text-code-number">$ </span>
                      {command}
                    </code>
                    <CopyButton
                      className="static size-7 shrink-0 bg-transparent"
                      event="copy_npm_command"
                      value={command}
                    />
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};
