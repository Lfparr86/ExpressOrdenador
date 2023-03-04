"use strict"
const mongoose =require("mongoose");
const Schema = mongoose.Schema;

const ordenadoresSchema = new Schema ({
    id: String,
    nombre: String,
    fabricante: String,
    año: String,
    so: String,
    ram: String
}

)

const Ordenadores =mongoose.model("Ordenadores",ordenadoresSchema,"ordenadores");

module.exports = Ordenadores;