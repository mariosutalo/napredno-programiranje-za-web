import express from "express";
import mysql from "mysql2/promise";
import { appConstants } from "./config/appConstants.js";

const dbConnection = await mysql.createConnection({
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

app.get("/", async (req, res) => {
  try {
    let currentPage;
    if (isNaN(Number(req.query.page))) {
      currentPage = 1;
    } else {
      currentPage = Number(req.query.page);
    }
    const offset = (currentPage - 1) * appConstants.productsPerPage;
    const [products] = await dbConnection.query(
      `select name, price, stock
       from product
       limit ${appConstants.productsPerPage} offset ${offset};`,
    );
    const [productsCountDbResponse] = await dbConnection.query(
      `
      select count(*) as count
      from product;`,
    );
    const productsCount = productsCountDbResponse[0].count;
    const pagesCount = Math.ceil(productsCount / appConstants.productsPerPage);
    res.render("index", {
      pageName: "Products",
      products: products,
      currentPage: currentPage,
      pagesCount: pagesCount
    });
  } catch (error) {
    console.log("error executing query", error);
    res.render("server-error");
  }
});
app.get("/orders", (req, res) => {
  res.render("orders", { pageName: "Orders" });
});
app.get("/users", (req, res) => {
  res.render("users", { pageName: "Users" });
});

app.get("/products/create", (req, res) => {
  res.render("createProduct");
})

app.listen(3001);

const names = [];
names.push("Mario")
names.push("Chat GPT")

names.forEach((item) => {
  console.log(item)
})
