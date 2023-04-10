
import express from 'express'
const app = express()
const port = 5000

app.get('/home', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('this is about page!!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})