import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherOne from "./WeatherOne";
import Location from "./Location";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/Weather-Forecast/oneday" element={<WeatherOne />} />
        <Route exact path="/Weather-Forecast/" element={<Location />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
