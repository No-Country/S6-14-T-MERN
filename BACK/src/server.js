import express from 'express'
import products from './routes/products.js'

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(products)

app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`)
});

export default app
