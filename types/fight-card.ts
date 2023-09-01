export interface FightCard {
  id: string;
  title: string;
  mainFighter: string;
  opponent: string;
  weightClass: string;
  location: string;
  method: string;
  round: number;
  time: string;
  referee: string;
  judges: {
    name: string;
    score: string;
  }[];
  comments: string[];
}
