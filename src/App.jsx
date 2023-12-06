import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Navbar from "./components/Navbar/Navbar";
import Singlepage from "./components/SinglePage/Singlepage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/pages/:page" element={<Movies />} />
          <Route path="/Series/pages/:page" element={<Series />} />
          <Route path="/single-movie/:id" element={<Singlepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
