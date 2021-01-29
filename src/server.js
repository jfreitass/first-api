const express =  require('express')
const knex = require('./database/')
const app =  express()

app.use(express.json())

//select
app.get('/users', (req, res) => 
    knex('tblusers').then((results) =>
        res.json(results)))

//insert
app.post('/users', (req, res) => {
    const { name } = req.body
    const { idade } = req.body
    const { email } = req.body
    knex('tblusers').insert({
        name,
        idade,
        email
    })
    .then(_ => res.status(201).send())
    .catch(error => res.status(500).send())
})

//update
app.put('/users/:iduser', (req, res) =>{
    const { iduser } = req.params
    const { name } = req.body
    const { idade } = req.body
    const { email } = req.body
    knex('tblusers').update({
        name,
        idade,
        email
    }).where( {iduser} )

    .then(_ => res.status(201).send())
    .catch(error => res.status(500).send())
})
    
//delete
app.delete('/users/:iduser', (req, res) => {
    const { iduser } = req.params
    const { name } = req.body
    const { idade } = req.body
    const { email } = req.body
    knex('tblusers').where({ iduser }).del()

    .then(_ => res.status(200).send())
    .catch(error => res.status(500).send())
})


app.listen(3333, () => {console.log('Server is running')})
