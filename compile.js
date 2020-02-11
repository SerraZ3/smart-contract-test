const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
// console.log(inboxPath);

const source = fs.readFileSync(inboxPath, "utf8");

const solCompile = solc.compile(source, 1);
const interface = solCompile.contracts[":Inbox"].interface;
const bytecode = solCompile.contracts[":Inbox"].bytecode;

module.exports = { interface, bytecode };
