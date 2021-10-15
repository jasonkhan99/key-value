#! /usr/bin/env node

import * as func from "./func.js";
import * as readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() { rl.question("> ", function(input) {
  let inputFilter = input.split(" ").filter(c => c).join(" ");
  if (inputFilter.substring(0, 4).toLowerCase() === "put ") {
    func.storage.put(inputFilter.split(" ")[1], inputFilter.split(" ")[2]);
    console.log("ok");
  } else if (inputFilter.substring(0, 6).toLowerCase() === "fetch ") {
    console.log(func.storage[inputFilter.split(" ")[1]]);
  } else if (inputFilter.substring(0, 5).toLowerCase() === "exit ") {
    console.log("Bye!");
    process.exit();
  } else {
    console.log("Unknown command. Known commands are: put, fetch, exit");
  }
  main();
})};

main();