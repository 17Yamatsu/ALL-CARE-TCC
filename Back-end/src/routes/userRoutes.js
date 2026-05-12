import express from 'express'
import * as userController from '../controllers/userController.js'

const router = express.Router()

router.post('/usuarios', userController.createUser)
router.put('/usuarios/:id', userController.updateUser)
router.get('/usuarios', userController.getUsers)
router.delete('/usuarios/:id', userController.deleteUser)

export default router