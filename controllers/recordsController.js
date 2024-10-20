import recordModel from "../models/recordModel.js";

export const getAllRecords = async (req, res) => {
  try {
    const blogs = await recordModel.findAll()
    res.json(blogs)
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const getRecord = async (req, res) => {
  try {
    const blog = await recordModel.findAll({
      where: { id: req.params.id }
    })
    res.json(blog[0])
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const createRecord = async (req, res) => {
  try {
    await recordModel.create(req.body)
    res.json({
      "message": "Registro creado correctamente"
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const updateRecord = async (req, res) => {
  try {
    await recordModel.update(req.body, {
      where: { id: req.params.id }
    })
    res.json({
      "message": "Registro actualizado correctamente"
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const deleteRecord = async (req, res) => {
  try {
    await recordModel.destroy({
      where: { id: req.params.id }
    })
    res.json({
      "message": "Registro eleminado correctamente"
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}