import express from 'express'
import './database'
const app = express()

  app.get('/', (req, res) => {
    return res.json({"message": "retorna"});
  })

app.listen(3333, () =>{
    const sms = 'testando o ts-node-dev'
    console.log(sms)
})