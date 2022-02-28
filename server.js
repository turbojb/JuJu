const express       = require('express')
const basicAuth     = require('express-basic-auth')
const path          = require('path')
const app           = express()
const port          = process.env.PORT || 8080
const clients       = require("./clients").clients
const cookieSession = require('cookie-session')
const bodyParser    = require('body-parser')

const secret = process.env.SECRET

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')))

app.use(
    cookieSession({
        name: "JuJuSession",
        keys: [secret],
        maxAge: 24 * 60 * 60 * 1000
    })
)

app.use(bodyParser.json())

app.get('/', (req, res) => {
    if(req.session.loggedIn && req.session.loggedIn === true)
        res.render(path.join(__dirname, 'views/index'), { clients: clients })
    else
        res.render(path.join(__dirname, 'views/gate'))
})

app.get('/gate', (req, res) => {
    res.render(path.join(__dirname, 'views/gate'), { clients: clients });
})

app.post('/login', (req, res) => {
    if(req.body.pw && req.body.pw === secret) {
        req.session.loggedIn = true
        res.status(200).json("logged in")
    }
    else {
        res.status(400).json("bad request")
    }
});

for(let client in clients) {
    app.get(`/${client}`, (req, res) => {
        if(req.session.loggedIn && req.session.loggedIn === true)
            res.render(path.join(__dirname, `views/client`), { projectClient: clients[client]});
        else
            res.redirect("/")
    })
}

app.listen(port, () => {
    console.log(`**** Server listening on port ${port} ****`)
});