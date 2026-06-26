const db = require("../db");

const addBudget = async (req, res) => {
  try {
    const { amount } = req.body;
    const query = `
    UPDATE budget 
     SET 
     amount = ?, 
     updated_at = NOW()
     where id = 1`;

    const [result] = await db.query(query, [amount]);

    res.status(200).json({
      status: true,
      message: "Budget added successfully",  
      data: {
        id: result.insertId,
        amount,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};


const getBudget = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT amount
      FROM budget
      where id = 1
    `);

    res.status(200).json({
      status: true,
      data: rows[0],
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};


const addExpense = async (req, res) => {
  try {
    const { name, Expense, amount } = req.body;

    const query = `
      INSERT INTO expense
      (name, Expense, amount)
      VALUES (?, ?, ?)
    `;

    const [result] = await db.query(query, [
      name,
      Expense,
      amount,
    ]);

    console.log(result);

    res.status(201).json({
      status: true,
      message: "Expense added successfully",
      data: {
        id: result.insertId,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};


const getExpense = async (req, res) => {
  try {
    const query = `
      SELECT
        id,
        Expense,
        amount
      FROM expense 
      WHERE is_deleted = false
    `;

    const [rows] = await db.query(query);

    res.status(200).json({
      status: true,
      data: rows,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};


const editExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const { Expense, amount } = req.body;
    console.log("Body Recevied:", req.body);

    const query = `  
      UPDATE expense
      SET Expense = ?, amount = ?, updated_at = NOW()
      WHERE id = ?
    `;

    await db.query(query, [
      Expense,
      amount,
      id,
    ]);

    res.status(200).json({
      status: true,
      message: "Expense updated successfully",
    });
  } catch (error) {
    console.log("Error:",error);
    res.status(500).json({
      status: false,
      message: error.message,
      
    });
  }
};


const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const query = `
      DELETE from expense
      WHERE id = ?
    `;

    await db.query(query, [id]);

    res.status(200).json({
      status: true,
      message: "Expense deleted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

module.exports = {
  addBudget,
  getBudget,
  addExpense,
  getExpense,
  editExpense,
  deleteExpense,
};