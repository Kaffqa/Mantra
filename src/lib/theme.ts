export const COLORS = {
  brand: {
    red: "#E53935",
    blue: "#1E40AF",
    yellow: "#FACC15",
    black: "#1A1A2E",
    bg: "#FAFAFA",
    surface: "#FFFFFF",
  },
  character: {
    pink: "#F48FB1",
    green: "#4DB6AC",
    yellow: "#FFD54F",
    blue: "#5C6BC0",
    purple: "#B39DDB",
  },
} as const;

export const SHADOWS = {
  brutal: {
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "#1A1A2E",
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 5,
  },
  brutalSm: {
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "#1A1A2E",
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 3,
  },
  brutalLg: {
    shadowOffset: { width: 6, height: 6 },
    shadowColor: "#1A1A2E",
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 8,
  },
} as const;

export const INTENTS = [
  "Cari Partner Proyek",
  "Barter Skill",
  "Bangun Tim Lomba",
  "Kolaborasi Riset",
  "Belajar Bareng",
] as const;

export const POPULAR_SKILLS = [
  "UI/UX Design",
  "React Native",
  "Machine Learning",
  "Web Development",
  "Data Science",
  "Python",
  "JavaScript",
  "Figma",
  "Flutter",
  "Java",
  "Cloud Computing",
  "Copywriting",
  "Digital Marketing",
  "Video Editing",
  "Graphic Design",
  "Backend Development",
  "DevOps",
  "Project Management",
  "Public Speaking",
  "Research",
] as const;
