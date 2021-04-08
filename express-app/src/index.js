const express = require('express')
const app = express()
const port = 8080; // default port to listen

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello Libeo!')
})

// Start the Express server
app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`)
})