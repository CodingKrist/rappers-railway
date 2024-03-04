const express = require('express')
//const bodyParse = require('body-parser')
const app = express()
const cors = require('cors')
const PORT = 8000

//app.use(bodyParse.urlencoded({ extended: true }));
//app.use(bodyParse.json());
app.use(cors());

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennet',
        'birthLocation': 'Chicago, Illinois'
    },
    'dylan': {
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response) => { //lo que va despues de los dos puntos: indica que es un queryParameter (${}), no es el camino (path)
    const rappersName = request.params.rapperName.toLowerCase() //es el parámetro (lo que va despues de los dos puntos, .../api/)
    if(rappers[rappersName]) {  //rappers[rappersName] sería igual que rappers.rappersName, pero utilizamos [] porque los objetos tienen espacios en su nombre
        response.json(rappers[rappersName])
    } else {
        response.json(rappers['dylan'])
    }
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})