
// Global Configuration Constants
export const SOCIAL_LINKS = {
  TELEGRAM: 'https://t.me/jemal9056',
  FACEBOOK: 'https://www.facebook.com/100074004668688/posts/pfbid02RZ36w8yVKKMJVREKUEh474GAj13AzaYwSRiryGD86ofpWVpEKsg4rquo3Pcnqc3Ul/?app=fbl',
  YOUTUBE: 'https://www.youtube.com/@soof-umarmedia256'
};

export const ADMIN_PROFILE = {
  NAME: 'Jemal Fano Haji',
  EMAIL: 'admin@iftu.edu'
};

export enum NavSection {
  DASHBOARD = 'DASHBOARD',
  COURSES = 'COURSES',
  TEACHERS = 'TEACHERS',
  STUDENTS = 'STUDENTS',
  SCHOOLS = 'SCHOOLS',
  AI_ASSISTANT = 'AI_ASSISTANT',
  VIDEO_STUDIO = 'VIDEO_STUDIO',
  DOCUMENTATION = 'DOCUMENTATION',
  PROFILE = 'PROFILE',
  ABOUT = 'ABOUT',
  EXAMS = 'EXAMS',
  MATERIALS = 'MATERIALS',
  NEWS = 'NEWS',
  RESULTS = 'RESULTS',
  GRADEBOOK = 'GRADEBOOK',
  REPORTS = 'REPORTS',
  PAYMENTS = 'PAYMENTS',
  TRANSCRIPT = 'TRANSCRIPT',
  CERTIFICATE = 'CERTIFICATE'
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'Admin' | 'Teacher' | 'Student';
}

export interface Address {
  country: string;
  state: string;
  zone: string;
  woreda: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Teacher' | 'Student' | 'Admin';
  status: 'Active' | 'Inactive';
  joinDate: string;
  avatar: string;
  department: string;
  phone?: string;
  // Extended Profile Fields
  nationalId?: string;
  gender?: 'Male' | 'Female';
  birthday?: string;
  motherName?: string;
  address?: Address;
  
  // Student Specific
  promotedGrade?: string; // Previous grade
  currentGrade?: string;

  // Teacher/Employee Specific
  qualification?: 'Diploma' | 'BSc/BA' | 'MSc/MA' | 'PhD';
  employmentType?: 'Full-time' | 'Part-time' | 'Contract';
  campusId?: string;
  assignedSubjects?: string[];
  assignedGrades?: string[]; // e.g., ["Grade 9", "Grade 10", "Level 1"]
}

export interface CourseModule {
  id: string;
  title: string;
  lessons: string[];
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  students: number;
  progress: number;
  category: string;
  image: string;
  description?: string;
  objectives?: string[];
  prerequisites?: string[];
  duration?: string;
  campusId?: string; // Links course to a specific school/campus
  curriculum?: CourseModule[];
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number; 
}

export interface Exam {
  id: string;
  title: string;
  courseId: string;
  courseTitle: string;
  teacherId: string;
  date: string;
  duration: string; 
  totalQuestions: number;
  status: 'Upcoming' | 'Active' | 'Completed';
  gradeLevel?: string;
  questions?: Question[];
  passingScore?: number;
  shuffleQuestions?: boolean;
}

export interface ExamAttempt {
  id: string;
  examId: string;
  studentId: string;
  score: number;
  total: number;
  date: string;
  answers: Record<string, number>;
}

export interface Material {
  id: string;
  title: string;
  type: 'Note' | 'Document' | 'Video' | 'Link';
  courseTitle: string;
  uploadDate: string;
  size?: string;
  author: string;
}

export interface School {
  id: string;
  name: string;
  location: string;
  students: number;
  phone: string;
  web: string;
  type: 'Central' | 'Branch' | 'Hub' | 'Online' | 'Vocational';
  principal?: string;
  established?: string;
  image?: string;
  programs?: string[];
}

export interface NewsPost {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: 'Update' | 'Event' | 'Institutional' | 'Recruitment' | 'HR';
  hasRegistration?: boolean;
  registrationCount?: number;
  attachment?: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  priority: 'High' | 'Medium' | 'Low';
}

export interface StudentResult {
  id: string;
  examTitle: string;
  courseTitle: string;
  score: number;
  total: number;
  grade: string;
  date: string;
  status: 'Pass' | 'Fail';
}

export interface GradeEntry {
  studentId: string;
  studentName: string;
  avatar: string;
  examResults: StudentResult[];
  overallGpa: number;
}

export interface PaymentTransaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  method: 'Telebirr' | 'CBE' | 'System';
  status: 'Completed' | 'Pending' | 'Failed';
  type: 'Credit' | 'Debit';
}

// New Interfaces for Transcript System
export interface SubjectGrade {
  sem1: number;
  sem2: number;
}

export interface StudentAcademicRecord {
  studentId: string;
  // Key is subject name (e.g., 'MATHEMATICS') - Represents Current Grade (G12)
  subjects: Record<string, SubjectGrade>; 
  // Historical grades: Key is Grade Level (e.g., "9"), Value is Subject map
  previousGrades?: Record<number, Record<string, SubjectGrade>>;
}

declare global {
  interface Window {
    html2pdf: () => any;
    webkitAudioContext: typeof AudioContext;
  }
}
