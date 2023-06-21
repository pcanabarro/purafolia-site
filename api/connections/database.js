const { MongoClient, ServerApiVersion } = require('mongodb')
require('dotenv').config()

class Mongo {
  constructor() {
    this.client = new MongoClient(process.env.URI_MONGO, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    })
    this.order = this.client.db('purafolia').collection('order')
  }

  async connect() {
    await this.client.connect()
  }
}
module.exports = new Mongo()
