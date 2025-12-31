
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
}

export interface NavLink {
  name: string;
  href: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
