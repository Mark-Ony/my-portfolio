import { supabase } from './supabaseClient';
import { Project } from '@/lib/databaseschema';

export async function getAllProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching projects:', error);
    return [];
  }

  return data as Project[];
}
export async function getProjectById(id: number) {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single();  

  if (error) {
    console.error('Error fetching project by ID:', error);
    return null;
  }

  return data as Project;
}