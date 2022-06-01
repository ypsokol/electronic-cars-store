const Card = ({
  title,
  description,
  position,
}: {
  title: string;
  description: string;
  position: number;
}) => {
  return (
    <div className={`features__card features__card-${position}`}>
      <h3 className="features__card-title">{title}</h3>
      <p className="features__card-description">{description}</p>
    </div>
  );
};

export default Card;
