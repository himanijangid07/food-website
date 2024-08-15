const express = require('express')
const app = express()
const port = process.env.PORT || 6003
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config()
const jwt = require('jsonwebtoken');

app.use(express.json())
app.use(cors())

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@foody-cluster.t4uci.mongodb.net/foody-cluster?retryWrites=true&w=majority&appName=Foody-cluster`).then(
    console.log("MongodDb Connected Successfully!")
).catch((error) => console.log("Error", error))

app.post('/jwt', async (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '1hr'
  })
  res.send({token}) 
})

const productRoutes = require('./api/routes/productRoute')
const cartRoutes = require('./api/routes/cartRoutes')
const userRoutes = require('./api/routes/userRoutes')
app.use('/product', productRoutes);
app.use('/carts', cartRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})