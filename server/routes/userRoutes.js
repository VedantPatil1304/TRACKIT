import express from "express";
import { getCurrentUser, updateProfile } from "../controllers/userController.js";
import auth from "../middleware/auth.js"; // 

const router = express.Router();

// ✅ These routes must be protected with auth middleware
router.get("/me", auth, getCurrentUser);
router.put("/me", auth, updateProfile);

export default router;
