import {BrowserRouter,Routes,Route} from 'react-router-dom'
/* import WeatherFive from './WeatherFive'; */
import Location from './Location'
function App() {
  return (
<BrowserRouter>
  <Routes>
    {/* <Route exact path="/" element={<WeatherFive/>}/> */}
    <Route exact path="/" element={<Location/>}/>
  </Routes>
</BrowserRouter>
  );
}

export default App;
