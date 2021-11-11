import { useState, useEffect } from "react";
import Block from "./block";
import axios from "axios";
import "./App.css";
function Location() {
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
    week: [],
  });
  const [location, setLocation] = useState({ id: "" });

  useEffect(() => {
    async function getWeather() {
      try {
        const resp = await axios.get(
          `https://www.metaweather.com/api/location/${location.id}/`
        );
        const data = JSON.parse(JSON.stringify(resp.data));

        setState({ week: data.consolidated_weather });

        console.log(state.week[0]);
      } catch (err) {
        console.log(err);
      }
    }
    getWeather();
  }, [location.id]);

  function date(date) {
    var today = new Date();
    //const year= today.getYear()+1900
    //const moth = today.getDate()
    const day = today.getMonth() + 1;

    if (Number(date.split("-")[2]) === day) {
      return "Today";
    } else if (Number(date.split("-")[2]) === day + 1) {
      return "tomorrow";
    } else {
      return date;
    }
  }
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

  console.log(state.week[0]);

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
      

      {state.week.map((day) => {
        return (
          <Block
            applicable_date={day.applicable_date}
            weather_state_abbr={day.weather_state_abbr}
            weather_state_name={day.weather_state_name}
            max_temp={day.max_temp}
            min_temp={day.min_temp}
            wind_speed={day.wind_speed}
            humidity={day.humidity}
            visibility={day.visibility}
            air_pressure={day.air_pressure}
            location_type={day.location_type}
            sun_rise={day.sun_rise}
            sun_set={day.sun_set}
            date={date}
            inonRender={inonRender}
          />
        );
      })}
    </div>
  );
}

export default Location;
