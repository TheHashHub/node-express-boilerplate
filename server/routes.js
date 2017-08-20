import { Router } from 'express'
import { HomeController } from './controllers'

const router = Router()

/**
 * GET home page
 */
router.get('/', HomeController)

export default router
