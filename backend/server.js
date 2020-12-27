import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import path from 'path'

import users from './routes/userRoutes.js'
import projects from './routes/projectRoutes.js'
import contacs from './routes/contactRoutes.js'

import connectDB from './config/db.js'

const app = express()
const __dirname = path.resolve()

dotenv.config()
connectDB()

app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('dev'))
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.use('/api/users', users)
app.use('/api/projects', projects)
app.use('/api/contacts', contacs)

app.get('/', (req, res) => {
  res.send('Server running')
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running on `.white.bold +
      `${process.env.NODE_ENV}`.yellow.bold +
      ` at port `.white.bold +
      `${PORT}`.yellow.bold
  )
)
