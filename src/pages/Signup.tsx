import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../types";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signUpUser = (e: any) => {
    e.preventDefault();
    if (email && password) {
      fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => response.json())
        .then((result: User) => {
          localStorage.setItem("user", JSON.stringify(result));
          dispatch(setUser(result));
          navigate("/starships");
        });
    }
  };

  return (
    <div>
      <div className="flex justify-end m-8">
        <Link to="/login" className="text-gray-400 hover:text-white font-medium text-lg">
          LOGIN
        </Link>
      </div>
      <div className="text-gray-400 font-medium text-lg text-center">SIGNUP</div>
      <form className="max-w-sm mx-auto mt-11">
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-400">
            Your email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@starwars.com"
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-400">
            Your password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="******"
            required
          />
        </div>
        <button
          type="submit"
          onClick={signUpUser}
          className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
