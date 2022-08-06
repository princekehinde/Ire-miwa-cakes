const server = require('./routes/index')
const db = require('./config/db')
const Port = process.env.PORT || 3000



server.listen(Port, () => {
    console.log ('Backend server is running')
})