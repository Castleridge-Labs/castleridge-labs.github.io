import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";

interface StepProps {
  stepNumber: number;
  title: string;
  implemented: boolean;
}

export const Step: React.FC<StepProps> = ({
  stepNumber,
  title,
  implemented,
}) => {
  return (
    <div className="flex justify-center col-span-1">
      <Card className="w-[350px] bg-red-100">
        <CardHeader>
          <CardTitle className="grid grid-cols-1 gap-2">
            <span>
              <Badge>{stepNumber}</Badge>
            </span>
            <span className="text-balance">{title}</span>
          </CardTitle>
          <CardDescription>
            {!implemented ? (
              <small className="leading-7 text-red-600">
                This feature is not yet implemented.
              </small>
            ) : (
              <small className="leading-7 text-green-600">Implemented</small>
            )}
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};
