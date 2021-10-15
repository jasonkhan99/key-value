#! /usr/bin/env node

import * as func from "./func.js";
import * as readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() { rl.question("> ", function(input) {
  let inputFilter = input.split(" ").filter(c => c).join(" ");
  if (inputFilter.substring(0, 3).toLowerCase() === "put") {
    func.storage.put(inputFilter.split(" ")[1], inputFilter.split(" ")[2]);
    console.log(`ok`);
  }
  if (inputFilter.substring(0, 5).toLowerCase() === "fetch") {
    console.log(func.storage[inputFilter.split(" ")[1]]);
  }
  main();
})};

main();