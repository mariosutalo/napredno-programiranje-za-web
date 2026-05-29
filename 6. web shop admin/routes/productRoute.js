import express from 'express'
// ./ - trenutna mapa, ../ - mapa iznad
import { dbConnection } from '../index.js'
import { appConstants } from '../config/appConstants.js'
import { addNewProductSchema } from '../schemas/schemas.js';

export const router = express.Router()

router.get("/", async (req, res) => {
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
    res.render("all-products", {
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


router.get("/create", (req, res) => {
  res.render("create-product");
})

router.post("/create", async (req, res) => {
  // to do - validate data with zod
  const product = req.body;
  const validateProductResult = addNewProductSchema.safeParse(product)
  if (validateProductResult.success === false) {
    res.render("create-product", { hasValidationErrors: true })
    return
  }
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
  try {
    const [insertProductDbResponse] = await dbConnection.query(insertNewProductSql)
    res.render("create-product");
  } catch (error) {
    console.log(error)
    res.render("server-error")
  }
})