const smoldate = require("../dist/smoldate.umd");

it("should be a valid smoldate object", () => {
  expect(smoldate).toHaveProperty("default");
});
