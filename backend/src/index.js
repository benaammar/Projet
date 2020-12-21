const express=require("express")
const mongoose=require("mongoose")
const Produit=require("../models/produits")
const app=express()
const port = process.env.PORT ;


mongoose
	.connect('mongodb://localhost:27017/boutique',{useNewUrlParser: true})
	.then(() => {
		console.log("connecxion réussi");
	})
	.catch(err => {
		console.log("connexion echoué");
		console.log(err);
    });
    app.post("/produits", async (req, res) => {
        const newProduit = new Produit(req.body);
        const document = await newProduit.save();
        res.status(201).json(document);
    });
    app.get("/",async(req,res)=> {
        await Produit
                    .find()
                    .exec()
                    .then(doc=> {
                        res.send(doc)
                    })
                    .catch(e=> {
                        res.status(500).send()
                    })
    })
    app.get("/produit/:id", async (req, res) => {
        console.log(req.params.id);
        await Produit.findById(req.params.id)
            .exec()
            .then(doc => {
                res.send(doc);
            })
            .catch(err => {
                res.status(500).send();
            });
    });













app.listen(port, () => {
	console.log(` serveur a l'ecoute:http//localhost:${port}`);
});