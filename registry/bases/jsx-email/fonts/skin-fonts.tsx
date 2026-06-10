import { Font } from "jsx-email";

/** From [Resend Arcane demo](https://github.com/resend/react-email/blob/canary/apps/demo/emails/04-Arcane/skin-fonts.tsx). */
export const SkinFonts = () => (
  <>
    <Font
      fallbackFontFamily={["Georgia", "Times New Roman", "serif"]}
      fontFamily="Instrument Serif"
      fontStyle="normal"
      fontWeight={400}
      webFont={{
        format: "woff2",
        url: "https://fonts.gstatic.com/s/instrumentserif/v5/jizBRFtNs2ka5fXjeivQ4LroWlx-6zUTjg.woff2",
      }}
    />
    <Font
      fallbackFontFamily={["Arial", "sans-serif"]}
      fontFamily="Inter"
      fontStyle="normal"
      fontWeight={400}
      webFont={{
        format: "woff2",
        url: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2",
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
