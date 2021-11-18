import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherOne from "./WeatherOne";
import Location from "./Location";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/oneday" element={<WeatherOne />} />
        <Route exact path="/" element={<Location />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
