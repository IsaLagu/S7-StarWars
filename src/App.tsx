import { BrowserRouter, Route, Routes } from "react-router-dom";
import StarshipList from "./pages/StarshipList";
import StarshipDetails from "./pages/StarshipDetails";
import Home from "./pages/Home";
import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/starships" element={<StarshipList />} />
          <Route path="/starship-details" element={<StarshipDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
