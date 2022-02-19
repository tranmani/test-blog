export interface CategoryType {
  name: string;
  slug: string;
  isFolder: boolean;
  items?: CategoryType[];
}

export interface ArticleType {
  id: number;
  title: string;
  slug: string;
  picture: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
}

export interface PromotionType {
  id: number;
  altText: string;
  link: string;
  picture: string;
}

export interface LiveFootballType {
  id: number;
  homeTeam: {
    name: string;
    logo: string;
  }
  awayTeam: {
    name: string;
    logo: string;
  };
  link: string;
}

export interface AdvertisementType {
  picture: string;
  link: string;
}

export interface CasinoWinType {
  id: number;
  picture: string;
  name: string;
  amount: string;
  game: string;
  link: string;
}

export interface HighProfitBetType {
  id: number;
  betName: string;
  a: string;
  b: string;
  low: string;
  high: string;
  link: string;
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