import { useEffect, useState } from "react";
import coldBg from "./assets/cold.jpg";
import hotBg from "./assets/hot.jpg";
import Description from "./components/Description";
import getFormattedWeatherData from "./weatherService";

function App() {
  // using useState to put fetched data on its place
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('metric');
  const [city, setCity] = useState("Delhi");
  const [bg, setbg] = useState(hotBg);

  // Using useEffect to fectch data on every re-render or state change.
  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);
      // console.log(data);

      const threshhold = units === 'metric' ? 20 : 60;
      if (data.temp <= threshhold) setbg(coldBg);
      else setbg(hotBg);
    }
    fetchWeatherData();
  }, [units, city, bg])

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === 'C';
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? 'metric' : 'imperial');
  }

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  }

  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        {weather && (
          <div className="container">
            <div className="section section_inputs">
              <input onKeyDown={enterKeyPressed} type="text" name="city" placeholder="Enter City" />
              <button onClick={(e) => handleUnitsClick(e)} className="city_button">°C</button>
            </div>

            <div className="section section_temprature">
              <div className="icon">
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img src={`${weather.icon}`} alt="" />
                <h3>{weather.description}</h3>
              </div>
              <div className="temprature">
                <h1>{`${weather.temp.toFixed()} °${units === 'metric' ? 'C' : 'F'}`} </h1>
              </div>
            </div>

            {/* Bottom Description */}
            <Description weather={weather} units={units} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App
