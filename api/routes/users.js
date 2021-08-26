const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const { route } = require("./auth");
const verify = require("../verifyToken");

// Update User
router.put("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
        }

        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body });

            res.status(200).json(updateUser);
        } catch (error) {
            res.status(500).json()
        }
    }
    else {
        res.status(403).json("You can update only tour account")
    }
})

// Delete User


// Get User


// Get All User


// Get User Stats

module.exports = router