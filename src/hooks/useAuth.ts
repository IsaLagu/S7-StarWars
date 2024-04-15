import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

const useAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userString = localStorage.getItem("user");
    if (userString) {
      const user = JSON.parse(userString);
      dispatch(setUser(user));
    }
  }, []);

  return { isLogged: localStorage.getItem("user") };
};

export default useAuth;
