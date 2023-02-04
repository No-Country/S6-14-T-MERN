

const getProducts = async (req, res, next) => {
    try {
      const products = await ProductsApi.getAll();
      console.log(products);
      res.json(products);
    } catch (error) {
      next({
        status: 400,
        errorContent: error,
        message: "Algo salio mal",
      });
    }
  };

  const getOneProduct = async (req, res, next) => {
    try {
      const data = await ProductsApi.findOne(req.params.id);
      res.json(data);
    } catch (error) {
      next({
        status: 400,
        errorContent: error,
        message: "Faltan datos",
      });
    }
  };

export {
    getProducts,
    getOneProduct
}