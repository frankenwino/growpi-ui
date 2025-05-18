import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import type { Metadata } from "next";
import ThemeWrapper from "./components/ThemeWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "GrowPi",
  description: "Manage greenhouse sensors and monitoring",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeWrapper>
          <header></header>
          {children}
          <footer></footer>
        </ThemeWrapper>
      </body>
    </html>
  );
}
