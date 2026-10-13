import express from "express";
// ./ - trenutna mapa, ../ - mapa iznad
import { dbConnection } from "../index.js";
import { appConstants } from "../config/appConstants.js";

export const router = express.Router();

router.get("/", async (req, res) => {
  try {
    //select id, full_name, status, payment_type, order_date from user_order;
    const [orders] = await dbConnection.query(
      `select id, full_name as fullName, status, payment_type as paymentType, order_date as orderDate
      from user_order;`,
    );
    res.render("orders", { pageName: "Orders", orders: orders });
  } catch (error) {
    console.log(`Error: ${error}`);
    res.render("server-error");
  }
});

router.get("/order-details", async (req, res) => {
  const orderId = Number(req.query.id);
  if (Number.isInteger(orderId) && orderId > 0) {
    const [orderDetails] = await dbConnection.query(`
    select
    uo.full_name as fullName,
    oi.quantity, 
    oi.price, 
    p.id, 
    p.name,
    uo.street,
    uo.zip_code as zipCode,
    uo.city,
    uo.phone,
    uo.payment_type as paymentType,
    uo.status,
    uo.order_date as orderDate
    from user_order as uo
    join order_item as oi on oi.order_id = uo.id
    join product as p on oi.product_id = p.id
    where uo.id = ${orderId};
    `);
    res.render("order-details", { pageName: "Order details" });
  } else {
    res.render("server-error", { title: "Server error" });
  }
});
