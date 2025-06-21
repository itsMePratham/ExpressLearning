const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Importing database connection
const { connectToDatabase } = require("./connection");
// Connect to MongoDB
connectToDatabase("mongodb://localhost:27017/mvc_learning");

// importing middleware
const { logReqRes } = require("./middleWare/middlewares");


app.use(logReqRes("log.txt"));
// Importing user routes
const userRouter = require("./routes/user");

// User routes

app.use("/users", userRouter);
PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
