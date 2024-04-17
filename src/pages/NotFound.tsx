import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="text-white text-center">
        <div className="text-5xl">The page was not found</div>
        <div className="mt-10">
          <Link
            className="mx-auto flex justify-center p-2 w-32 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-xl tracking-wider"
            to="/"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
