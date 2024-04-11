import { NavLink } from "react-router-dom";
import star_wars_logo from "./assets/star_wars_logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className=" bg-black w-full z-20 top-0 start-0 mb-3 ">
        <div className="relative">
          <img className="mx-auto w-80 py-6" src={star_wars_logo} alt="Star wars logo" />
          <div className="flex items-center static justify-center md:absolute right-0 top-[50%] -translate-y-[50%]">
            <button
              type="button"
              className="text-gray-400 focus:outline-none hover:text-white font-medium text-sm px-4 py-2 text-center"
            >
              LOGIN
            </button>
            <div className="text-gray-400">//</div>
            <button
              type="button"
              className="text-gray-400 focus:outline-none hover:text-white font-medium text-sm px-4 py-2 text-center"
            >
              SIGN UP
            </button>
          </div>
        </div>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between border border-x-0 border-y-1 border-y-gray-400 mx-auto h-12">
          <div className="items-center h-full justify-center w-full flex">
            <ul className="flex items-center h-full font-medium border-x border-gray-400">
              <li className="h-full">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white block h-full px-4 content-center border-b-4 border-blue-700"
                      : " block h-full px-4 content-center text-gray-400 hover:text-white"
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li className="h-full border-r border-gray-400"></li>
              <li className="h-full">
                <NavLink
                  to="/starships"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white block h-full px-4 content-center border-b-4 border-blue-700"
                      : "block h-full px-4 content-center text-gray-400 hover:text-white"
                  }
                >
                  STARSHIPS
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
