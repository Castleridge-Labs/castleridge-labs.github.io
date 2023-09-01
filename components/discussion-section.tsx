interface DiscussionSectionProps {
  comments: string[]; // Update with proper type
}

export const DiscussionSection: React.FC<DiscussionSectionProps> = ({
  comments,
}) => {
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
