import express from "express";
import mysql from "mysql2";

const dbConnection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "shop",
});

dbConnection.connect((error) => {
  if (error) {
    console.log("error connecting to db:", error);
  }
});

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  dbConnection.query(
    `select name, price, stock
        from product;`,
    (error, results, fields) => {
      if (error) {
        console.log("error executing query", error);
        res.render("server-error");
        return;
      }
      console.log("simple select data", results);
      res.render("index", {
        pageName: "Products",
        products: results,
      });
    },
  );
});
app.get("/orders", (req, res) => {
  res.render("orders", { pageName: "Orders" });
});
app.get("/users", (req, res) => {
  res.render("users", { pageName: "Users" });
});

app.listen(3001);
