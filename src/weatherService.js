const API_KEY = "f503cffce6fa5e92e76f74f86bc32d9c";

const makeIconURL = ( iconId ) => `https://openweathermap.org/img/wn/${iconId}@2x.png`;
const getFormattedWeatherData = async (city, units = "metric") => {
    //--->Fething Data;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
    const data = await fetch(URL).then((res) => res.json()).then((data) => data);
    // console.log(data);

    //--->Destructuring Fetched Data 
    const { weather,
        main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
        wind: { speed },
        sys: { country },
        name,
    } = data;

    const { description, icon } = weather[0];

    // --->Returning data to app.jsx after fetching.
    return {
      description,
      icon: makeIconURL(icon),
      temp,
      feels_like,
      temp_min,
      temp_max,
      pressure,
      humidity,
      speed,
      country,
      name,
    };
};

export default getFormattedWeatherData;