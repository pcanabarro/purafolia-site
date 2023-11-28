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
    this.db = this.client.db('purafolia')
    this.order = this.db.collection('order')
    this.gallery = this.db.collection('gallery')
    this.email = this.db.collection('email')
  }

  async connect() {
    await this.client.connect()
  }

  async populate() {
    await this.db.createCollection('order')
    await this.db.createCollection('gallery')
    await this.db.createCollection('email')
  }
}

export default new Mongo()
