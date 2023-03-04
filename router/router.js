"use strict"

const { Router } = require("express");
const express = require("express");
const router =express.Router();

Router.get("/",(req,res)=>{
    res.render("index",{titulo:"Este es mi titulo dinamico para estar en contacto"})
})

Router.get("/contacto",(req,res)=>{
    res.render("contacto",{tituloContacto:"Este es mi titulo dinamico para estar en contacto"})
})

module.exports = router;