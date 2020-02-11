const assert = require("assert");

class Led {
  color() {
    return "blue";
  }
  status() {
    return "on";
  }
}

let led;
beforeEach(() => {
  led = new Led();
});
describe("Teste do Led", () => {
  it("What is color", () => {
    assert.equal(led.color(), "blue");
  });
  it("The led is on", () => {
    assert.equal(led.status(), "on");
  });
});
