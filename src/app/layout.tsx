import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "山水涧 - 专业文玩饰品",
  description: "专业经营琥珀、蜜蜡、松石配饰、文玩木串、水晶猛犸牙手串等各类文玩饰品",
  icons: {
    icon: '/icon',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
