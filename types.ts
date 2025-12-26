
export interface SignupData {
  id?: number;
  created_at?: string;
  name: string;
  email: string;
  company: string;
  industry: string;
  budget: string;
  need: string;
}

export enum AppStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface GeminiAnalysis {
  summary: string;
  recommendedAgencyType: string;
  priorityTips: string[];
}
