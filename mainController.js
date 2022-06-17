const express = require('express');
const router = express.Router();
const { validationResult, body } = require('express-validator');
const fs = require("fs")

const controller = {
    home : (req,res)=> {
        res.send("Hi mundo")
    }
}



module.exports = controller;