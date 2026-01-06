import express from 'express'
import {tile_end_point} from "./util.js"


const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/add/:a/:b', tile_end_point)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})