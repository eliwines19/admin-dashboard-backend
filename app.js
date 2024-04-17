
require('dotenv').config()

const PORT = process.env.PORT

const server = () => {
    console.log('You are listening on port: ', PORT)
}

server()