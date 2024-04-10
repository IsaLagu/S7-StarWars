import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

const StarshipDetails = () => {
  const { currentStarship } = useSelector((state: RootState) => state.starship);

  return <div>{currentStarship?.name}</div>;
};

export default StarshipDetails;
