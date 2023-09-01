import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
}

export const events: Event[] = [
  {
    id: "12345",
    title: "UFC 264: Poirier vs. McGregor 3",
    date: "July 10, 2021",
    location: "T-Mobile Arena, Las Vegas, Nevada, United States",
  },
  {
    id: "12346",
    title: "UFC on ESPN: Sandhagen vs. Dillashaw",
    date: "July 24, 2021",
    location: "UFC Apex, Enterprise, Nevada, United States",
  },
  {
    id: "12347",
    title: "UFC 265: Lewis vs. Gane",
    date: "August 7, 2021",
    location: "Toyota Center, Houston, Texas, United States",
  },
  {
    id: "12348",
    title: "UFC 266: Volkanovski vs. Ortega",
    date: "September 25, 2021",
    location: "T-Mobile Arena, Las Vegas, Nevada, United States",
  },
];

const UFCPage: React.FC = () => {
  return (
    <main className="container p-6 grid grid-cols-1 gap-3">
      <div>
        <Button variant="secondary">
          <Link href={"/event"}>Upcoming Events</Link>
        </Button>
        <Button>Past Events</Button>
      </div>

      {events.map((fightCard, index) => (
        <Card key={index}>
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl text-balance">
              {fightCard.title}
            </CardTitle>
            <CardDescription>
              <span className="grid grid-cols-1"></span>
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-2 grid-cols-3">
            <p>
              <b>Date:</b> {fightCard.date}
            </p>
            <p>
              <b>Location:</b> {fightCard.location}
            </p>
            <div className="grid col-span-1">
              <Button>
                <Link href={`/ratings/${fightCard.id}`}>View this card</Link>
              </Button>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      ))}
    </main>
  );
};

export default UFCPage;
