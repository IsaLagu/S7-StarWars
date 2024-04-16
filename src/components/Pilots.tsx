import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import SectionTitle from "./SectionTitle";
import PilotCard from "./PilotCard";

const Pilots = () => {
  const { currentStarship } = useSelector((state: RootState) => state.starship);

  return (
    <div>
      <SectionTitle title="PILOTS" />
      <div className="grid grid-cols-1 md:w-10/12 md:grid-cols-4 gap-6 md:mx-auto">
        {currentStarship?.pilots?.length ? (
          currentStarship.pilots.map((pilot: string) => {
            return <PilotCard key={pilot} apiUrl={pilot} />;
          })
        ) : (
          <div className="text-gray-400 text-base ">This starship has no pilots</div>
        )}
      </div>
    </div>
  );
};

export default Pilots;
