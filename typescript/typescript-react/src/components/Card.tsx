export interface CardProps {
  // question mark makes this an optional value
  heading?: string;
  content: string;
}

const Card = ({ heading = "heading", content }: CardProps) => {
  return (
    <div>
      <h2>{heading}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
