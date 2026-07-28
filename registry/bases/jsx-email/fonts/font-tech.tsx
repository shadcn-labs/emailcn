import { Font } from "jsx-email";

const geistLatinWoff2 =
  "https://fonts.gstatic.com/s/geist/v4/gyByhwUxId8gMEwcGFU.woff2";

export const TechFonts = () => (
  <>
    <Font
      fallbackFontFamily={["Arial", "sans-serif"]}
      fontFamily="Geist"
      fontStyle="normal"
      fontWeight={400}
      webFont={{ format: "woff2", url: geistLatinWoff2 }}
    />
    <Font
      fallbackFontFamily={["Arial", "sans-serif"]}
      fontFamily="Geist"
      fontStyle="normal"
      fontWeight={450}
      webFont={{ format: "woff2", url: geistLatinWoff2 }}
    />
    <Font
      fallbackFontFamily={["Arial", "sans-serif"]}
      fontFamily="Geist"
      fontStyle="normal"
      fontWeight={500}
      webFont={{ format: "woff2", url: geistLatinWoff2 }}
    />
    <Font
      fallbackFontFamily={["Arial", "sans-serif"]}
      fontFamily="Geist"
      fontStyle="normal"
      fontWeight={600}
      webFont={{ format: "woff2", url: geistLatinWoff2 }}
    />
    <Font
      fallbackFontFamily={["Arial", "sans-serif"]}
      fontFamily="Geist"
      fontStyle="normal"
      fontWeight={700}
      webFont={{ format: "woff2", url: geistLatinWoff2 }}
    />
    <Font
      fallbackFontFamily={["Arial", "sans-serif"]}
      fontFamily="Inter"
      fontStyle="normal"
      fontWeight={400}
      webFont={{
        format: "truetype",
        url: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuOKfMZg.ttf",
      }}
    />
    <Font
      fallbackFontFamily={["Arial", "sans-serif"]}
      fontFamily="Inter"
      fontStyle="normal"
      fontWeight={450}
      webFont={{
        format: "truetype",
        url: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuOKfMZg.ttf",
      }}
    />
    <Font
      fallbackFontFamily={["Arial", "sans-serif"]}
      fontFamily="Inter"
      fontStyle="normal"
      fontWeight={500}
      webFont={{
        format: "truetype",
        url: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fMZg.ttf",
      }}
    />
    <Font
      fallbackFontFamily={["Arial", "sans-serif"]}
      fontFamily="Inter"
      fontStyle="normal"
      fontWeight={600}
      webFont={{
        format: "truetype",
        url: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYMZg.ttf",
      }}
    />
  </>
);
