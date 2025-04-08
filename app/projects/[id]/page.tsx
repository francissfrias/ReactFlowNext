import ProjectNodes from '../_components/ProjectNodes';

const ProjectViewPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  console.log('id', id);
  return <ProjectNodes />;
};

export default ProjectViewPage;
