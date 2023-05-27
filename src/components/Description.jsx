const Description = ({ units, weather }) => {
  const tempUnit = units === "metric" ? "°C" : "°F";
  const windUnit = units === "metric" ? "m/s" : "m/h";

  const cards = [
    {
      id: 1,
      title: "Min Temp",
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      title: "Max Temp",
      data: weather.temp_max.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      title: "Feels Like",
      data: weather.feels_like.toFixed(),
      unit: tempUnit,
    },
    {
      id: 4,
      title: "Pressure",
      data: weather.temp_min.toFixed(),
      unit: "hPa",
    },
    {
      id: 5,
      title: "Humidity",
      data: weather.temp_min,
      unit: "%",
    },
    {
      id: 6,
      title: "Wind Speed",
      data: weather.temp_min.toFixed(),
      unit: windUnit,
    },
  ];
  return (
    <div className="section section_desciption">
      {cards.map(({ id, icon, title, data, unit }) => (
        <div key={id} className="card">
          <div className="description_card-icon">
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}` }</h2>
        </div>
      ))}
    </div>
  );
}

export default Description