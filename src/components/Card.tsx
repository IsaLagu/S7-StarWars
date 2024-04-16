interface CardProps {
  image: string;
  altImage?: string;
  title: string;
}

const Card = ({ image, title, altImage }: CardProps) => {
  return (
    <div className="max-w-[210px] md:max-w-full rounded-lg text-gray-400 bg-neutral-800 mx-auto">
      <img className="rounded-t-l h-72 md:h-auto" src={image} alt={altImage} />

      <div className="p-4 border-t-2 border-red-600">
        <p className="mb-3 uppercase text-center">{title}</p>
      </div>
    </div>
  );
};

export default Card;
