#! /usr/bin/env node

import * as readline from 'readline'

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export var storage = {
  put: function (key, value) {
    storage[key] = value;
  }
};

export function inputFilter(input) {
  let filteredInput = input.split(" ").filter(c => c).join(" ");
  return filteredInput;
}

export function putFilter(filteredInput) {
  let filteredPut = filteredInput.substring(0, 3).toLowerCase();
  return filteredPut;
}

export function fetchFilter(filteredInput) {
  let filteredFetch = filteredInput.substring(0, 5).toLowerCase();
  return filteredFetch;
}

export function exitFilter(filteredInput) {
  let filteredExit = filteredInput.substring(0, ).toLowerCase();
  return filteredExit;
}

export function main() { rl.question("> ", function(input) {

  let filteredInput = inputFilter(input);
  let filteredPut = putFilter(filteredInput);
  let filteredFetch = fetchFilter(filteredInput);
  let filteredExit = exitFilter(filteredInput);

  if (filteredPut === "put") {

    if (filteredInput.split(" ").length !== 3) {
      console.log("Invalid syntax");
    } else {
    storage.put(filteredInput.split(" ")[1], filteredInput.split(" ")[2]);
    console.log("ok");
    }

  } else if (filteredFetch === "fetch") {
    if (filteredInput.split(" ").length !== 2) {
      console.log("Invalid syntax");
    } else {
      if (typeof storage[filteredInput.split(" ")[1]] === "undefined") {
        console.log("Value not known");
      } else {
        console.log(storage[filteredInput.split(" ")[1]]);
      }
    }

  } else if (filteredExit === "exit") {
    if (filteredInput.length !== 4) {
      console.log("Invalid syntax");
    } else { 
      console.log("Bye!");
      process.exit();
    }

  } else {
    console.log("Unknown command. Known commands are: put, fetch, exit");
  }

  main();
  
})};

main();