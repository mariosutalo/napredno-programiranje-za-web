import express from 'express'
// ./ - trenutna mapa, ../ - mapa iznad
import { dbConnection } from '../index.js'
import { appConstants } from '../config/appConstants.js'

export const router = express.Router()

router.get("/", (req, res) => {
  //select id, full_name, status, payment_type, order_date from user_order;
  res.render("orders", { pageName: "Orders" });
});