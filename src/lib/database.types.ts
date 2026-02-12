export type Project = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  github_url: string | null;
  live_url: string | null;
  technologies: string[];
  featured: boolean;
  created_at: string;
};