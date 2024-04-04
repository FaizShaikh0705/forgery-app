const express = require("express");
const userModel = require("../models/userModel.js");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const router = express.Router()

//Register
router.post('/register', async (req, res) => {
    const newUser = new userModel({
        userName: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    });

    try {
        const savedUser = await newUser.save();

        const accessToken = jwt.sign({
            id: savedUser._id,
            isAdmin: savedUser.isAdmin,
        }, process.env.JWT_SEC,
            { expiresIn: "30d" })

        const { password, ...others } = savedUser._doc;

        res.status(201).json({ ...others, accessToken });
    } catch (err) {
        res.status(500).json(err);
    }
})

//Login
router.post('/login', async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email })
        // !user && 
        if (!user) {
            return res.status(401).json("Username does not exists.");
        }

        const hashedpassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC)
        const originalPassword = hashedpassword.toString(CryptoJS.enc.Utf8)

        if (originalPassword !== req.body.password) {
            return res.status(401).json("Password does not match.")
        }

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, process.env.JWT_SEC,
            { expiresIn: "30d" })

        const { password, ...others } = user._doc;

        res.status(200).json({ ...others, accessToken });
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router