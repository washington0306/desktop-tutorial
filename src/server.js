const port = 4001;

const express = require('express')
const bodyParser = require('body-parser')
const dataBase = require('../src/dataBase/data')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get('/alunos', (req, res, next)=>{

    res.send(dataBase.getAlunos())
})

app.get('alunos/:id', (req, res, next) =>{
    res.send(dataBase.getAluno(req.params.id))
})

app.post('/alunos', (req, res, next) => {
    const aluno = dataBase.salvarAluno({
        name : req.body.name,
        nota: req.body.nota
    })
    res.send(aluno)
})

app.put('/alunos/:id' , (req, res, next) => {
    const aluno = dataBase.salvarAluno({
        id: req.params.id,
        name : req.body.name,
        nota: req.body.nota
    })
    res.send(aluno)
})

app.delete('/alunos/:id' , (req, res, next) => {
    const aluno = dataBase.deleteAluno(req.params.id)
    res.send(aluno)
})

app.listen(port, ()=>{
    console.log(`servidor rodando na porta ${port}`)
})