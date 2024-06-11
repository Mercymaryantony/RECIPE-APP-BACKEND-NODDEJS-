const mongoose= require("mongoose")
const schema = mongoose.Schema({
    "item":{type:String,required:true},
    "desc":String,
    "url":String,
    "ing":String,
    "prep":String
})
let recipemodel = mongoose.model("recipe",schema)
module.exports={recipemodel}