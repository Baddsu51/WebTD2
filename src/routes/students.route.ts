import express from "express"
import { getStudents, getStudent, createStudent, updateStudent } from "../controllers/students.controller";

export const router = express.Router();
router.get("/", getStudents);
router.get("/:id", getStudent);
router.post("/",createStudent);
router.put("/:id", updateStudent);