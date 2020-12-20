import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'

const app = express()
dotenv.config()

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('dev'))
}

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
