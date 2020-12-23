import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
})

const Project = mongoose.model('Project', projectSchema)

export default Project
