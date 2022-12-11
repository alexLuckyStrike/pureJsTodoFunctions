const checkValue = require("./checkValue");

test("тестовый тест", () => {
  expect(checkValue(12).toBe(true));
});
