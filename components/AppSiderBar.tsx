import { CheckCircle, Home, Plus } from 'lucide-react';

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
import { Project } from '@/lib/model/Project';
import Link from 'next/link';

// Menu items.
const items = [
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

export async function getProjects() {
  const getAllProjects = await Project.find({}).lean().exec();

  return getAllProjects.map((project) => {
    return {
      title: project.title,
      url: `/projects/${project._id}`,
      icon: CheckCircle,
    };
  });
}

export async function AppSidebar() {
  const projects = await getProjects();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <div className='flex flex-col gap-2'>
                {items.map((item) => (
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
                {projects.map((item) => (
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
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
