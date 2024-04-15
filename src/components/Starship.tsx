import { useDispatch } from "react-redux";
import { Starship } from "../types";
import { setCurrentStarship } from "../redux/starshipSlice";
import { useNavigate } from "react-router-dom";

interface StarshipProps {
  starship: Starship;
}

const Starship = ({ starship }: StarshipProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setCurrentStarship(starship));
    navigate("/starship-details");
  };

  return (
    <div className="flex justify-center cursor-pointer text-gray-400 hover:text-white">
      <div className="w-9/12 p-6 bg-neutral-900 mb-3" onClick={handleClick}>
        <p className="text-xl">{starship.name}</p>
        <div>{starship.model}</div>
      </div>
    </div>
  );
};

export default Starship;
