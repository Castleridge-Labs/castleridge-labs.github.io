import { DiscussionSection } from "@/components/discussion-section";
import { Step } from "@/components/rating-step";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { fightCards, ratings } from "@/mockdata/mockdata";
import Link from "next/link";
import React from "react";

const UFCPage: React.FC = () => {
  const steps = [
    {
      title: "Select a Fight Card",
      implemented: true,
    },
    {
      title: "Review Individual Fights",

      implemented: false,
    },
    {
      title: "Rate the Judge's Scorecard",
      implemented: false,
    },
    {
      title: "Share your Perspective",
      implemented: false,
    },
    {
      title: "Engage in Discussions",
      implemented: false,
    },
  ];

  // Function to calculate average rating for a judge
  function calculateAverageRating(judge: string) {
    const judgeRatings = ratings.filter((rating) => rating.judge === judge);
    if (judgeRatings.length === 0) return "-"; // Return 0 if no ratings exist for the judge
    const totalRating = judgeRatings.reduce(
      (sum, rating) => sum + rating.rating,
      0
    );
    return totalRating / judgeRatings.length;
  }

  // Function to calculate satisfaction percentage
  function calculateSatisfactionPercentage(averageRating: number | "-") {
    if (typeof averageRating === "string") {
      return "-";
    }
    const maxRating = 5; // Adjust based on your rating scale
    const satisfactionPercentage = (averageRating / maxRating) * 100;
    return satisfactionPercentage.toFixed(1);
  }

  return (
    <main className="container p-6 grid grid-cols-1 gap-3">
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-2xl text-balance font-semibold tracking-tight transition-colors first:mt-0">
        Rate UFC Judges&apos; Scorecards{" "}
        <p className="text-sm">(Coming soon...)</p>
      </h2>
      <p className="leading-7">
        <b>Purpose: </b>As passionate participants in the world of mixed martial
        arts, we understand the importance of transparent and accurate judging
        in every fight. This platform has been designed to empower fighters like
        you to share your valuable insights and opinions on judges&apos;
        scorecards, fostering a community-driven effort to enhance the fairness
        and integrity of the sport.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {steps.map((step, index) => (
          <Step
            key={index}
            stepNumber={index + 1}
            title={step.title}
            implemented={step.implemented}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fightCards.map((fightCard, index) => (
          <Card key={index}>
            <CardHeader className="space-y-1">
              <CardTitle className="text-xl text-balance">
                {fightCard.title}
              </CardTitle>
              <CardDescription>
                <span className="grid grid-cols-1"></span>
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-2">
              <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                  <b>Weight Class:</b> {fightCard.weightClass}
                </p>
                <p>
                  <b>Method:</b> {fightCard.method}
                </p>
                <p>
                  <b>Round:</b> {fightCard.round}
                </p>
                <p>
                  <b>Referee:</b> {fightCard.referee}
                </p>
                <p>
                  <b>Location:</b> {fightCard.location}
                </p>
              </div>
              <h3 className="text-md font-semibold mt-4">
                Judges&apos; Scorecards
              </h3>
              <ul className="pl-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 md:gap-3 lg:grid-cols-2">
                {fightCard.judges.map((judge) => (
                  <li key={judge.name}>
                    {judge.name}: {judge.score}
                    <p className="text-sm">
                      Average: {calculateAverageRating(judge.name)}
                    </p>
                    <p className="text-sm">
                      Satisfaction Score:{" "}
                      {calculateSatisfactionPercentage(
                        calculateAverageRating(judge.name)
                      )}
                      %
                    </p>
                  </li>
                ))}
              </ul>
              <Button>
                <Link href={`/ratings/${fightCard.id}`}>Rate this Fight</Link>
              </Button>
            </CardContent>
            <CardFooter>
              <DiscussionSection comments={fightCard.comments} />
            </CardFooter>
          </Card>
        ))}
      </div>
      <small className="text-sm font-medium leading-none mt-3 mb-10">
        By participating in this feedback platform, you play an active role in
        shaping the conversation around judging decisions and promoting
        transparency within the MMA community. Your feedback matters, and
        together, we can work towards a sport that is not only thrilling to
        watch but also fair and just for all those who step into the octagon.
      </small>
    </main>
  );
};

export default UFCPage;
