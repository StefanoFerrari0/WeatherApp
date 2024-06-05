import PropTypes from "prop-types";

export const Card = ({ data }) => (
  <article>
    <header>
      <h2>{data.name}</h2>
    </header>

    <img
      src={`/icons/${data.weather[0].icon}.svg`}
      alt={data.weather[0].description} />

    <footer>
      <h3>Temperatura: {data.main.temp}°C</h3>
      <p>
        Mínima: {data.main.temp_min}°C / Máxima: {data.main.temp_max}°C
      </p>
      <p>Humedad: {data.main.humidity}%</p>
    </footer>
  </article>
);

Card.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
      })
    ).isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
      temp_min: PropTypes.number.isRequired,
      temp_max: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};