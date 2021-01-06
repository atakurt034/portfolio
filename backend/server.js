import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import path from 'path'

import serverless from 'serverless-http'

import users from './routes/userRoutes.js'
import projects from './routes/projectRoutes.js'
import contacs from './routes/contactRoutes.js'

import connectDB from './config/db.js'
import { errorHandler, notFound } from './utils/errorMiddleware.js'
const router = express.Router()

const app = express()
const __dirname = path.resolve()

dotenv.config()
connectDB()

app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('dev'))
}

router.use('/api/users', users)
router.use('/api/projects', projects)
router.use('/api/contacts', contacs)

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'frontend', 'build')))

//   app.get('*', (req, res) =>
//     res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'))
//   )
// } else {
//   app.get('/', (req, res) => {
//     res.send('API is running....')
//   })
// }

router.use(errorHandler)
router.use(notFound)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)

app.use('/.netlify/functions/server', router) // path must route to lambda

exports = app
exports.handler = serverless(app)
