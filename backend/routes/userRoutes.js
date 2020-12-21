import express from 'express'
const router = express.Router()

import { getUserProfile } from '../controllers/userController.js'

router.route('/').get(getUserProfile)

export default router
