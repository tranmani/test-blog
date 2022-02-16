export interface Category {
  name: string;
  slug: string;
  isFolder: boolean;
  items?: Category[];
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  picture: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
}

// export type CategoryType {

// }