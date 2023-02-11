import { ethers } from "ethers";

function validateUserInput(name: string, age: number, ethereumAddress: string) {
  if (name.length > 12) {
    throw Error(`name is too long, maximum length: 12, got: ${name.length}`);
  }

  if (age < 18) {
    throw Error(`must be 18 or older to use this app, got: ${age}`);
  }

  if (!ethers.utils.isAddress(ethereumAddress)) {
    throw Error(
      `expected ethereumAddress to be actual ethereum address, got: ${ethereumAddress}`
    );
  }
}

export default validateUserInput;
