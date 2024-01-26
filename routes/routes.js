import express from 'express'
import { createIngresos, deleteIngresos, getAllIngresos, getIngresos, updateIngresos } from '../controllers/BlogController.js'
const router = express.Router()

router.get('/', getAllIngresos)
router.get('/:id', getIngresos)
router.post('/', createIngresos)
router.put('/:id', updateIngresos)
router.delete('/:id', deleteIngresos)

export default router
