interface StatsDisplayProps {
  characterCount: number;
  wordCount: number;
  readingTime: number;
}

export const StatsDisplay = ({
  characterCount,
  wordCount,
  readingTime,
}: StatsDisplayProps) => {
  return (
    <div>
      <p>Characters: {characterCount}</p>
      <p>Words: {wordCount}</p>
      <p>Reading Time: {readingTime.toFixed(2)} minutes</p>
    </div>
  );
};