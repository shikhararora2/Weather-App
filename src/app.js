const express = require("express")
const app = express()
const PORT =  8181
const path = require("path")
const hbs = require("hbs")

// Public Path 
const staticPath = path.join(__dirname , "../public")
const templatePath = path.join(__dirname , "../templates/views")
const partialPath = path.join(__dirname, "../templates/partials")
console.log(partialPath)
//changes views into templates for hbs  
// Handlebars is a templating engine built on Node.js
// app.use(express.static(staticPath)) // Static file serving
app.use(express.static(staticPath))
app.set("view engine" , "hbs")
hbs.registerPartials(partialPath)
app.set('views' ,templatePath)
// console.log(staticPath)

// Routing

app.get("/", (req,res)=>{
res.render("index")
    })
app.get("/index", (req,res)=>{
res.render("index")
    })

app.get("/about", (req,res)=>{
res.render("about")
})

app.get("/weather", (req,res)=>{
    res.render("weather")
})

app.get("*",(req,res)=>{
    
res.render("404error" , {
    ErrorMsg : "Oops Page Not Found"
})
})

app.listen(PORT,()=>{
    console.log("Express Server Started .....")
    console.log(`${PORT}`)
})