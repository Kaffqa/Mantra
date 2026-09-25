export interface User {
  id: string;
  email: string;
  full_name: string;
  university: string;
  major: string;
  bio: string;
  intent: string;
  profile_image_url: string;
  face_image_url: string;
  ktm_image_url: string;
  ktm_verified: boolean;
  onboarding_completed: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Skill {
  id: string;
  user_id: string;
  skill_name: string;
}

export interface Match {
  id: string;
  requester_id: string;
  target_id: string;
  status: "pending" | "connected" | "rejected";
  rejected_by: string | null;
  cooldown_until: string | null;
  created_at: string;
  updated_at: string;
}

export interface Message {
  id: string;
  match_id: string;
  sender_id: string;
  content: string;
  is_read: boolean;
  created_at: string;
}

export interface Report {
  id: string;
  reporter_id: string;
  reported_id: string;
  reason: string;
  description: string | null;
  status: "pending" | "reviewed" | "resolved";
  created_at: string;
}

export interface Block {
  id: string;
  blocker_id: string;
  blocked_id: string;
  created_at: string;
}

export interface ChatPreview {
  match_id: string;
  partner: User;
  last_message: Message | null;
  unread_count: number;
}

export interface ProfileWithSkills extends User {
  skills: string[];
}
