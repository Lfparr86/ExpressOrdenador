const express = require("express");
const router = express.Router();
const Ordenadores= require("../model/ordenadores")
router.get("/",async(req,res)=>{

    try{
        const arrayordenadoresdb =await Ordenadores.find();
        console.log(arrayordenadoresdb);
        res.render("ordenadores",{arrayordenadores:arrayordenadoresdb})

    }
    catch(error){
        console.log(error)
    }


})
router.get("/crear",(req,res)=>{
    res.render("crear")
})

router.post("/", async (req,res)=>{
    const body= req.body
    console.log(body)
    try{
        const ordenadoresDB = new Ordenadores(body)
        await ordenadoresDB.save()
        res.redirect("/ordenadores")
    }catch(error){
        console.log("error",error)
    }
})


router.get("/:id", async (req,res)=>{
    const id = req.params.id
    try{
        const ordenadoresDB = await Ordenadores.findOne({_id:id})
        console.log(ordenadoresDB)
        res.render("detalle",{ordenadores:ordenadoresDB, error:false})
    }catch (error){
        console.log("Se ha producido un error", error)
        res.render("detalle",{error:true, mensaje:"Ordenadores no encontrado"})
    }
})

router.delete("/:id", async (req,res)=>{
const id = req.params.id;
console.log("_id desde el backend", id)
try{
    const ordenadoresDB = await Ordenadores.findByIdAndDelete({_id:id});
    console.log(ordenadoresDB)
    if(!ordenadoresDB){
        res.json({
            estado:false,
            mensaje:"No se puede eliminar el Ordenador"
        })
    }else{
        res.json({
            estado:true,
            mensaje:"Ordenador eliminado"
        })
    }
}catch (error){
    console.log(error)
}
})


router.put("/:id", async (req,res)=> {
const id = req.params.id;
const body= req.body;
console.log(id)
console.log("body", body)

try{
    const ordenadoresDB = await Ordenadores.findByIdAndUpdate(
        id, body, { useFindAndModify: false}
    )
    console.log(ordenadoresDB)
    res.json({
        estado:true,
        mensaje:"Ordenador editado"
    })
}catch (error){
    console.log(error)
    res.json({
        estado:false,
        mensaje:"Problema al editar el ordenador"
    })
}
})

module.exports = router;