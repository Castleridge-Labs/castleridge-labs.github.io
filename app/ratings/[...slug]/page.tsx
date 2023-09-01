import { FightCard } from "../page";
import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";
import { fightCards } from "@/mockdata/mockdata";

interface FightPageProps {
  params: {
    slug: string;
  };
}

interface DiscussionSectionProps {
  comments: string[];
}

const DiscussionSection: React.FC<DiscussionSectionProps> = ({ comments }) => {
  // UI for displaying and participating in discussions
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Discussion</h2>
      <div className="mt-4">
        <ul className="list-disc pl-6">
          {comments.length > 0 && <li>{comments[0]}</li>}
        </ul>
      </div>
    </div>
  );
};

function getFightFromParams(params: FightPageProps["params"]): FightCard {
  const slug = params.slug.join("/");
  const fightcard = fightCards.find((fightCard) => fightCard.id === slug);

  if (!fightcard) {
    return null;
  }

  return fightcard;
}

export async function generateStaticParams() {
  return fightCards.map((fightCard) => ({
    params: {
      slug: fightCard.id.split("/"),
    },
  }));
}

const DetailedRatingPage: React.FC<FightPageProps> = ({ params }) => {
  const fight = getFightFromParams(params);

  if (!fight) {
    notFound();
  }

  // const [rating, setRating] = useState(null);
  // const [comment, setComment] = useState("");

  const handleRate = (newRating) => {
    // setRating(newRating);
    // Update the rating in your data storage or API
  };

  const handleCommentChange = (event) => {
    // setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    // Submit the comment to your data storage or API
    // setComment("");
  };

  return (
    <main className="container grid grid-cols-1 gap-1 relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/ratings"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        See all fights
      </Link>
      <h1 className="text-2xl font-bold mb-4">
        Rate UFC Judges&apos; Scorecards
      </h1>
      <h2 className="text-xl font-semibold mb-2">{fight.title}</h2>
      <p>
        <b>Referee: </b>
        {fight.referee}
      </p>
      <div className="grid grid-cols-1 gap-8">
        <div className="cols-span-2">
          <h3 className="text-lg font-semibold mb-2">
            Judge&apos;s Scorecards
          </h3>
          <ul className="list-disc pl-6 grid gap-3">
            {fight.judges.map((judge) => (
              <li key={judge.name} className="grid grid-cols-2">
                {judge.name}: {judge.score}
                <Button className="flex flex-row-reverse">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icons.star
                      key={i}
                      className="peer peer-hover:fill-yellow-500 hover:fill-yellow-500"
                    />
                  ))}
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="cols-span-1">
          <h3 className="text-lg font-semibold mb-2">Provide Comments</h3>
          <textarea
            title="commentbox"
            className="border w-full p-2"
            // value={comment}
            // onChange={handleCommentChange}
          />
          <button
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            // onClick={handleCommentSubmit}
          >
            Submit Comment
          </button>
        </div>
      </div>
      <h3 className="text-lg font-semibold mt-4">Discussion</h3>
      <DiscussionSection comments={fight.comments} />
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/ratings"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all fights
        </Link>
      </div>
    </main>
  );
};

export default DetailedRatingPage;
