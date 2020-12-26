import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

import projects from './data/projects.js'
import server from './data/server.js'

import Projects from './models/projects.js'
import Server from './models/serverStats.js'
import User from './models/users.js'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const destroyData = async () => {
  try {
    await Projects.deleteMany()
    await User.deleteMany()
    await Server.deleteMany()

    console.log('Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`error.message`.red.inverse)
    process.exit(1)
  }
}

const importData = async () => {
  try {
    await Projects.deleteMany()

    await Projects.insertMany(projects)

    await Server.insertMany(server)

    console.log('Data Imported'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`error.message`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
