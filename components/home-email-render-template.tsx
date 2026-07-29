import {
  Mjml,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
} from "@faire/mjml-react";
import type { ReactElement } from "react";

import type {
  ComponentPartId,
  HomeEmailBase,
} from "@/components/home-email-preview";

export interface HomeEmailRenderData {
  actionHref: string;
  actionLabel: string;
  description: string;
  eyebrow: string;
  heading: string;
  previewText: string;
  sections: {
    description: string;
    id: ComponentPartId;
    label: string;
  }[];
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const HtmlEmailTemplate = ({ data }: { data: HomeEmailRenderData }) => (
  <html lang="en">
    <body
      style={{
        backgroundColor: "#f1f5f9",
        fontFamily,
        margin: 0,
        padding: "32px 12px",
      }}
    >
      <div
        style={{
          display: "none",
          maxHeight: 0,
          maxWidth: 0,
          opacity: 0,
          overflow: "hidden",
        }}
      >
        {data.previewText}
      </div>
      <table
        align="center"
        cellPadding="0"
        cellSpacing="0"
        role="presentation"
        style={{
          backgroundColor: "#ffffff",
          borderCollapse: "collapse",
          borderRadius: "12px",
          maxWidth: "600px",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <tbody>
          <tr>
            <td style={{ padding: "48px 40px 32px", textAlign: "center" }}>
              <p
                style={{
                  color: "#2563eb",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  margin: "0 0 12px",
                  textTransform: "uppercase",
                }}
              >
                {data.eyebrow}
              </p>
              <h1
                style={{
                  color: "#0f172a",
                  fontSize: "36px",
                  letterSpacing: "-0.04em",
                  lineHeight: 1.1,
                  margin: "0 0 16px",
                }}
              >
                {data.heading}
              </h1>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "16px",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {data.description}
              </p>
            </td>
          </tr>
          {data.sections.map((section) => (
            <tr key={section.id}>
              <td
                data-component={section.id}
                style={{
                  borderTop: "1px solid #e2e8f0",
                  padding: "24px 40px",
                }}
              >
                <p
                  style={{
                    color: "#0f172a",
                    fontSize: "16px",
                    fontWeight: 600,
                    margin: "0 0 6px",
                  }}
                >
                  {section.label}
                </p>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "14px",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {section.description}
                </p>
              </td>
            </tr>
          ))}
          <tr>
            <td
              style={{
                borderTop: "1px solid #e2e8f0",
                padding: "32px 40px 40px",
                textAlign: "center",
              }}
            >
              <a
                href={data.actionHref}
                style={{
                  backgroundColor: "#2563eb",
                  borderRadius: "8px",
                  color: "#ffffff",
                  display: "inline-block",
                  fontSize: "14px",
                  fontWeight: 600,
                  padding: "12px 20px",
                  textDecoration: "none",
                }}
              >
                {data.actionLabel}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
  </html>
);

const MjmlEmailTemplate = ({ data }: { data: HomeEmailRenderData }) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{data.previewText}</MjmlPreview>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={600}>
      <MjmlSection backgroundColor="#ffffff" padding="48px 40px 32px">
        <MjmlColumn>
          <MjmlText
            align="center"
            color="#2563eb"
            fontFamily={fontFamily}
            fontSize="12px"
            fontWeight="700"
            letterSpacing="2px"
            padding="0 0 12px"
            textTransform="uppercase"
          >
            {data.eyebrow}
          </MjmlText>
          <MjmlText
            align="center"
            color="#0f172a"
            fontFamily={fontFamily}
            fontSize="36px"
            fontWeight="700"
            lineHeight="40px"
            padding="0 0 16px"
          >
            {data.heading}
          </MjmlText>
          <MjmlText
            align="center"
            color="#64748b"
            fontFamily={fontFamily}
            fontSize="16px"
            lineHeight="26px"
            padding="0"
          >
            {data.description}
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
      {data.sections.map((section) => (
        <MjmlSection
          key={section.id}
          backgroundColor="#ffffff"
          borderTop="1px solid #e2e8f0"
          padding="24px 40px"
        >
          <MjmlColumn>
            <MjmlText
              color="#0f172a"
              fontFamily={fontFamily}
              fontSize="16px"
              fontWeight="600"
              padding="0 0 6px"
            >
              {section.label}
            </MjmlText>
            <MjmlText
              color="#64748b"
              fontFamily={fontFamily}
              fontSize="14px"
              lineHeight="21px"
              padding="0"
            >
              {section.description}
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
      ))}
      <MjmlSection
        backgroundColor="#ffffff"
        borderTop="1px solid #e2e8f0"
        padding="32px 40px 40px"
      >
        <MjmlColumn>
          <MjmlButton
            backgroundColor="#2563eb"
            borderRadius="8px"
            color="#ffffff"
            fontFamily={fontFamily}
            fontSize="14px"
            fontWeight="600"
            href={data.actionHref}
            innerPadding="12px 20px"
            padding="0"
          >
            {data.actionLabel}
          </MjmlButton>
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>
);

export const getHomeEmailElement = (
  base: HomeEmailBase,
  data: HomeEmailRenderData
): ReactElement =>
  base === "mjml-react" ? (
    <MjmlEmailTemplate data={data} />
  ) : (
    <HtmlEmailTemplate data={data} />
  );
