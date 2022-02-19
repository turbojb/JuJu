const express = require('express')
const server = express()
const port = process.env.PORT || 8080

server.get('/', (req, res) => {
    res.send('Hiyooooooooo')
})

server.listen(port, () => console.log(`JuJu Portfolio started on ${port}`))