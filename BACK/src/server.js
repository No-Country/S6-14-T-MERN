const express = require("express");

//routes
const { productsRouter } = require("./routes/products.routes");

const app = express();

app.use(express.json());

app.use("/api/v1/products", productsRouter);

const PORT = 4000;

app.listen(PORT, () => {
  console.log("Express app running in port", PORT);
});
