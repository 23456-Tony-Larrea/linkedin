const exprees = require("express");
const app=exprees();
const path=require("path")
/* app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,"public/index.html"))
}) */
app.use(exprees.static(path.join(__dirname,"public")))

/* const dataRoute=require('./routes/rutas')
app.use('/data',dataRoute) */

 
const dataRoute=require('./routes/linkedin')
app.use('data',dataRoute) 

app.listen(3003,()=>{
    console.log("el puerto esta en el:3003")
})