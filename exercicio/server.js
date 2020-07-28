const express = require('express')
const app = express()
//Submeto o dados da minha requisição ele faz um parser no corpo do request e vai jogar no request.body
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

//atender uma requisição do tipo post em usuarios
app.post('/usuario', (req,resp) => {
    console.log(req.body)
    resp.send('Parabéns, usuário criado!')
})

app.post('/usuario/:id', (req,resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('Parabéns, usuário alterado!')
})

app.listen(3003)