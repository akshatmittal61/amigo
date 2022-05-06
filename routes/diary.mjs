import express from "express";
import { all, newDiary, single } from "../controllers/diary.mjs";
import auth from "../middleware/auth.mjs";

const router = express.Router();

router.post("/new", auth, newDiary);
router.get("/all", auth, all);
router.get("/single/:id", auth, single);

export default router;
