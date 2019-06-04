const smoldate = require("../dist/smoldate.umd");

it("should be a valid smoldate object", () => {
  expect(smoldate).not.toHaveProperty("default");
});
