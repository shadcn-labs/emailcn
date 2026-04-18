import type { Metadata } from "next";

import { ActiveThemeProvider } from "@/components/active-theme";
import { Analytics } from "@/components/analytics";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { META_THEME_COLORS, siteConfig } from "@/lib/config";
import { fontVariables } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";

export const metadata: Metadata = {
  authors: [
    {
      name: "Aniket Pawar",
      url: "https://github.com/Aniket-508",
    },
  ],
  category: "technology",
  classification: "Developer Tools",
  creator: "Aniket Pawar",
  description: siteConfig.description,
  icons: {
    apple: "/apple-touch-icon.png",
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
  },
  keywords: [
    "react-email",
    "shadcn",
    "email components",
    "email templates",
    "transactional email",
    "react components",
    "component library",
    "tailwind components",
    "ui components",
    "nextjs components",
    "npx shadcn add",
  ],
  manifest: `${siteConfig.url}/site.webmanifest`,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    description: siteConfig.description,
    images: [
      {
        alt: siteConfig.name,
        height: 630,
        url: `${siteConfig.url}/opengraph-image.png`,
        width: 1200,
      },
    ],
    locale: "en_US",
    siteName: siteConfig.name,
    title: siteConfig.name,
    type: "website",
    url: siteConfig.url,
  },
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@alaymanguy",
    description: siteConfig.description,
    images: [`${siteConfig.url}/opengraph-image.png`],
    title: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareSourceCode",
              applicationCategory: "DeveloperApplication",
              author: {
                "@type": "Person",
                name: "Aniket Pawar",
                url: "https://github.com/Aniket-508",
              },
              codeRepository: siteConfig.links.github,
              description: siteConfig.description,
              license: "https://opensource.org/licenses/MIT",
              name: siteConfig.name,
              operatingSystem: "Cross-platform",
              programmingLanguage: ["TypeScript", "React", "Next.js"],
              runtimePlatform: "Node.js",
              url: siteConfig.url,
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
                document.documentElement.classList.add('layout-fixed')
              } catch (_) {}
            `,
          }}
        />
        <meta name="theme-color" content={META_THEME_COLORS.light} />
      </head>
      <body
        className={cn(
          "text-foreground group/body overscroll-none font-sans antialiased [--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*14)] xl:[--footer-height:calc(var(--spacing)*24)]",
          fontVariables,
        )}
      >
        <ThemeProvider>
          <ActiveThemeProvider>
            {children}
            <TailwindIndicator />
            <Toaster position="top-center" />
            <Analytics />
          </ActiveThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
