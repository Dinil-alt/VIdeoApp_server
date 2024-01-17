// to import json-server

const jsonServer = require('json-server')

//create a server for json file
const mediaPlayerServer = jsonServer.create()

//set up path for json file

const router = jsonServer.router('db.json')

// return a middleware used by json server

const middleWare = jsonServer.defaults()

//setup a port for json Server

const port = 4000 || process.env.port

//use middleware and router in server

mediaPlayerServer.use(middleWare)
mediaPlayerServer.use(router)

//to listen server for resolving requets from server\

mediaPlayerServer.listen(port,()=>{
    console.log(`mediaplayer listening on port ${port}, and waiting for requests`);
})
