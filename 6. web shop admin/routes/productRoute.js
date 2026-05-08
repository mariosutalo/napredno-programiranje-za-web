import express from 'express'
// ./ - trenutna mapa, ../ - mapa iznad
import { dbConnection } from '../index.js'
import { appConstants } from '../config/appConstants.js'

export const router = express.Router()


router.get("/create", (req, res) => {
  res.render("createProduct");
})

router.post("/create", async (req, res) => {
  const product = req.body;
  const insertNewProductSql =
    `insert into product(name, price, stock, category_id, description)
    values 
    (
    "${product.name}", 
    ${product.price}, 
    ${product.stock}, 
    ${product.categoryId}, 
    "${product.description}"
    );`
  const [insertProductDbResponse] = await dbConnection.query(insertNewProductSql)
  res.render("createProduct");
})