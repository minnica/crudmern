import banksModel from '../models/banksModel.js'

// Read all records
export const getAllBanks = async (req, res) => {
  try {
    const banks = await banksModel.findAll()
    res.json(banks)
  } catch (error) {
    res.json({ message: error.message })
  }
}

// Read a single record
export const getBank = async (req, res) => {
  try {
    const banks = await banksModel.findAll({
      where: { bank_id: req.params.id },
    })
    res.json(banks[0])
  } catch (error) {
    res.json({ message: error.message })
  }
}

// Create record
export const createBank = async (req, res) => {
  try {
    await banksModel.create(req.body)
    res.json({
      message: 'create record successful',
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}

// Update record
export const updateBank = async (req, res) => {
  try {
    await banksModel.update(req.body, {
      where: { bank_id: req.params.id },
    })
    res.json({
      message: 'update record successful',
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}

// Delete record
export const deleteBank = async (req, res) => {
  try {
    await banksModel.destroy({
      where: { bank_id: req.params.id },
    })
    res.json({
      message: 'delete record successful',
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}
