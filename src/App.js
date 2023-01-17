import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Detailpage from "./pages/Detailpage";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<Detailpage />} />
      </Routes>
    </div>
  );
}

export default App;
