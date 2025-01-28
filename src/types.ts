export interface HeadingType {
  depth: number;
  slug: string;
  text: string;
}

export interface GroupedHeading extends HeadingType {
  subheadings: GroupedHeading[];
}

export interface ProjectLayoutProps {
  image?: string;
  title: string;
  description: string;
  ogType?: string;
  groupedHeadings: GroupedHeading[];
}

export interface HeaderProps {
  currentPath?: string;
}

export interface NavLink {
  href: string;
  label: string;
  color?: string;
  theme?: string;
}
