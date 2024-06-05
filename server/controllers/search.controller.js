import { create, getLast } from "../services/search.service.js";
 
const createSearch = async (req, res) => {
  console.log("createSearch");
  try {
    const { city } = req.body;
    let newSearch = await create(city)
    res.status(200).json(newSearch);
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message
    });
  }
}

const getLastSearch = async (req, res) => {
  console.log("getLastSearch");
  try {
    let { limit } = req.query;

    if (limit === undefined) {
      limit = 10;
    } else {
      limit = parseInt(limit, 10);

      if (isNaN(limit)) {
        return res.status(400).json({
          message: 'El parámetro limit debe ser un número válido'
        });
      }
    }

    const lastSearch = await getLast(limit);
    res.status(200).json(lastSearch);
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message
    });
  }
};

export { createSearch, getLastSearch }