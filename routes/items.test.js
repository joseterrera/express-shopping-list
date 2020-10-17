process.env.NODE_ENV = "test";
// npm packages
const request = require("supertest");
// app imports
const app = require("../app");

let items = require("../fakeDb")

let item = { name: "silly", price:200 }

beforeEach(async () => {
  items.push(item)
});

afterEach(async () => {
  items = []
});


/** GET /items - returns `{items: [item, ...]}` */
describe("GET /items", async function() {
  test('Gets a list of items', async function() {
    const response = await request(app).get('/items');
    const { items } = response.body;
    expect(response.statusCode).toBe(200);
    expect(items).toHaveLength(1);
  });
});


/** GET /items/[name] - return data about one item: `{item: item}` */

describe('GET /items/:name', async function() {
  test('Gets a single test', async function() {
    const response = await request(app).get(`/items/${item.name}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.item).toEqual(item);
  });
  test('Responds with 404 if cannot find item', async function() {
    const response = await request(app).get(`/items/0`);
    expect(response.statusCode).toBe(404);
  });
});



/** POST /items - create item from data; return `{item: item}` */
describe