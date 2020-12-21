const mongoose=require("mongoose")

const produitSchema=new mongoose.Schema({
    nom:{
        type:String,
        required:true,
    },
    prix:{
        type:Number,
        required:true,
    },
    descriptif:{
        type:String,

    }
})
const Produit=mongoose.model("Produit",produitSchema)
module.exports=Produit