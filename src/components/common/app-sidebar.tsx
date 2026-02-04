// components/app-sidebar.tsx
import { LayoutDashboard, Building2 } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

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
      {" "}
      {/* 접히지 않도록 설정 */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon className="w-5 h-5" />
                      <span className="text-base font-medium">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
