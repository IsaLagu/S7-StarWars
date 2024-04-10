import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCount, setPage, setStarships } from "./redux/starshipSlice";
import { RootState } from "./redux/store";
import Starship from "./Starship";

const StarshipList = () => {
  const dispatch = useDispatch();
  const starship = useSelector((state: RootState) => state.starship);

  useEffect(() => {
    fetch(`https://swapi.dev/api/starships/?page=${starship.page}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setStarships([...starship.list, ...data.results]));
        dispatch(setCount(data.count));
      });
  }, [starship.page]);

  const numPages = Math.ceil(starship.count / 10);

  const handleViewMore = () => {
    dispatch(setPage(starship.page + 1));
  };

  return (
    <div>
      <div>
        {starship.list.map((s) => (
          <Starship starship={s} key={s.name} />
        ))}
      </div>
      {starship.page < numPages ? (
        <button className="text-gray-700" onClick={handleViewMore}>
          View more...
        </button>
      ) : null}
    </div>
  );
};

export default StarshipList;
