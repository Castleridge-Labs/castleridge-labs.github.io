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
    title: "Sean O'Mally vs Aljamain Sterling",
    date: "2021-08-07",
    location: "Las Vegas, Nevada",
  },
  {
    id: "12346",
    title: "Sean O'Mally vs Aljamain Sterling",
    date: "2021-08-07",
    location: "Las Vegas, Nevada",
  },
];

const UFCPage: React.FC = () => {
  return (
    <main className="container p-6 grid grid-cols-1 gap-3">
      <div>
        <Button>Upcoming Events</Button>
        <Button variant="secondary">
          <Link href={"/event/past"}>Past Events</Link>
        </Button>
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
