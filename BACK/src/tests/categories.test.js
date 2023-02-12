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

let id = 0;
describe("POST /api/v1/categories/", () => {
  it("should create a category", async () => {
    const res = await request(app)
      .post("/api/v1/categories/")
      .send({ name: "shorts" });
    expect(res.statusCode).toBe(201);
    const data = res.body.data.newCategory;
    id = data._id;
    expect(data.name).toBe("shorts");
  });
});

describe("GET /api/v1/categories/", () => {
  it("should return all categories", async () => {
    const res = await request(app).get("/api/v1/categories/");
    expect(res.statusCode).toBe(200);
    expect(res.body.data.categories.length).toBeGreaterThan(0);
  });
});

describe("GET /api/v1/categories/:id", () => {
  it("should return a category", async () => {
    const res = await request(app).get(`/api/v1/categories/${id}`);
    expect(res.statusCode).toBe(200);
    const data = res.body.data.category;
    expect(data._id).toBe(id);
    expect(data.name).toBe("shorts");
  });
});

describe("PATCH /api/v1/categories/:id", () => {
  it("should update a category", async () => {
    const res = await await request(app)
      .patch(`/api/v1/categories/${id}`)
      .send({ name: "shorts updated" });
    expect(res.statusCode).toBe(200);
    const data = res.body.data.category;
    expect(data._id).toBe(id);
    expect(data.name).toBe("shorts updated");
  });
});

describe("DELETE /api/v1/categories/:id", () => {
  it("should delete a category", async () => {
    const res = await request(app).delete(`/api/v1/categories/${id}`);
    expect(res.statusCode).toBe(204);
  });
});
