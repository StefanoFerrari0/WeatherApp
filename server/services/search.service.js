import Search from "../models/search.model.js";

export async function create(city) {
  const newSearch = await Search.findOneAndUpdate(
    { city }, // Condición para encontrar el documento por ciudad
    { $set: { city } }, // Campos a actualizar (en este caso, solo el `city` para actualizar el timestamp)
    { upsert: true, new: true } // Crear un nuevo documento si no existe, y devolver el documento actualizado
  );
  return newSearch;
}

export async function getLast(limit) {
  const history = await Search.find().sort({ updatedAt: -1 }).limit(limit);
  return history;
}