import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import Navbar from "./Navbar";

const StarshipDetails = () => {
  const { currentStarship } = useSelector((state: RootState) => state.starship);
  const match = currentStarship?.url.match(/[0-9]/);
  const id = match ? Number(match[0]) : null;

  return (
    <div>
      <Navbar />
      <div className="w-full md:w-10/12 mx-auto text-white block px-4 p-3 border-y border-gray-400 mb-6 mt-11 content-center">
        STARSHIP
      </div>
      <div className="w-full md:w-10/12 md:flex justify-end mx-auto">
        <img
          className="w-full md:w-6/12"
          src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
          alt={currentStarship?.name}
        />
        <div className="w-full md:w-6/12 h-100 pl-4 pt-7 pb-6 text-gray-400 bg-neutral-800 border-l-4 border-red-600">
          <div className="text-2xl mb-4">{currentStarship?.name}</div>
          <div className="text-xs block space-y-2.5 md:gap-x-8 md:gap-y-4 md:items-center md:grid md:grid-cols-2 my-auto">
            <div>Model: {currentStarship?.model}</div>
            <div>Cost in credits: {currentStarship?.cost_in_credits}</div>
            <div>Atmospheric Speed: {currentStarship?.max_atmosphering_speed}</div>
            <div>Manufacturer: {currentStarship?.manufacturer}</div>
            <div>Length: {currentStarship?.length}</div>
            <div>Crew: {currentStarship?.crew}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarshipDetails;
