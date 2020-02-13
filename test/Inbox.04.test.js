const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require("../compile");

let accounts;
let inbox;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Meu primeiro contrato"] })
    .send({ from: accounts[0], gas: "1000000" });
});
describe("Inbox 04", () => {
  it("Deploy a contract", () => {
    assert.ok(inbox.options.address);
  });
  it("Mensagem Padrão", async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, "Meu primeiro contrato");
  });
});
