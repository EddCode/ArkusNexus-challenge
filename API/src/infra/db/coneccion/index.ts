import mongoose, { ConnectOptions } from 'mongoose'
import config from '../../../resources/config'
import logger from '../../../shared/infraestructure/logs'

async function connectDb() {
  try {
    const { db: {
      url,
      username,
      password,
      name
    }} = config

    const mongoUri = `mongodb://${username}:${password}@${url}/${name}?authSource=admin`
    console.log(mongoUri)
    const connectOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }

    await mongoose.connect(mongoUri, connectOptions as ConnectOptions)
    logger.info('MongoDB is connected')
  } catch (error) {
    logger.error(error)
  }
}

export default connectDb
