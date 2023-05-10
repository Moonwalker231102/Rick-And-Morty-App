const http = require("http");
const data = require("./utils/data");
const { log } = require("console");
http
.createServer((req, res) =>{
    const {url} = req;
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(url.includes('/rickandmorty/character')){
        const id = url.split('/').at(-1)
        
        const characterSearched = data.find((character) =>{
            return character.id === +id;
        })

        res.writeHead(200, {"Content-type": "application/json"})
        .end(JSON.stringify(characterSearched))
    }
})
.listen(3001, "localhost")