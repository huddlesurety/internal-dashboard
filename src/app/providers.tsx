"use client"; // essental for providers

import { SidebarProvider } from "../components/ui/sidebar";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider defaultOpen={true}>{children}</SidebarProvider>
    </>
  );
}
