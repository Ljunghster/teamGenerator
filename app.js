const { prompt } = require('inquirer')
const { writeFile, readFile } = require('fs')
// express is used to write the code for the routes
// const { promisify } = require('until')
// const axios = require('axios')
// axios calls/ requests to routes



prompt ([
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  },
  {
    type: 'input',
    name: 'ID',
    message: 'What is your identification password?'
  },
  {
    type: 'input',
    name: 'job',
    message: 'What is your position?'
  }
])
  .then(data => {
    console.log(data)
  })
  .catch(err => console.log(err))