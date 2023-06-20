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
  }

  static async connect() {
    await this.client.connect()
  }
}
module.exports = Mongo
