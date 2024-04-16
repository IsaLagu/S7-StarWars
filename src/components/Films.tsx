import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import SectionTitle from "./SectionTitle";
import FilmCard from "./FilmCard";

const Films = () => {
  const { currentStarship } = useSelector((state: RootState) => state.starship);

  return (
    <div>
      <SectionTitle title="FILMS" />
      <div className="grid grid-cols-1 md:w-10/12 md:grid md:grid-cols-4 gap-6 md:mx-auto">
        {currentStarship?.films.map((film: string) => {
          return <FilmCard key={film} apiUrl={film} />;
        })}
      </div>
    </div>
  );
};

export default Films;
