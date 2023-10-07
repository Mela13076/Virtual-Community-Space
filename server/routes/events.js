import express from 'express'
import EventController from '../controllers/events.js'


// create a express router
const router = express.Router()

router.get('/', EventController.getEvents)
router.get('/:category', EventController.getCategoryEvents);

export default router