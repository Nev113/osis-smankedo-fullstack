import { Router } from "express";
import { createUser, deleteUser, getUsers, loginUser } from "./route.js";

const router = Router();

router.get("/", (req, res) => {
    res.json({status: "success", message: "Welcome to my API!"}).status(200);
});
router.post("/add", createUser);
router.get("/users", getUsers);
router.delete("/users/:id", deleteUser)
router.post("/login", loginUser)

export default router;