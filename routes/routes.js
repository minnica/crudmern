import express from 'express'
import {
  createBank,
  deleteBank,
  getAllBanks,
  getBank,
  updateBank,
} from '../controllers/banksController.js'

const router = express.Router()

// banks routes
router.get('/banks', getAllBanks)
router.get('/banks/:id', getBank)
router.post('/banks/', createBank)
router.put('/banks/:id', updateBank)
router.delete('/banks/:id', deleteBank)

export default router
