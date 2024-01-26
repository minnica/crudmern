// importamos el modelo 
import BlogModel from "../models/BlogModel.js";

// Métodos para el CRUD

// Mostrar todos los registros
export const getAllIngresos = async (req, res) => {
  try {
    const ingresos = await BlogModel.findAll()
    res.json(ingresos)
  } catch (error) {
    res.json({ message: error.message })
  }
}

// Mostrar un registro
export const getIngresos = async (req, res) => {
  try {
    const ingresos = await BlogModel.findAll({
      where: { id: req.params.id }
    })
    res.json(ingresos[0])
  } catch (error) {
    res.json({ message: error.message })
  }
}

// Crear un registro
export const createIngresos = async (req, res) => {
  try {
    await BlogModel.create(req.body)
    res.json({
      "message": "Registro creado correctamente"
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}

// Actualizar un registro
export const updateIngresos = async (req, res) => {
  try {
    await BlogModel.update(req.body, {
      where: { id: req.params.id }
    })
    res.json({
      "message": "Registro actualizado correctamente"
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}

// Eliminar un registro
export const deleteIngresos = async (req, res) => {
  try {
    await BlogModel.destroy({
      where: { id: req.params.id }
    })
    res.json({
      "message": "Registro eleminado correctamente"
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}