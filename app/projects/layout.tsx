import { AppSidebar } from '@/components/AppSiderBar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Project } from '@/lib/model/Project';
import { ReactFlowProvider } from '@xyflow/react';
import { CheckCircle } from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export interface Items {
  title: string;
  url: string;
  icon: React.ComponentType;
}

export default async function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let getAllProjects;
  try {
    getAllProjects = await Project.find({}).lean().exec();
  } catch (error) {
    console.error('Error fetching projects:', error);
    getAllProjects = [];
  }

  const items: Items[] = getAllProjects.map((project) => {
    return {
      title: project.title,
      url: `/projects/${project._id}`,
      icon: CheckCircle,
    };
  });
  return (
    <>
      <SidebarProvider>
        <AppSidebar items={items} />
        <main className='flex h-screen w-screen flex-col overflow-hidden'>
          <SidebarTrigger className='fixed z-40' />
          <ReactFlowProvider>{children}</ReactFlowProvider>
        </main>
      </SidebarProvider>
    </>
  );
}
