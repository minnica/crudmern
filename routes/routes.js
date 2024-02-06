import express from 'express'
import {
  createBank,
  deleteBank,
  getAllBanks,
  getBank,
  updateBank,
} from '../controllers/banksController.js'
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getCategory,
  updateCategory,
} from '../controllers/categoriesController.js'

const router = express.Router()

// banks routes
router.get('/banks', getAllBanks)
router.get('/banks/:id', getBank)
router.post('/banks/', createBank)
router.put('/banks/:id', updateBank)
router.delete('/banks/:id', deleteBank)

// categories routes
router.get('/categories', getAllCategories)
router.get('/categories/:id', getCategory)
router.post('/categories/', createCategory)
router.put('/categories/:id', updateCategory)
router.delete('/categories/:id', deleteCategory)

export default router
