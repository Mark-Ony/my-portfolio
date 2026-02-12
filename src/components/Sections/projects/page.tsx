import { getAllProjects } from '@/lib/projects';
import { ProjectsPage } from '@/components/ProjectsPage';

export default async function ProjectsListPage() {
  const projects = await getAllProjects();
  return <ProjectsPage projects={projects} />;
}