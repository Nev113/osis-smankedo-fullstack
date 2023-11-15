import user from "./UserModel.js";
import bcrypt from "bcrypt";
import { nanoid } from "nanoid";

export const createUser = async (req, res) => {
    const {email, username, password, role} = req.body;
    const id = nanoid(10);
    const passEncrypt = await bcrypt.hash(password, 10);
    const newUser = new user({id, email, username, password: passEncrypt, role});
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({status: "fail", message: error.message });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await user.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({status: "fail", message: error.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const userRes = await user.findOneAndDelete({id});
    if (!userRes) {
        return res.json({status: "fail", message: "User tidak ditemukan!"}).status(404);
    }
    res.json({status: "success", message: "User telah dihapus!"}).status(200);
   } catch (error) {
    res.json({status: "fail", message: error.message}).status(500);
    console.log(error);
   }

}

export const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const {email, username, password, role} = req.body;
        const passEncrypt = await bcrypt.hash(password, 10);
        const userRes = await user.findOneAndUpdate({id}, {email, username, password: passEncrypt, role});
    if (!userRes) {
        return res.json({status: "fail", message: "User tidak ditemukan"}).status(404);
    }
    res.json({status: "success", message: "User di update!"}).status(200);
   } catch (error) {
    res.json({status: "fail", message: error.message}).status(500);
    console.log(error);
   }
}