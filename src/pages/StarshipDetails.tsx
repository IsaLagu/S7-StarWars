import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Pilots from "../components/Pilots";
import Films from "../components/Films";

const StarshipDetails = () => {
  const { currentStarship } = useSelector((state: RootState) => state.starship);
  const match = currentStarship?.url.match(/\d+/g);
  const id = match ? Number(match[0]) : null;

  return (
    <>
      <div className="w-full md:w-10/12 mx-auto text-white block px-4 p-3 border-y border-gray-400 mb-6 mt-11">
        STARSHIP
      </div>
      <div className="w-full md:w-10/12 md:flex md:justify-end md:mx-auto">
        <img
          className="w-full max-w-sm md:w-5/12 md:max-w-max mx-auto border-2 rounded-l-lg border-r-0 border-neutral-900"
          src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
          alt={currentStarship?.name}
        />
        <div className="w-full max-w-sm md:w-7/12 h-100 pl-4 pt-7 pb-6 md:max-w-max mx-auto text-gray-400 bg-neutral-800 border-l-4 border-red-600 rounded-r-lg border-r-0">
          <div className="text-2xl mb-4">{currentStarship?.name}</div>
          <div className="text-base block md:gap-x-4 md:gap-y-8 sm:space-y-2.5 md:space-y-0 md:items-center md:grid md:grid-cols-2">
            <div>Model: {currentStarship?.model}</div>
            <div>Cost in credits: {currentStarship?.cost_in_credits}</div>
            <div>Atmospheric Speed: {currentStarship?.max_atmosphering_speed}</div>
            <div>Manufacturer: {currentStarship?.manufacturer}</div>
            <div>Length: {currentStarship?.length}</div>
            <div>Crew: {currentStarship?.crew}</div>
          </div>
        </div>
      </div>
      <Pilots />
      <Films />
    </>
  );
};

export default StarshipDetails;
