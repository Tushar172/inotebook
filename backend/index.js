const connectToMongo = require('./db');
const express = require('express')
const authRoute = require('./routes/auth')
const notesRoute = require('./routes/notes')

connectToMongo();
const app = express()
const port = 3000

// Available Routes
app.use('/api/auth', authRoute )
app.use('/api/notes', notesRoute)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})