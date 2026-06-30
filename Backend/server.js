const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const expenseRoutes = require("./routes/expenseRoutes");

app.use("/api", expenseRoutes);     


app.get("/", (req, res) => {
  res.send("Backend is Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
