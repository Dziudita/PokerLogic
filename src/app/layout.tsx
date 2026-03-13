import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "PokerLogic",
  description: "Simple Texas Hold'em prototype",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
