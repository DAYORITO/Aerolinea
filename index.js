const express = require('express');

const path = require('path')
const puerto = 8091;
const app = express()

app.use(express.static('public'))

app.set('views', path.join(__dirname+'/public/views'))
app.set('view engine', 'hbs')

app.get('/', (req,res)=>{
    res.render('disponibilidad')
})
app.listen(puerto, ()=>{
    console.log(`Escuchando puerto ${puerto}`)
})
