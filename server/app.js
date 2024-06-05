import express from "express";
import { cors } from "./config/init.js";
import searchRoutes from "./routes/search.route.js"

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors);

app.use("/api/search", searchRoutes);

export default app;