import categoriesModel from '../models/categoriesModel.js'

// Read all records
export const getAllCategories = async (req, res) => {
  try {
    const categories = await categoriesModel.findAll()
    res.json(categories)
  } catch (error) {
    res.json({ message: error.message })
  }
}

// Read a single record
export const getCategory = async (req, res) => {
  try {
    const category = await categoriesModel.findAll({
      where: { category_id: req.params.id },
    })
    res.json(category[0])
  } catch (error) {
    res.json({ message: error.message })
  }
}

// Create record
export const createCategory = async (req, res) => {
  try {
    await categoriesModel.create(req.body)
    res.json({
      message: 'create record successful',
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}

// Update record
export const updateCategory = async (req, res) => {
  try {
    await categoriesModel.update(req.body, {
      where: { category_id: req.params.id },
    })
    res.json({
      message: 'update record successful',
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}

// Delete record
export const deleteCategory = async (req, res) => {
  try {
    await categoriesModel.destroy({
      where: { category_id: req.params.id },
    })
    res.json({
      message: 'delete record successful',
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}
