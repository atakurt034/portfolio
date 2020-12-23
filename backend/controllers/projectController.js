import asyncHandler from 'express-async-handler'
import Project from '../models/projects.js'

export const getProjects = asyncHandler(async (req, res) => {
  try {
    const project = await Project.find({})

    if (project) {
      res.json(project)
    } else {
      res.status(404)
      throw new Error('Project not found!')
    }
  } catch (error) {
    console.log(error)
  }
})
