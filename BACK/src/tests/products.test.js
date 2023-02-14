const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../server");

require("dotenv").config();

/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

let token = "";
describe("POST /api/auth/login", () => {
  it("should login into an user account", async () => {
    const res = await request(app)
      .post(`/api/v1/auth/login`)
      .send({ email: "jaredmejia4440@gmail.com", password: "pass1234" });

    token = res.body.token;
    expect(res.statusCode).toBe(200);
    expect(res.body.user.email).toBe("jaredmejia4440@gmail.com");
  });
});

let id = 0;
describe("POST /api/v1/products", () => {
  it("should create a product", async () => {
    const res = await request(app)
      .post("/api/v1/products")
      .auth(token, { type: "bearer" })
      .attach("productImg", `${__dirname}/testImage.png`)
      .field("name", "Product")
      .field("price", 18.52)
      .field("shortDescription", "short description")
      .field("largeDescription", "large description example")
      .field("type", "shirt")
      .field("category", "63e471d4e3c2cc26f2250325");

    id = res.body.data.newProduct._id;
    expect(res.statusCode).toBe(201);
    expect(res.body.data.newProduct.name).toBe("Product");
    expect(res.body.data.newProduct.price).toBe(18.52);
    expect(res.body.data.newProduct.shortDescription).toBe("short description");
    expect(res.body.data.newProduct.largeDescription).toBe(
      "large description example"
    );
    expect(res.body.data.newProduct.type).toBe("shirt");
    expect(res.body.data.newProduct.category._id).toBe(
      "63e471d4e3c2cc26f2250325"
    );
  }, 3000);
});

describe("GET /api/v1/products/all", () => {
  it("should return all products", async () => {
    const res = await request(app).get("/api/v1/products/all");
    expect(res.statusCode).toBe(200);
    expect(res.body.data.products.length).toBeGreaterThan(0);
  });
});

describe("PATCH /api/v1/products/all", () => {
  it("should update a product", async () => {
    const res = await request(app)
      .patch(`/api/v1/products/${id}`)
      .auth(token, { type: "bearer" })
      .send({
        price: 10,
        shortDescription: "updated description",
        largeDescription: "new and updated largeDescription",
        type: "socks",
      });
    const updatedProduct = res.body.data.updatedProduct;
    expect(res.statusCode).toBe(200);
    expect(updatedProduct._id).toBe(id);
    expect(updatedProduct.price).toBe(10);
    expect(updatedProduct.shortDescription).toBe("updated description");
    expect(updatedProduct.largeDescription).toBe(
      "new and updated largeDescription"
    );
    expect(updatedProduct.type).toBe("socks");
  });
});

describe("GET /api/v1/products?searchProduct=product", () => {
  it("should return all products that has the name product", async () => {
    const res = await request(app).get(
      "/api/v1/products?searchProduct=product"
    );
    expect(res.statusCode).toBe(200);
    expect(res.body.data.productByName.length).toBeGreaterThan(0);

    res.body.data.productByName.forEach((product) => {
      const name = product.name.toLowerCase();
      const includes = name.includes("product");
      expect(includes).toBe(true);
    });
  });
});

describe("GET /api/products/:id", () => {
  it("should return a product", async () => {
    const res = await request(app).get(`/api/v1/products/${id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.data.product._id).toBe(id);
  });
});

describe("DELETE /api/products/:id", () => {
  it("should delete a product", async () => {
    const res = await request(app)
      .delete(`/api/v1/products/${id}`)
      .auth(token, { type: "bearer" });
    expect(res.statusCode).toBe(204);
  });
});
