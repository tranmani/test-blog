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

export interface Promotion {
  id: number;
  altText: string;
  link: string;
  picture: string;
}

export const Categories = ["Casino", "Sports", "Football", "Esports", "New Slots", "Guides", "Affiliate", "Betfinal"];
export const FootballSubCategories = ["Premier League", "Championship", "La Liga", "Bundesliga", "Serie A", "Liga 1"]

export const CASINO = "Casino"
export const LIVE_CASINO = "Live Casino"
export const SPORTS = "Sports"
export const FOOTBALL = "Football"
export const PREMIER_LEAGUE = "Premier League"
export const CHAMPIANSHIP = "Championship"
export const LA_LIGA = "La Liga"
export const BUNDESLIGA = "Bundesliga"
export const SERIE_A = "Serie A"
export const LIGA_1 = "Liga 1"
export const E_SPORTS = "E-Sports"
export const NEW_SLOT = "New Slot"
export const GUIDES = "Guides"
export const AFFILIATES = "Affiliates"
export const BETFINAL = "Betfinal"