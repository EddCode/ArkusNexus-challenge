const config = {
  api: {
    url: 'http://localhost:3000',
  },
  db: {
    url: process.env.MONGO_DB || 'localhost:27017',
    name: process.env.MONGO_DB_NAME || 'mind-challenge',
    username: process.env.MONGO_USERNAME || 'root',
    password: process.env.MONGO_PASSWORD || '123456',
  },
  jwt: {
    token: process.env.AUTH_JWT_SECRET || 'secret',
  }
}

export default config
