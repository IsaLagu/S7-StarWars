import star_wars_logo from "./assets/star_wars_logo.png";
import Daco from "./assets/Daco.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="background-home">
      <img className="mx-auto w-80 py-6" src={star_wars_logo} alt="Star wars logo" />
      <div className="flex flex-wrap mt-12 justify-items-center items-center">
        <Link
          type="button"
          className="mb-8 mx-auto flex items-center justify-center w-32 h-10 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-xl tracking-wider"
          to="/starships"
        >
          Explore
        </Link>
        <img className="object-contain h-96 w-100 mr-12" src={Daco} alt="Daco starship" />
      </div>
    </div>
  );
};

export default Home;
