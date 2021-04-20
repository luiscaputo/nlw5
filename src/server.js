const express =  require('express')
const routes =  require('./routes')

const app = express()

// app.use(routes)
app.get('/', (req, res) =>{
    return res.json({"message":"Estamos no NLW"})
})   

app.listen(4444)
