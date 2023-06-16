const { MongoClient } = require('mongodb')
require('dotenv').config()

const client = new MongoClient(process.env.URI_MONGO, (err,db) =>{
    console.log('Connected on Mongo')
})

console.log(process.env.URI_MONGO)


const run = async () => {
    console.log('1')
    client.connect()
    console.log('2')
    const order = client.db('purafolia').collection('order')
    console.log(order.find())
    // console.log(ping)
    client.close()
}

run()