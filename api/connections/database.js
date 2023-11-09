import { MongoClient, ServerApiVersion } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

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

export default new Mongo()
