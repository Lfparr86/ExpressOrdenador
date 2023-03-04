let express = require("express"),
mongoose = require("mongoose"),
bodyParser= require("body-parser"),
app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
require("dotenv").config();
let port =process.env.PORT ||3000;


app.set("view engine", "ejs")
app.set("views",__dirname+"/views/")

//app.use("/", require("./router/router"));

app.use("/ordenadores", require("./router/ordenadores"));



const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.z7y4c8b.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
 /* mongoose.set("stictQuery",true); */

mongoose
    .connect(uri,{
    useNewUrlParser: true, useUnifiedTopology:true
})
    .then(()=>console.log("Base de datos conectado"))
    .catch(e=>console.log(e));


app
.get("/contacto",(req,res)=>{
    res.status(404)
})

.use("/",(req,res)=>{
    res.status(404).render("404",{titulo:"404 error",descripcion:"Esto da falloooo"})
})

.listen(port)