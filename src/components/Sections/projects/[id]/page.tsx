import { getProjectById } from '@/lib/projects';
import { ProjectDetail } from '@/components/ProjectDetail';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    id: number;
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const project = await getProjectById(params.id.toString());

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}