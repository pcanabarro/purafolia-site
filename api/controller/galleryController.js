import database from '../connections/database.js'

class GalleryController {
  static async getImages(req, res) {
    try {
      await database.connect()

      const images = await database.gallery.find().toArray()

      res.status(200).json({ images })
    } catch(error) {
      res.status(500).json(error)
    }
  }

  static async createImage(req, res) {
    try {
      const { url, description } = req.body
      const imageContent = { url, description, active: true }

      await database.connect()
      await database.gallery.insertOne(imageContent)

      res.status(201).json({ message: "Image Created", imageContent })
    } catch(error) {
      res.status(500).json(error)
    }
  }
}

export default GalleryController
