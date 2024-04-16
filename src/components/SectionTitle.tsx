interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="w-full md:w-10/12 mx-auto text-white block px-4 p-3 border-y border-gray-400 mb-6 mt-11">
      {title}
    </div>
  );
};

export default SectionTitle;
