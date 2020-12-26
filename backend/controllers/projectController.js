import asyncHandler from 'express-async-handler'
import Project from '../models/projects.js'
import Server from '../models/serverStats.js'
import dotenv from 'dotenv'
dotenv.config()

export const getProjects = asyncHandler(async (req, res) => {
  try {
    const project = await Project.find({})
    await Server.findByIdAndUpdate(
      process.env.SERVER_ID,
      { $inc: { visitorCount: 1 } },
      { new: true }
    )

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
