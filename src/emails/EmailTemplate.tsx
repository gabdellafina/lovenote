import {
  Html,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
} from "@react-email/components";

import { themes, ThemeKey } from "@/lib/themes";

interface EmailTemplateProps {
  message: string;
  subject: string;
  theme: ThemeKey;
  name: string;
  isAnonymous: boolean;
}

export default function EmailTemplate({
  message,
  subject,
  theme,
  name,
  isAnonymous,
}: EmailTemplateProps) {
  const currentTheme = themes[theme] || themes.blue;
  const emojis = currentTheme.preview.emojiSet;

  return (
    <Html>
      <Body
        style={{
          backgroundColor: "#e5e7eb",
          fontFamily: "Arial, sans-serif",
          padding: "20px",
        }}
      >
        <Container
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          <Section style={{ padding: "16px", fontSize: "12px", color: "#6b7280" }}>
            <Text>From: LoveNote</Text>
            <Text>To: you</Text>
            <Text>Subject: {currentTheme.emoji} {subject || "i miss you"}</Text>
          </Section>

          <Section
            style={{
              backgroundColor: currentTheme.email.accent,
              color: "#ffffff",
              textAlign: "center",
              padding: "12px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            💌 LoveNote
          </Section>

          <Section style={{ padding: "24px", textAlign: "center" }}>
            <Text style={{ fontSize: "18px", marginBottom: "12px" }}>
              {emojis[0]} {emojis[1]} {emojis[2]}
            </Text>

            <Section
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "16px",
                padding: "20px",
                backgroundColor: theme === "goth" ? "#1f2937" : "#ffffff",
              }}
            >
              <Heading
                style={{
                  fontSize: "20px",
                  fontStyle: "italic",
                  color: theme === "goth" ? "#f9fafb" : "#1f2937",
                }}
              >
                {currentTheme.emoji} {subject || "i miss you"}
              </Heading>

              <Hr />

              <Text
                style={{
                  fontSize: "14px",
                  color: theme === "goth" ? "#d1d5db" : "#4b5563",
                  whiteSpace: "pre-line",
                }}
              >
                {message || "write your message..."}
              </Text>

              <Hr />

              <Text
                style={{
                  fontStyle: "italic",
                  fontSize: "13px",
                  color: theme === "goth" ? "#9ca3af" : "#6b7280",
                }}
              >
                With love,
              </Text>

              <Text
                style={{
                  fontWeight: "bold",
                  color: theme === "goth" ? "#f3f4f6" : "#111827",
                }}
              >
                {isAnonymous ? "Anonymous 💌" : name || "your name"}
              </Text>

              <Text style={{ fontSize: "18px", marginTop: "10px" }}>
                {emojis[0]}
              </Text>
            </Section>

            <Text
              style={{
                fontSize: "12px",
                marginTop: "20px",
                color: theme === "goth" ? "#6b7280" : "#9ca3af",
              }}
            >
              sent with love from LoveNote
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}