const express = require('express')
const app = express()
const db = require('./config/db')

const userRouter = require('./routes/index')

const PORT = process.env.PORT || 5000


app.use(express.json())
app.use('/', userRouter)

async function start() {
    try {
        await db.authenticate()
        console.log('db connected')
    } catch (err) {
        console.log(err)
    }
}

start()

app.listen(PORT, () => console.log('server is running'))