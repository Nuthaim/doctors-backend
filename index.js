// import json server
const jsonServer=require('json-server')
//create server application using json server
const restServer=jsonServer.create()
//set up path for db.json 
const router=jsonServer.router()
//return a middleware used by json server
const middleware=jsonServer.defaults()
//setup port 
const port = 3001
//using server
restServer.use(middleware)
restServer.use(router)

//to run the port 
restServer.listen(port,()=>{console.log('restServer listening on port ' +port);})