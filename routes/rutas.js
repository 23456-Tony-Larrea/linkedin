const router=require('express').Router()
router.route('/nombre')
.get((req,res)=>{
    res.send({
        "nombre":"tony",
        "apellido":"larrea"
    })
})
.post((req,res)=>{
res.send({
    "type":"POST"
})
})
module.exports=router