const express = require("express");
const router = express.Router();

const {
  addBudget,
  getBudget,
  addExpense,
  getExpense,
  editExpense,
  deleteExpense,
} = require("../controllers/expensecontrollers");

router.post("/add-budget", addBudget);

router.get("/get-budget", getBudget);

router.post("/add-expense", addExpense);

router.get("/get-expense", getExpense);

router.put("/edit-expense/:id", editExpense);

router.delete("/delete-expense/:id", deleteExpense);

module.exports = router;
