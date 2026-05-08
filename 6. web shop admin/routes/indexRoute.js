import express from 'express'
// ./ - trenutna mapa, ../ - mapa iznad
import { dbConnection } from '../index.js'
import { appConstants } from '../config/appConstants.js'

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
