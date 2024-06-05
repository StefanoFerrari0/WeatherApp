import PropTypes from "prop-types";

const LastHistorySearch = ({ data, getWeather }) => (
  <nav className="history">
    <small>Ultimas {import.meta.env?.VITE_LIMIT_HISTORY || 5} busquedas: </small>
    <ul>
      {data.map((history) => (
        <li key={history._id}>
          <a href="#" onClick={() => getWeather(history.city)}>
            {history.city}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

LastHistorySearch.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    })
  ).isRequired,
  getWeather: PropTypes.func.isRequired,
};

export default LastHistorySearch;