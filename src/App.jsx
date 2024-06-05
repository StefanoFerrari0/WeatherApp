import axios from "axios";
import { useState, useEffect } from "react";
import { ErrorMessage } from "./components/ErrorMessage";
import { Loader } from "./components/Loader";
import { Card } from "./components/Card";
import LastHistorySearch from "./components/LastHistorySearch";

const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const HISTORY_URL = `http://localhost:${import.meta.env.VITE_PORT_BACKEND}/api/search`

export default function App() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const hasError = error.length > 0;

  useEffect(() => {
    fetchHistory()
  }, [])
  
  const getWeather = async (city) => {
    setIsLoading(true);
    setWeatherData(null);
    setError("");
    try {
      const response = await axios.get(WEATHER_URL, {
        params: {
          q: city.trim(),
          units: "metric",
          appid: import.meta.env.VITE_WEATHER_API_KEY,
          lang: "es",
        },
      });

      setWeatherData(response.data);
      saveSearch(response.data.name);
    } catch (err) {
      if (err?.response?.status === 404) {
        setError("Ciudad no encontrada");
      } else {
        setError("Error al obtener los datos del clima");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const saveSearch = async (city) => {
    try {
      await axios.post(HISTORY_URL, { city });
      fetchHistory();
    } catch (error) {
      console.error("Error guardando el historial", error);
    }
  };

  const fetchHistory = async () => {
    try {
      const response = await axios.get(HISTORY_URL,{
        params:{
          limit: import.meta.env?.VITE_LIMIT_HISTORY || 5
        }
      });
      setHistory(response.data);
    } catch (error) {
      console.error("Error consiguiendo los datos del historial", error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getWeather(cityName);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <h1>Clima</h1>
      </nav>
      <main>
        <form role="search " onSubmit={handleSubmit}>
          <input
            type="search"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
            placeholder="Buscar ciudad"
            aria-label="Search"
            aria-describedby="search-helper"
            aria-invalid={hasError}
            required
          />
          
        {hasError && <ErrorMessage error={error} />}
        {history.length > 0 && <LastHistorySearch data={history} getWeather={getWeather} />}

        </form>
        {isLoading && <Loader />}
        {weatherData && !hasError && <Card data={weatherData} />}
      </main>
    </div>
  );
}