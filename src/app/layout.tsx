import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { AppSidebar } from "../components/common/app-sidebar";

const sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Internal Dashboard",
  description: "Huddle Internal Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${sans.variable} antialiased`}>
        <Providers>
          <div className="flex h-screen w-full overflow-hidden">
            <AppSidebar />
            <main className="flex-1 min-w-0 overflow-y-auto">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
