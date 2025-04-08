import { AppSidebar } from '@/components/AppSiderBar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { ReactFlowProvider } from '@xyflow/react';

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className='flex h-screen w-screen flex-col overflow-hidden'>
          <SidebarTrigger className='fixed z-40' />
          <ReactFlowProvider>{children}</ReactFlowProvider>
        </main>
      </SidebarProvider>
    </>
  );
}
