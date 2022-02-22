const express   = require('express')
const basicAuth = require('express-basic-auth')
const path      = require('path')
const app       = express()
const port      = process.env.PORT || 8080

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')))

app.use(
    basicAuth({
        challenge: true,
        users: { 'admin': process.env.SECRET }
    })
)

app.get('/', (req, res) => {
    res.render(path.join(__dirname, 'views/index'), {
        clients: []
    });
})

app.get('/rocco', (req, res) => {
    res.render(path.join(__dirname, 'views/rocco'), {
        clients: []
    });
})

app.listen(port, () => {
    console.log(`**** Server listening on port ${port} ****`)
});
