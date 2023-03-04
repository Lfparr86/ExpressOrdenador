let express = require("express"),
app=express()

app
.get("/",(req,res)=>{
    res.end("<h1>holllaa se recarga</h1>")
})

.listen(3000)
