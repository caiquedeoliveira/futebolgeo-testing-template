const express = require('express')
const nunjucks = require('nunjucks')
const server = express()

server.set("view engine", "njk")
server.use(express.static('public'))

nunjucks.configure("views", {
    express: server
})

server.get("/", (req, res)=>{
    return res.render("about")
})

server.get("/posts", (req, res)=>{
    return res.render("posts")
})

server.use(function(req, res) {
    res.status(404).render("not-found");
});

server.listen(3000, ()=>{
    console.log('server is running')
})