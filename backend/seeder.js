import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'

import users from './data/users.js'
import projects from './data/projects.js'

import Projects from './models/projects.js'
import User from './models/users.js'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const destroyData = async () => {
  try {
    await Projects.deleteMany()
    await User.deleteMany()

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
    await User.deleteMany()

    await User.insertMany(users)

    await Projects.insertMany(projects)

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
