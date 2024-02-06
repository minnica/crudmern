import transactionsModel from '../models/transactionsModel.js'

// Read all records
export const getAllTransactions = async (req, res) => {
  try {
    const transactions = await transactionsModel.findAll()
    res.json(transactions)
  } catch (error) {
    res.json({ message: error.message })
  }
}

// Read a single record
export const getTransaction = async (req, res) => {
  try {
    const transaction = await transactionsModel.findAll({
      where: { transaction_id: req.params.id },
    })
    res.json(transaction[0])
  } catch (error) {
    res.json({ message: error.message })
  }
}

// Create record
export const createTransaction = async (req, res) => {
  try {
    await transactionsModel.create(req.body)
    res.json({
      message: 'create record successful',
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}

// Update record
export const updateTransaction = async (req, res) => {
  try {
    await transactionsModel.update(req.body, {
      where: { transaction_id: req.params.id },
    })
    res.json({
      message: 'update record successful',
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}

// Delete record
export const deleteTransaction = async (req, res) => {
  try {
    await transactionsModel.destroy({
      where: { transaction_id: req.params.id },
    })
    res.json({
      message: 'delete record successful',
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}
