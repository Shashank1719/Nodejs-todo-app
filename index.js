const express = require('express')
const app = express()
const tasks = require('./routes/tasks');
const connectDB = require('../Task Manager/db/connection');
const dotenv = require('dotenv').config();
const notFound = require('../Task Manager/middlewares/not-found');

const port = 3000

// middleware
app.use(express.json());
app.use(notFound);



// routes
app.get('/', (req, res) => {
    res.send('Task Manager')
})

app.use('/taskmanager/tasks', tasks);



app.get('/author', (req, res) => {
    res.send('Shashank Shah')
})
// app.get('/', (req, res) => {
//     res.send('Task Manager')
// })
// app.get('/', (req, res) => {
//     res.send('Task Manager')
// })
// app.get('/', (req, res) => {
//     res.send('Task Manager')
// })

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}!`)
        })
    } catch (error) {
        console.log(error);
    }
}

start()

