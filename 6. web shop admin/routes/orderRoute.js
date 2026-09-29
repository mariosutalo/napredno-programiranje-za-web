import express from 'express'
// ./ - trenutna mapa, ../ - mapa iznad
import { dbConnection } from '../index.js'
import { appConstants } from '../config/appConstants.js'

export const router = express.Router()

router.get("/", async (req, res) => {
  try {
    //select id, full_name, status, payment_type, order_date from user_order;
    const [orders] = await dbConnection.query(
      `select id, full_name as fullName, status, payment_type as paymentType, order_date as orderDate
      from user_order;`,
    );
    res.render("orders", { pageName: "Orders", orders: orders });
  } catch (error) {
    console.log(`Error: ${error}`)
    res.render("server-error")
  }
});