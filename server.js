const express = require('express')
const nunjucks = require('nunjucks')
const posts = require('./data')


const server = express()

server.set("view engine", "njk")
server.use(express.static('public'))

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", (req, res)=>{
    const about = {
        avatar_name: "BOLOTA",
        title: "Futebol Geográfico",
        description: "Olhando para o Futebol através da Geografia",
        themes: [
            {theme: "Globalização"},
            {theme: "Paisagem"},
            {theme: "Geografia Urbana"},
            {theme: "História do Brasil"}
        ],
        links: [
            {url: "https://futebolgeografico.medium.com/", name: "Medium"},
            {url: "https://instagram.com/futebolgeografico", name: "Instagram"}
        ]
    }


    return res.render("about", {about})
})

server.get("/posts", (req, res)=>{
    return res.render("posts", {items: posts})
})

server.get("/posts/:id", (req, res) => {
    const id = req.params.id;

    const post = posts.find( currentEl => {
        return currentEl.id == id
    })

    if(!post){
        return res.render('not-found')
    }

    return res.render("post", {item: post})
})



server.use(function(req, res) {
    res.status(404).render("not-found");
});

server.listen(3000, ()=>{
    console.log('server is running')
})