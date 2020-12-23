import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'

import users from './routes/userRoutes.js'
import projects from './routes/projectRoutes.js'

import connectDB from './config/db.js'

const app = express()
dotenv.config()
connectDB()

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('dev'))
}

app.use('/api/users', users)
app.use('/api/projects', projects)

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
