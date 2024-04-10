import { useDispatch } from "react-redux";
import { Starship } from "./types";
import { setCurrentStarship } from "./redux/starshipSlice";
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
    <div onClick={handleClick}>
      <p className="text-2xl">{starship.name}</p>
      <div>{starship.model}</div>
    </div>
  );
};

export default Starship;
