const express = require("express");
const connectDB = require("./config/dbConnection");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const router = require("./routes/contactRoutes");
const userRouter = require("./routes/userRoutes");
const errorHandler = require("./middlewares/errorHandler");
connectDB();
app.use(express.json());
app.use("/api/contacts", router);
app.use("/api/users", userRouter);
app.use(errorHandler);
app.get("/", (req, res) => {
  res.json({ message: "server is running" });
});
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
