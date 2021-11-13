import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Block from "./block";
import axios from "axios";
import "./App.css";

function WeatherOne() {
  const [state, setState] = useState({
    applicable_date: "",
    weather_state_name: "",
    weather_state_abbr: "",
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
  // get informattion from the api acording to the request(id) and a especific date  (/2021/1/1/) fist of january of 2021
  useEffect(() => {
    async function getWeather() {
      try {
        const resp = await axios.get(
          `https://www.metaweather.com/api/location/${location.id}/2021/1/1/`
        );
        const data = JSON.parse(JSON.stringify(resp.data));

        setState({ ...data[0], title: data.title });

        console.log(resp.data);
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

  return (
    <div>
      <h3 className="title">Info Weather</h3>

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

      <Link to="/">
        <img
          className="seta"
          src="https://prints.ultracoloringpages.com/e5584bc02039df88f778a97c6f9ddf15.png"
          alt="sign"
        />
      </Link>
      {location.id === "" ? null : (
        <>
          <p class="city">{state.title}</p>
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
            predictability={state.predictability}
            date={date}
            iconRender={iconRender}
          />
        </>
      )}

      <aside>
        <h2>Sources</h2>
        <ul>
          <li>
            <a href="http://www.bbc.co.uk/weather/">
              <p>
                <img
                  src="https://img2.gratispng.com/20180629/gg/kisspng-computer-icons-logo-of-the-bbc-bbc-world-news-uc-browser-5b35c1518b81c0.0586131015302495535714.jpg"
                  alt="bbc"
                />{" "}
                BBC
              </p>
            </a>
          </li>
          <li>
            <a href="http://forecast.io/">
              <p>
                <img
                  src="https://img.utdstc.com/icon/c15/d52/c15d5292b6a52850c2bcb455eb882187629553e4113f2685c322e144ad9aa96c:200"
                  alt="forecast.io"
                />{" "}
                Forecast.io
              </p>
            </a>
          </li>
          <li>
            <a href="http://www.hamweather.com/">
              <p>
                <img
                  src="https://www.internetmatters.org/wp-content/uploads/2019/04/BBC_logo.png"
                  alt="hamweather"
                />{" "}
                HAMweather
              </p>
            </a>
          </li>
          <li>
            <a href="http://www.metoffice.gov.uk/">
              <p>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6sGvrKSNxua0fsy8kMCuoHEvub8fY3X3sgw&usqp=CAU"
                  alt="metoffice"
                />{" "}
                Met Office
              </p>
            </a>
          </li>
          <li>
            <a href="http://openweathermap.org/">
              <p>
                <img
                  src="https://pbs.twimg.com/profile_images/1173919481082580992/f95OeyEW_400x400.jpg"
                  alt="openweather"
                />{" "}
                OpenWeatherMap
              </p>
            </a>
          </li>
          <li>
            <a href="https://www.wunderground.com/?apiref=fc30dc3cd224e19b">
              <p>
                <img
                  src="https://www.pinclipart.com/picdir/middle/495-4958488_the-weather-channel-logo-png-wunderground-weather-clipart.png"
                  alt="weatheruserground"
                />{" "}
                Weather Underground
              </p>
            </a>
          </li>
          <li>
            <a href="http://www.worldweatheronline.com/">
              <p>
                <img
                  src="http://www.chainlinkecosystem.com/wp-content/uploads/2021/02/worldweatheronline.png"
                  alt="worldweatheronline"
                />{" "}
                World Weather Online
              </p>
            </a>
          </li>
        </ul>
      </aside>

      <footer>
        <p>© Weather,Inc. 2021. we love weather</p>
      </footer>
    </div>
  );
}

export default WeatherOne;
