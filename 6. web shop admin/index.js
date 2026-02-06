import express from 'express'

const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', { pageName: 'Products' })
})
app.get('/orders', (req, res) => {
    res.render('orders', { pageName: 'Orders' })
})
app.get('/users', (req, res) => {
    res.render('users', { pageName: 'Users' })
})

app.listen(3001)
