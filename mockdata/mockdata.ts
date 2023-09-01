import { FightCard } from "@/types/fight-card";

export const fightCards: FightCard[] = [
  {
    id: "12345", // Replace with actual ID
    title: "Vicente Luque vs. Rafael Dos Anjos",
    mainFighter: "Vicente Luque",
    opponent: "Rafael Dos Anjos",
    weightClass: "Welterweight",
    location: "Las Vegas, Nevada",
    method: "Decision - Unanimous",
    round: 5,
    time: "5:00",
    referee: "Mark Smith",
    judges: [
      { name: "Ron McCarthy", score: "46 - 49" },
      { name: "Sal D'amato", score: "47 - 48" },
      { name: "Junichiro Kamijo", score: "47 - 48" },
    ],
    comments: [
      "I think the judge's scorecard was accurate. Vicente Luque was the clear winner in this fight.",
      "I disagree with the judge's scorecard. Rafael Dos Anjos should have won this fight.",
    ],
  },
  {
    id: "12346", // Replace with actual ID
    title: "Jon Jones vs Dominick Reyes",
    mainFighter: "Jon Jones",
    opponent: "Dominick Reyes",
    weightClass: "Light Heavyweight",
    location: "Houston, Texas",
    method: "Decision - Unanimous",
    round: 5,
    time: "5:00",
    referee: "Herb Dean",
    judges: [
      { name: "Chris Lee", score: "47 - 48" },
      { name: "Marc Goddard", score: "47 - 48" },
      { name: "Joe Solis", score: "47 - 48" },
    ],
    comments: [
      "I think the judge's scorecard was accurate. Vicente Luque was the clear winner in this fight.",
      "I disagree with the judge's scorecard. Rafael Dos Anjos should have won this fight.",
    ],
  },
  {
    id: "12347", // Replace with actual ID
    title: "Valentina Shevchenko vs Katlyn Chookagian",
    mainFighter: "Valentina Shevchenko",
    opponent: "Katlyn Chookagian",
    weightClass: "Women's Flyweight",
    location: "Houston, Texas",
    method: "TKO - Doctor's Stoppage",
    round: 3,
    time: "1:03",
    referee: "Dan Miragliotta",
    judges: [
      { name: "Derek Cleary", score: "49 - 46" },
      { name: "Eric Colon", score: "49 - 46" },
      { name: "Chris Lee", score: "49 - 46" },
    ],
    comments: [
      "I think the judge's scorecard was accurate. Vicente Luque was the clear winner in this fight.",
      "I disagree with the judge's scorecard. Rafael Dos Anjos should have won this fight.",
    ],
  },
  {
    id: "12348", // Replace with actual ID
    title: "Vicente Luque vs Rafael Dos Anjos",
    mainFighter: "Vicente Luque",
    opponent: "Rafael Dos Anjos",
    weightClass: "Welterweight",
    location: "Las Vegas, Nevada",
    method: "Decision - Unanimous",
    round: 5,
    time: "5:00",
    referee: "Mark Smith",
    judges: [
      { name: "Ron McCarthy", score: "46 - 49" },
      { name: "Sal D'amato", score: "47 - 48" },
      { name: "Junichiro Kamijo", score: "47 - 48" },
    ],
    comments: [
      "I think the judge's scorecard was accurate. Vicente Luque was the clear winner in this fight.",
      "I disagree with the judge's scorecard. Rafael Dos Anjos should have won this fight.",
    ],
  },
];

// Sample data structure representing user ratings and feedback
export const ratings = [
  { judge: "Ron McCarthy", rating: 4 },
  { judge: "Ron McCarthy", rating: 5 },
  { judge: "Herb Dean", rating: 4 },
  { judge: "Sal D'amato", rating: 5 },
  { judge: "Sal D'amato", rating: 4 },
  { judge: "Junichiro Kamijo", rating: 5 },
  { judge: "Junichiro Kamijo", rating: 5 },
  { judge: "Junichiro Kamijo", rating: 5 },
  { judge: "Junichiro Kamijo", rating: 4 },
  { judge: "Chris Lee", rating: 4 },
  // ... more ratings
];
