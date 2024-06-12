const mongoose =require("mongoose")
const express =require("express")
const cors =require("cors")
const app = express()
app.use(cors())
const {recipemodel} = require("./model/recipe")
app.use(express.json())
mongoose.connect("mongodb+srv://mercy1112:mercy1112@cluster0.8x8j3ya.mongodb.net/recipeDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/view",(req,res)=>{
    recipemodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch((error)=>{res.send("error")})
})
app.post("/add",(req,res)=>{
    let input =req.body
    let recipe= new recipemodel(input)
    console.log(recipe)
    recipe.save()
    res.send({"status":"ADD"})
})
app.post("/search",(req,res)=>{
    let input = req.body
    recipemodel.find(input).then((data)=>{
        res.json(data)
    }).catch((error)=>{
        res.send("error")
    })
})
app.post("/delete",(req,res)=>{
    let input = req.body
    recipemodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"deleted"})
        }
    ).catch((error)=>{
        res.json({"status":"error"})
    })

    
})
app.listen(8080,()=>{
    console.log("server started")
})
