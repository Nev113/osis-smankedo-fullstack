import { Router } from "express";
import { createUser, deleteUser, getUsers } from "./route.js";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hello World!");
});
router.post("/add", createUser);
router.get("/users", getUsers);
router.delete("/users/:id", deleteUser)

export default router;