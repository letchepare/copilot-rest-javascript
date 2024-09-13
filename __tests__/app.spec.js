const request = require("supertest");
const app = require("../app");

describe("GET /api/time", () => {
  it("should return the current time", async () => {
    const response = await request(app).get("/api/time");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("time");
    expect(typeof response.body.time).toBe("string");
  });
});

describe("GET /api/hello", () => {
  it("should return Hello World", async () => {
    const response = await request(app).get("/api/hello?key=World");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body.message).toBe("Hello World");
  });

  // no key
  it('should return HTTP 500 code with message "key query parameter is required"', async () => {
    const response = await request(app).get("/api/hello");
    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty("message");
    expect(response.body.message).toBe("key query parameter is required");
  });
});

// test api/vms endpoint
describe("GET /api/vms", () => {
  it("should return a list of VMs", async () => {
    const response = await request(app).get("/api/vms");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      { memory: 8, size: "Standard_D2_v3", vcpu: 2 },
      { memory: 16, size: "Standard_D4_v3", vcpu: 4 },
      { memory: 32, size: "Standard_D8_v3", vcpu: 8 },
      { memory: 64, size: "Standard_D16_v3", vcpu: 16 },
      { memory: 128, size: "Standard_D32_v3", vcpu: 32 },
      { memory: 256, size: "Standard_D64_v3", vcpu: 64 },
    ]);
  });
});
