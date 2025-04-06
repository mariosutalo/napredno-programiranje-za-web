import express from 'express'
const router = express.Router()

// Define user routes
    // Get all products
router.get("/", async (req, res) => {
    const db = req.app.locals.db
    const productName = req.query.product_name ?? ''
    try {
      console.log('product name is:', productName)
        const [result, fields] = await db.query(`select * from products where name like "${productName}%";`)
        res.json(result)
    } catch (error) {
        res.json('error')
    }
  });
  
  // Get a product by ID
  router.get("/productDetails", async (req, res) => {
    const productId = parseInt(req.query.id)
    const db = req.app.locals.db
    if (isNaN(productId)) {
      return res.status(404).json({message: 'Product not found'})
    }
    const getProductDetailsQuery =`select * from products where id=?`
    try {
      const [result, fields] = await db.execute(getProductDetailsQuery, [productId])
        res.json(result[0])
    } catch (error) {
      console.log(error)
      res.status(500).json('product not found')
    }
  });
  
  // Create a new user
  router.post("/", (req, res) => {
    const newUser = { id: users.length + 1, name: req.body.name };
    users.push(newUser);
    res.status(201).json(newUser);
  });
  
  // Update a user
  router.put("/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
      user.name = req.body.name;
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  });
  
  // Delete a user
  router.delete("/:id", (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.json({ message: "User deleted" });
  });

  export default router
  