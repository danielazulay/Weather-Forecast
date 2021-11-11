import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Block from "./block";
import axios from "axios";
import "./App.css";
function WeatherOne() {
  
  const [state, setState] = useState({
    title: "",
    applicable_date: "",
    weather_state_name: "",
    weather_state_abbr:'',
    wind_speed: "",
    wind_direction: "",
    min_temp: "",
    max_temp: "",
    the_temp: "",
    air_pressure: "",
    humidity: "",
    visibility: "",
    timezone_name: "",
    predictability: "",
    sun_rise: "",
    sun_set: "",
   
  });
  const [location, setLocation] = useState({ id: "" });

  useEffect(() => {
    async function getWeather() {
      try {




        const resp = await axios.get(
          `https://www.metaweather.com/api/location/${location.id}/2021/1/1/`
        );
        const data = JSON.parse(JSON.stringify(resp.data));

        
        setState({ ...data[0]});

        console.log(data[0]);
      } catch (err) {
        console.log(err);
      }
    }
    getWeather();
  },[location.id]);


function inonRender(temp){

    const id={
        sn:"https://www.metaweather.com/static/img/weather/sn.svg",
        sl:"https://www.metaweather.com/static/img/weather/sl.svg",
        h:"https://www.metaweather.com/static/img/weather/h.svg",
        t:"https://www.metaweather.com/static/img/weather/t.svg",
        hr:"https://www.metaweather.com/static/img/weather/hr.svg",
        lr:"https://www.metaweather.com/static/img/weather/lr.svg",
        s:"https://www.metaweather.com/static/img/weather/s.svg",
        hc:"https://www.metaweather.com/static/img/weather/hc.svg",
        lc:"https://www.metaweather.com/static/img/weather/lc.svg",
        c:"https://www.metaweather.com/static/img/weather/c.svg"
    }
    
    if(id.hasOwnProperty(temp)){
      return id[temp]
    }

}
function handleChange(event) {
    setLocation({ id: event.target.value });
  }

function date(date) {

      return date;
   
  }



  return (
    <div>
       
      <h3 className="title">Info Weather</h3>
      
      <form type="select">
        <label>Choose a County:</label>
        <select value={location.id} onChange={handleChange}>
          <option selected="selected">Select a Country</option>
          <option value="2459115">New York</option>
          <option value="2442047">Los Angeles</option>
          <option value="610264">Marseille</option>
          <option value="753692">Barcelona </option>
          <option value="721943">Rome </option>
          
        </select>
      </form>
      <Link to='/'><img src='https://prints.ultracoloringpages.com/e5584bc02039df88f778a97c6f9ddf15.png'/></Link>
      

   
          <Block
           applicable_date={state.applicable_date}
            weather_state_abbr={state.weather_state_abbr}
            weather_state_name={state.weather_state_name}
            max_temp={state.max_temp}
            min_temp={state.min_temp}
            wind_speed={state.wind_speed}
            humidity={state.humidity}
            visibility={state.visibility}
            air_pressure={state.air_pressure}
           
            sun_rise={state.sun_rise}
            sun_set={state.sun_set}
            date={date}
            inonRender={inonRender}/> 
          
     
    </div>
  );
}

export default WeatherOne;
