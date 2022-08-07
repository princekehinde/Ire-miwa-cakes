const server = require('./routes/index')
const data = require('./config/db')
const Port = process.env.PORT || 3000


data()
.then(() =>
{
    console.log('Connected to MongoDB')
})
.catch(err =>{ console.log(err)

})


server.listen(Port, () => {
    console.log ('Backend server is running')
})