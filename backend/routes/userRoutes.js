const express = require('express');
const User = require("../models/userModel.js");
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require("./verifyToken.js");
const router = express.Router()

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString();
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL USER
// router.get("/", verifyTokenAndAdmin, async (req, res) => {
router.get("/", async (req, res) => {
    const query = req.query.new;
    try {
        const users = query
            ? await User.find().sort({ _id: -1 }).limit(5)
            : await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET USER STATS

router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE user's address during checkout
// router.put("/checkout/:id", verifyTokenAndAuthorization, async (req, res) => {
router.put("/checkout/:id", async (req, res) => {
    try {
        const { address, contact, gst } = req.body;

        // Optionally, encrypt the address or perform any necessary validation

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: { address, contact, gst },
            },
            { new: true }
        );

        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/totalorder/:userId", async (req, res) => {
    const userId = req.params.userId;

    try {
        // Find user's orders
        const userOrders = await Order.find({ userId: userId });

        // Calculate total order amount
        let totalAmount = 0;
        userOrders.forEach(order => {
            totalAmount += order.amount;
        });

        res.status(200).json({ userId: userId, totalOrderAmount: totalAmount });
    } catch (err) {
        res.status(500).json({ error: "Failed to calculate total order amount" });
    }
});

// Calculate total sales
router.get("/totalsales", async (req, res) => {
    try {
        // Find all orders
        const allOrders = await Order.find();

        // Calculate total sales
        let totalSales = 0;
        allOrders.forEach(order => {
            totalSales += order.amount;
        });

        res.status(200).json({ totalSales: totalSales });
    } catch (err) {
        res.status(500).json({ error: "Failed to calculate total sales" });
    }
});



module.exports = router;