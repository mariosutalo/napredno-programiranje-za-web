import express from "express";
import mysql from "mysql2/promise";

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

app.get("/", async (req, res) => {
  try {
    const [products, pFields] = await dbConnection.query(
      `select name, price, stock
        from product;`,
    );
    const [productsCount, cFields] = await dbConnection.query(
      `
      select count(*) as count
      from product;`,
    );
    console.log(productsCount[0].count)
    res.render("index", {
      pageName: "Products",
      products: products,
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

app.listen(3001);
