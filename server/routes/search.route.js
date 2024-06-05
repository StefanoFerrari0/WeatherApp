import { Router } from "express";
import { createSearch, getLastSearch } from "../controllers/search.controller.js";

const router = Router();

//Create
router.post("/", createSearch);

//GetAll
router.get("/", getLastSearch);

export default router;