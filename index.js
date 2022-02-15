//index.js
import app from './app.js'
import connectToMongo from './mongo.js'

import * as dotenv from 'dotenv'
//This will effectivelly look for a .env file and load the constants as environement variables.
dotenv.config()
const PORT = process.env.PORT || 4000

async function startServer() {
  await connectToMongo
  app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT} 🚀`)
  })
}

startServer()