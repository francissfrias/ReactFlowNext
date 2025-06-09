import { Home, Plus } from 'lucide-react';

import { Items } from '@/app/projects/layout';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';

// Menu items.
const defaultItems: Items[] = [
  {
    title: 'Home',
    url: '/projects',
    icon: Home,
  },
  {
    title: 'Create Project',
    url: '/projects/create',
    icon: Plus,
  },
];

export async function AppSidebar({ items }: { items?: Items[] }) {
  if (!items || items.length === 0) {
    items = [];
  }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <div className='flex flex-col gap-2'>
                {defaultItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url} prefetch>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </div>
              <div className='border-t border-gray-200 my-2' />
              <div className='flex flex-col gap-2'>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title + Math.random()}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url} prefetch>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
