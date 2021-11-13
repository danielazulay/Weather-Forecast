import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Block from "./block";
import axios from "axios";
import "./App.css";
function Location() {
  const [state, setState] = useState({
    applicable_date: "",
    weather_state_name: "",
    weather_state_abbr: "",
    wind_speed: "",
    wind_direction: "",
    min_temp: "",
    max_temp: "",
    time: "",
    air_pressure: "",
    humidity: "",
    visibility: "",
    predictability: "",
    sun_rise: "",
    sun_set: "",
    title: "",
    city: "",
    week: [],
  });
  const [location, setLocation] = useState({ id: "" });

  // get informattion from the api acording to the request(id)
  useEffect(() => {
    async function getWeather() {
      try {
        const resp = await axios.get(
          `https://www.metaweather.com/api/location/${location.id}/`
        );
        const data = JSON.parse(JSON.stringify(resp.data));

        setState({
          week: data.consolidated_weather,
          city: data.title,
          sun_rise: data.sun_rise,
          sun_set: data.sun_rise,
          time: data.time,
          title: data.parent.title,
        });
        console.log(data.time);
      } catch (err) {
        console.log(err);
      }
    }
    getWeather();
  }, [location.id]);

  //formting the dates day of the week / moth / day
  function date(date) {
    var today = new Date(date);
    var now = new Date();

    if (now.toString().slice(0, 10) === today.toString().slice(0, 10)) {
      return "Today";
    } else if (now.getDate() + 1 === today.getDate()) {
      return "Tomorow";
    } else {
      return today.toString().slice(0, 10);
    }
  }
  //render the icons of weather acording to the weather
  function iconRender(temp) {
    const id = {
      sn: "https://www.metaweather.com/static/img/weather/sn.svg",
      sl: "https://www.metaweather.com/static/img/weather/sl.svg",
      h: "https://www.metaweather.com/static/img/weather/h.svg",
      t: "https://www.metaweather.com/static/img/weather/t.svg",
      hr: "https://www.metaweather.com/static/img/weather/hr.svg",
      lr: "https://www.metaweather.com/static/img/weather/lr.svg",
      s: "https://www.metaweather.com/static/img/weather/s.svg",
      hc: "https://www.metaweather.com/static/img/weather/hc.svg",
      lc: "https://www.metaweather.com/static/img/weather/lc.svg",
      c: "https://www.metaweather.com/static/img/weather/c.svg",
    };

    if (id.hasOwnProperty(temp)) {
      return id[temp];
    }
  }

  function handleChange(event) {
    setLocation({ id: event.target.value });
  }
  //chaging the time from am to pm
  function checkTime(time) {
    if (time.toString().slice(11, 13) < 13) {
      return true;
    } else return false;
  }

  return (
    <div>
      <h3 className="title">Info Weather</h3>

      <Link to="/oneday">
        <img
          className="seta"
          src="https://prints.ultracoloringpages.com/e5584bc02039df88f778a97c6f9ddf15.png"
          alt="sign"
        />
      </Link>
      <form type="select">
        <select value={location.id} onChange={handleChange}>
          <option selected="selected">Select a Country</option>
          <option value="2459115">New York</option>
          <option value="2442047">Los Angeles</option>
          <option value="610264">Marseille</option>
          <option value="753692">Barcelona </option>
          <option value="721943">Rome </option>
        </select>
      </form>

      {state.time === "" ? null : (
        <div className="sunTime">
          {checkTime(state.time) ? (
            <p>
              <b>Time</b> {state.time.toString().slice(11, 16)}a.m.{" "}
            </p>
          ) : (
            <p>
              <b>Time</b> {state.time.toString().slice(11, 16)}p.m.{" "}
            </p>
          )}
          <p>
            <b>Sunrise </b>
            {state.sun_rise.toString().slice(11, 16)}a.m.{" "}
          </p>
          <p>
            <b>Sunset </b>
            {state.sun_set.toString().slice(11, 16)}p.m.{" "}
          </p>
        </div>
      )}

      <p class="city">
        {state.city}{" "}
        <span style={{ fontSize: `15px`, marginLeft: `5px` }}>
          {state.title}
        </span>
      </p>

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
            predictability={day.predictability}
            date={date}
            iconRender={iconRender}
          />
        );
      })}
      <footer>
        <p>© Weather,Inc. 2021. we love weather</p>
      </footer>
    </div>
  );
}

export default Location;
