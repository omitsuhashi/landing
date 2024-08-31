import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import defaultTheme from "@/theme";
import HeaderBase from "@/components/molecular/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "the3合同会社",
  description: "the3合同会社",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />

        {/* body */}
        <body className={inter.className}>
          {/* header */}
          <Box marginX={4}>
            <HeaderBase />
          </Box>
          <Container maxWidth="md">{children}</Container>
        </body>
      </ThemeProvider>
    </html>
  );
}
