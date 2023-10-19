const express = require('express')
const cors = require('cors')

class Server {

    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.paths = {    }
        


        this.middlewares()

        this.routes()

    }

    middlewares() {
        this.app.use(express.static('public'))//directorio publico
        this.app.use(cors())//cors

    }

    routes() {
       // this.app.use(this.paths.authPath, require('../routes/auth'))
  
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('servidor corriendo en puerto '+ this.port)
          })
    }

}



module.exports = Server