import { AppSidebar } from '@/components/AppSiderBar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { ReactFlowProvider } from '@xyflow/react';

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />

        <ReactFlowProvider>{children}</ReactFlowProvider>
      </main>
    </SidebarProvider>
  );
}
