import { LayoutDashboard, Building2 } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
} from "../ui/sidebar";
import { cn } from "@/src/lib/utils";
import Link from "next/link";

// 메뉴 데이터 (나중에 tRPC로 교체 가능)
const items = [
  {
    title: "Analytics",
    url: "/analytics",
    icon: LayoutDashboard,
  },
  {
    title: "Organizations",
    url: "/organizations",
    icon: Building2,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="none" className="border-r">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <Link
                    href={item.url}
                    className={cn(
                      "w-full flex flex-row gap-3 pl-4 py-2.5 items-center",
                      "transition-all duration-200 ease-in-out",
                      "text-slate-600",

                      "hover:bg-slate-100",
                      "hover:text-slate-900",
                      "group",
                    )}
                  >
                    <item.icon className="w-5 h-5 transition-colors group-hover:text-slate-900" />
                    <span className="text-sm font-medium">{item.title}</span>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
