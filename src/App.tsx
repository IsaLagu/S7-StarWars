import { BrowserRouter, Route, Routes } from "react-router-dom";
import StarshipList from "./StarshipList";
import StarshipDetails from "./StarshipDetails";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route element={<ProtectedRoute isActive={isLogged} />}> */}
        <Route path="/starships" element={<StarshipList />} />
        <Route path="/starship-details" element={<StarshipDetails />} />
        {/* </Route> */}
        {/* <Route path="/login-register" element={<LoginRegister />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
