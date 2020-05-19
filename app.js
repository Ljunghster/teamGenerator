// const { prompt } = require('inquirer')
// const { writeFile, readFile } = require('fs')
const express = require('express')
const { join } = require('path')
const app = express()
// const { promisify } = require('until')
// const axios = require('axios')

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'))
})

app.get('/engineer', (req, res) => {
    res.sendFile(join(__dirname, 'engineer.html'))
})

app.get('/intern', (req, res) => {
    res.sendFile(join(__dirname, 'intern.html'))
})

app.get('/manager', (req, res) => {
    res.sendFile(join(__dirname, 'manager.html'))
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
})

// inquirer.prompt([
//   {
//     type: 'input',
//     name: 'name',
//     message: 'What is your name?'
//   },
//   {
//     type: 'input',
//     name: 'ID',
//     message: 'What is your identification password?'
//   },
//   {
//     type: 'input',
//     name: 'job',
//     message: 'What is your position?'
//   }
// ])
//   .then(data => {
//     console.log(data)
//   })
//   .catch(err => console.log(err))