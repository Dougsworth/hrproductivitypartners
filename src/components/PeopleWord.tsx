/** "people" with each letter dropping in, staggered. */
export const PeopleWord = ({ className = "" }: { className?: string }) => {
  const letters = "people".split("");
  return (
    <span className={`word-people italic ${className}`}>
      {letters.map((ch, i) => (
        <span
          key={i}
          className="letter text-white"
          style={{ animationDelay: `${0.5 + i * 0.08}s` }}
        >
          {ch}
        </span>
      ))}
    </span>
  );
};
