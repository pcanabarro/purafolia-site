const { MongoClient } = require('mongodb')
require('dotenv').config()

class Mongo {
  constructor() {
    this.client = new MongoClient(process.env.URI_MONGO)
  }

  static async connect() {
    await this.client.connect()
  }
}
module.exports = Mongo
