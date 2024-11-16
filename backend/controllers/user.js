const User = require("../models/user");
const sequelize = require("sequelize");

exports.signup = async (req,res,next)=>{
    try{
    const {name,email,password} = req.body;

    const response = await User.create({name,email,password});

    res.status(201).json({ message: "Successfully created new user" });
    }
    catch (err) {
        res.status(500).json(err);
      }
};