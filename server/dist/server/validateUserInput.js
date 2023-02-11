"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
function validateUserInput(name, age, ethereumAddress) {
    if (name.length > 12) {
        throw Error(`name is too long, maximum length: 12, got: ${name.length}`);
    }
    if (age < 18) {
        throw Error(`must be 18 or older to use this app, got: ${age}`);
    }
    if (!ethers_1.ethers.utils.isAddress(ethereumAddress)) {
        throw Error(`expected ethereumAddress to be actual ethereum address, got: ${ethereumAddress}`);
    }
}
exports.default = validateUserInput;
