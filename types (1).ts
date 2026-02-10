export const ADMIN_PROFILE = { NAME: 'Jemal Fano Haji', EMAIL: 'admin@iftu.edu' };
export interface InstitutionalBranding {
  bureauName: string; bureauNameLocal: string;
  zoneName: string; woredaName: string;
  schoolName: string; schoolNameLocal: string;
  academicYear: string;
}
export enum NavSection { DASHBOARD = 'DASHBOARD', COURSES = 'COURSES', TEACHERS = 'TEACHERS', STUDENTS = 'STUDENTS', AI_ASSISTANT = 'AI_ASSISTANT', PROFILE = 'PROFILE', EXAMS = 'EXAMS', GRADEBOOK = 'GRADEBOOK', TRANSCRIPT = 'TRANSCRIPT', CERTIFICATE = 'CERTIFICATE' }