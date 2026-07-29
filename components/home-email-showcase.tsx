"use client";

import {
  ArrowUpRightIcon,
  CodeXmlIcon,
  EyeIcon,
  FileIcon,
  MonitorIcon,
  SmartphoneIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { CodeBlockCommand } from "@/components/code-block-command";
import { CopyButton } from "@/components/copy-button";
import {
  HomeEmailPreview,
  getHomeEmailSource,
  homeEmailBases,
  homeEmailCodeOutputs,
  homeEmailComponentCatalog,
  homeEmailPreviews,
} from "@/components/home-email-preview";
import type {
  CodeOutput,
  ComponentPartId,
  EmailRecipe,
  EmailRecipeId,
  HomeEmailBase,
} from "@/components/home-email-preview";
import type { HomeEmailRenderData } from "@/components/home-email-render-template";
import {
  JSXEmailIcon,
  MJMLReactIcon,
  ReactEmailIcon,
} from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import type { RenderedEmail } from "@/lib/render-email";
import { cn } from "@/lib/utils";

type PreviewViewport = "desktop" | "mobile";
type WorkspaceTab = "preview" | "code";

interface HomeEmailCodeOutput {
  code: string;
  highlightedCode: string;
}

const codeCache = new Map<string, HomeEmailCodeOutput>();
const documentCache = new Map<string, Promise<RenderedEmail>>();
const homeEmailBaseIcons = {
  "jsx-email": JSXEmailIcon,
  "mjml-react": MJMLReactIcon,
  "react-email": ReactEmailIcon,
} satisfies Record<HomeEmailBase, typeof ReactEmailIcon>;

const EmailBaseIcon = ({
  base,
  className,
}: {
  base: HomeEmailBase;
  className?: string;
}) => {
  const Icon = homeEmailBaseIcons[base];

  return <Icon className={className} aria-hidden="true" />;
};

const CodeViewer = ({
  availableOutputs,
  error,
  isLoading,
  output,
  selectedOutput,
  onOutputChange,
}: {
  availableOutputs: { id: CodeOutput; label: string }[];
  error: string | null;
  isLoading: boolean;
  output: CodeOutput;
  selectedOutput: HomeEmailCodeOutput | null;
  onOutputChange: (output: CodeOutput) => void;
}) => (
  <div className="flex h-full min-h-[560px] flex-col bg-code text-code-foreground lg:min-h-0">
    <div className="flex h-12 shrink-0 items-center px-4">
      <Tabs
        value={output}
        onValueChange={(value) => onOutputChange(value as CodeOutput)}
        className="gap-0"
      >
        <TabsList className="bg-background/8 p-0.5">
          {availableOutputs.map((item) => (
            <TabsTrigger
              key={item.id}
              value={item.id}
              sound="toggleOn"
              className="h-8 px-3"
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <CopyButton
        className="static ml-auto bg-transparent"
        value={selectedOutput?.code ?? ""}
        event="copy_email"
      />
    </div>
    <Separator className="bg-border/50" />

    <div className="no-scrollbar min-h-0 flex-1 overflow-auto">
      {isLoading ? (
        <div
          className="flex h-full min-h-72 items-center justify-center text-sm text-code-foreground/60"
          role="status"
        >
          Rendering email…
        </div>
      ) : null}
      {error ? (
        <div
          className="flex h-full min-h-72 items-center justify-center px-6 text-center text-sm text-red-400"
          role="alert"
        >
          {error}
        </div>
      ) : null}
      {selectedOutput && !isLoading ? (
        <figure
          data-rehype-pretty-code-figure=""
          className="!m-0 min-h-full !rounded-none text-sm [&>div]:min-h-full [&_pre]:min-h-full"
        >
          <div
            // Shiki returns trusted HTML generated from the provided source code.
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: selectedOutput.highlightedCode,
            }}
          />
        </figure>
      ) : null}
    </div>
  </div>
);

const findEmail = (id: EmailRecipeId): EmailRecipe =>
  homeEmailPreviews.find((email) => email.id === id) ?? homeEmailPreviews[0];

const getRenderData = (recipe: EmailRecipe): HomeEmailRenderData => ({
  actionHref: recipe.actionHref,
  actionLabel: recipe.actionLabel,
  description: recipe.description,
  eyebrow: recipe.eyebrow,
  heading: recipe.heading,
  previewText: recipe.previewText,
  sections: recipe.componentIds.map((id) => ({
    description: homeEmailComponentCatalog[id].description,
    id,
    label: homeEmailComponentCatalog[id].label,
  })),
});

export const HomeEmailShowcase = () => {
  const [selectedEmailId, setSelectedEmailId] =
    useState<EmailRecipeId>("product-drop");
  const [selectedComponentId, setSelectedComponentId] =
    useState<ComponentPartId>("image-grid-hero");
  const [workspaceTab, setWorkspaceTab] = useState<WorkspaceTab>("preview");
  const [viewport, setViewport] = useState<PreviewViewport>("desktop");
  const [codeOutput, setCodeOutput] = useState<CodeOutput>("react");
  const [emailBase, setEmailBase] = useState<HomeEmailBase>("react-email");
  const [codeRequest, setCodeRequest] = useState<{
    data: HomeEmailCodeOutput | null;
    error: string | null;
    isLoading: boolean;
    key: string;
  }>({
    data: null,
    error: null,
    isLoading: false,
    key: "",
  });

  const selectedEmail = findEmail(selectedEmailId);
  const selectedComponent = homeEmailComponentCatalog[selectedComponentId];
  const registryItem = `@emailcn/${emailBase}/${selectedComponentId}`;
  const codeRequestKey = `${emailBase}:${selectedEmail.id}:${codeOutput}`;
  const selectedCodeOutput =
    codeRequest.key === codeRequestKey ? codeRequest.data : null;
  const availableCodeOutputs =
    emailBase === "mjml-react"
      ? homeEmailCodeOutputs.filter((item) => item.id !== "text")
      : homeEmailCodeOutputs;

  useEffect(() => {
    if (workspaceTab !== "code") {
      return;
    }

    const cached = codeCache.get(codeRequestKey);
    if (cached) {
      setCodeRequest({
        data: cached,
        error: null,
        isLoading: false,
        key: codeRequestKey,
      });
      return;
    }

    let cancelled = false;
    const loadCode = async () => {
      setCodeRequest({
        data: null,
        error: null,
        isLoading: true,
        key: codeRequestKey,
      });

      try {
        let code: string | null;
        let language: string;

        if (codeOutput === "react") {
          code = getHomeEmailSource(selectedEmail, emailBase);
          language = "tsx";
        } else {
          const documentKey = `${emailBase}:${selectedEmail.id}`;
          let renderedDocument = documentCache.get(documentKey);

          if (!renderedDocument) {
            const [{ getHomeEmailElement }, { renderEmail }] =
              await Promise.all([
                import("@/components/home-email-render-template"),
                import("@/lib/render-email"),
              ]);
            renderedDocument = renderEmail({
              base: emailBase,
              preview: getHomeEmailElement(
                emailBase,
                getRenderData(selectedEmail)
              ),
            });
            documentCache.set(documentKey, renderedDocument);
          }

          const rendered = await renderedDocument;
          code = codeOutput === "html" ? rendered.html : rendered.plainText;
          language = codeOutput === "html" ? "html" : "text";
        }

        if (!code) {
          throw new Error(
            "This format is not available for the selected base."
          );
        }

        const { highlightCode } = await import("@/lib/highlight-code");
        const output = {
          code,
          highlightedCode: await highlightCode(code, language),
        };
        codeCache.set(codeRequestKey, output);

        if (cancelled) {
          return;
        }

        setCodeRequest({
          data: output,
          error: null,
          isLoading: false,
          key: codeRequestKey,
        });
      } catch (error) {
        if (cancelled) {
          return;
        }
        setCodeRequest({
          data: null,
          error:
            error instanceof Error
              ? error.message
              : "Could not render this email.",
          isLoading: false,
          key: codeRequestKey,
        });
      }
    };

    void loadCode();
    return () => {
      cancelled = true;
    };
  }, [codeOutput, codeRequestKey, emailBase, selectedEmail, workspaceTab]);

  const handleEmailBaseChange = (base: HomeEmailBase) => {
    setEmailBase(base);
    if (base === "mjml-react" && codeOutput === "text") {
      setCodeOutput("html");
    }
  };

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
        <Card className="gap-0 overflow-hidden py-0">
          <CardHeader className="block px-0">
            <div className="grid min-h-12 grid-cols-[1fr_minmax(0,auto)_1fr] items-center gap-2 px-3 lg:gap-3 lg:px-4">
              <div
                className="col-start-1 row-start-1 hidden justify-self-start gap-1.5 lg:flex"
                aria-hidden="true"
              >
                <span className="size-2.5 rounded-full bg-red-400" />
                <span className="size-2.5 rounded-full bg-amber-400" />
                <span className="size-2.5 rounded-full bg-emerald-400" />
              </div>
              <h2
                className="col-start-2 row-start-1 flex min-w-0 max-w-[70vw] items-center justify-self-center gap-2 px-2 text-sm font-medium text-muted-foreground lg:max-w-full"
                title={selectedEmail.filename}
              >
                <FileIcon className="size-3.5 shrink-0" aria-hidden="true" />
                <span className="truncate">{selectedEmail.filename}</span>
              </h2>

              <ToggleGroup
                type="single"
                value={emailBase}
                size="sm"
                spacing={1}
                aria-label="Email base"
                className="col-start-3 row-start-1 hidden justify-self-end rounded-lg bg-muted p-0.5 lg:flex"
                onValueChange={(value) => {
                  if (value) {
                    handleEmailBaseChange(value as HomeEmailBase);
                  }
                }}
              >
                {homeEmailBases.map((base) => (
                  <ToggleGroupItem
                    key={base.id}
                    value={base.id}
                    aria-label={base.label}
                    className="h-7 gap-1.5 border border-transparent px-2 text-xs data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm data-[state=on]:hover:bg-background data-[state=on]:hover:text-foreground dark:data-[state=on]:border-input dark:data-[state=on]:bg-input/30 dark:data-[state=on]:hover:bg-input/30"
                  >
                    <EmailBaseIcon base={base.id} className="size-3.5" />
                    {base.label}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>

            <Separator className="lg:hidden" />

            <div className="flex h-12 items-center justify-between gap-3 px-3 lg:hidden">
              <Label htmlFor="home-email-base">Choose base</Label>
              <Select
                value={emailBase}
                onValueChange={(value) =>
                  handleEmailBaseChange(value as HomeEmailBase)
                }
              >
                <SelectTrigger
                  id="home-email-base"
                  size="sm"
                  aria-label="Choose base"
                  className="w-40 min-w-0 sm:w-48"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent align="end">
                  {homeEmailBases.map((base) => (
                    <SelectItem key={base.id} value={base.id}>
                      <EmailBaseIcon base={base.id} />
                      {base.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardHeader>

          <Separator />

          <CardContent className="p-0 lg:grid lg:h-[720px] lg:grid-cols-[14rem_minmax(0,1fr)_20rem]">
            <aside
              aria-label="Email examples"
              className="hidden flex-col bg-card lg:flex lg:border-r"
            >
              <div className="flex h-12 shrink-0 items-center px-4">
                <CardTitle className="text-sm">Emails</CardTitle>
              </div>
              <Separator />

              <div className="no-scrollbar flex flex-1 flex-col gap-1 overflow-y-auto p-2">
                {homeEmailPreviews.map((email) => {
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
                        "h-9 justify-start border px-2 text-left",
                        isSelected
                          ? "border-border bg-muted text-foreground hover:bg-muted hover:text-foreground dark:hover:bg-muted"
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
              <div className="flex h-12 shrink-0 items-center justify-between gap-3 bg-card px-3 lg:hidden">
                <Label htmlFor="home-email-template">Choose template</Label>
                <Select
                  value={selectedEmailId}
                  onValueChange={(value) =>
                    handleEmailChange(value as EmailRecipeId)
                  }
                >
                  <SelectTrigger
                    id="home-email-template"
                    size="sm"
                    aria-label="Choose template"
                    className="w-40 min-w-0 sm:w-48"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent align="end">
                    {homeEmailPreviews.map((email) => (
                      <SelectItem key={email.id} value={email.id}>
                        {email.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Separator className="lg:hidden" />

              <div className="flex h-12 shrink-0 items-center justify-between gap-2 bg-card px-4">
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
                    <CodeXmlIcon className="size-3.5" aria-hidden="true" />
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
                ) : null}
              </div>

              <Separator />

              <TabsContent value="preview" className="min-h-0">
                <div className="h-[520px] overflow-auto p-2 sm:h-[620px] sm:p-4 lg:h-[672px] lg:p-5">
                  <div
                    className={cn(
                      "mx-auto w-full max-w-[375px] bg-background shadow-xl transition-[width] duration-200",
                      viewport === "desktop"
                        ? "lg:w-[600px] lg:max-w-full"
                        : "lg:w-[375px]"
                    )}
                  >
                    <HomeEmailPreview
                      emailId={selectedEmail.id}
                      selectedId={selectedComponentId}
                      onSelect={setSelectedComponentId}
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="code" className="min-h-0">
                <CodeViewer
                  availableOutputs={availableCodeOutputs}
                  error={
                    codeRequest.key === codeRequestKey
                      ? codeRequest.error
                      : null
                  }
                  isLoading={
                    codeRequest.key === codeRequestKey && codeRequest.isLoading
                  }
                  output={codeOutput}
                  selectedOutput={selectedCodeOutput}
                  onOutputChange={setCodeOutput}
                />
              </TabsContent>
            </Tabs>

            <aside
              aria-label="Components used in the selected email"
              className="no-scrollbar border-t bg-card lg:overflow-y-auto lg:border-t-0 lg:border-l"
            >
              <div className="flex h-12 shrink-0 items-center justify-between gap-3 px-4">
                <CardTitle className="text-sm">Components Used</CardTitle>
                <Badge
                  variant="outline"
                  className="font-mono text-muted-foreground"
                >
                  {selectedEmail.componentIds.length}
                </Badge>
              </div>
              <Separator />

              <CardContent className="p-2">
                <div className="no-scrollbar flex gap-2 overflow-x-auto lg:flex-col lg:gap-1">
                  {selectedEmail.componentIds.map((componentId, index) => {
                    const part = homeEmailComponentCatalog[componentId];
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
                          "h-9 min-w-48 justify-start gap-2.5 border px-2 text-left lg:min-w-0",
                          isSelected
                            ? "border-blue-500/40 bg-blue-500/10 text-blue-700 hover:bg-blue-500/10 hover:text-blue-700 dark:text-blue-300 dark:hover:bg-blue-500/10 dark:hover:text-blue-300"
                            : "border-transparent text-muted-foreground hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-700 dark:hover:bg-blue-500/10 dark:hover:text-blue-300"
                        )}
                        onClick={() => handleComponentChange(componentId)}
                      >
                        <Badge
                          variant="outline"
                          className={cn(
                            "size-6 bg-background px-0 font-mono",
                            isSelected && "border-blue-500/40 text-blue-600"
                          )}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </Badge>
                        <span className="min-w-0 flex-1 truncate font-medium">
                          {part.label}
                        </span>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>

              <Separator />

              <CardContent className="p-4" aria-live="polite">
                <h3 className="text-lg font-semibold tracking-tight">
                  <Link
                    href={`/docs/components/${emailBase}/${selectedComponent.docsPath}`}
                    className="group inline-flex items-center gap-1.5 rounded-sm underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    transitionTypes={["nav-forward"]}
                  >
                    {selectedComponent.label}
                    <ArrowUpRightIcon
                      className="size-4 text-muted-foreground transition-colors group-hover:text-foreground"
                      aria-hidden="true"
                    />
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {selectedComponent.description}
                </p>

                <CodeBlockCommand
                  __bun__={`bunx --bun shadcn@latest add ${registryItem}`}
                  __npm__={`npx shadcn@latest add ${registryItem}`}
                  __pnpm__={`pnpm dlx shadcn@latest add ${registryItem}`}
                  __yarn__={`yarn shadcn@latest add ${registryItem}`}
                  className="mt-4 border border-border/70 dark:bg-background/60"
                />
              </CardContent>
            </aside>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
