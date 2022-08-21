const express = require('express');

const bodyParser = require('body-parser');


const app = express()


// const userRoute = require('../routes/users')
// const productRoute = require('../routes/product')
// const orderRoute = require ('../routes/orders')
// const cartRoute = require ('../routes/carts')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


// app.use('/api/user', userRoute)
// app.use('/api/products', productRoute)
// app.use('/api/orders', orderRoute)
// app.use('/api/carts', cartRoute)

app.get("/", (req, res) => {
    res.send("welcome to ire miwa api")
})

module.exports = app;