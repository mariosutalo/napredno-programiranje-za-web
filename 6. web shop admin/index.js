import express from "express";
import mysql from "mysql2/promise";
import { appConstants } from "./config/appConstants.js";
import { router as indexRouter } from "./routes/indexRoute.js"
import { router as orderRouter } from "./routes/orderRoute.js"
import { router as userRouter } from "./routes/userRoute.js"
import { router as productRouter } from "./routes/productRoute.js"

export const dbConnection = await mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "shop",
});

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

// middleware
app.use((req, res, next) => {
  res.app.locals.pageStyles = []
  next()
})

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter)
app.use("/orders", orderRouter)
app.use("/users", userRouter)
app.use("/products", productRouter)

app.listen(3001);
