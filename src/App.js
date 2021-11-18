import { HashRouter, Routes, Route } from "react-router-dom";
import WeatherOne from "./WeatherOne";
import Location from "./Location";
function App() {
  return (
    <div className="App">
    <HashRouter>
      <Routes>
        <Route path="/oneday" element={<WeatherOne />} />
        <Route exact path="/" element={<Location />} />
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
