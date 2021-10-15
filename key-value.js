#! /usr/bin/env node

import * as func from "./func.js";
import * as readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("> ", function(key, value) {
  func.storage.put(key, value)
  console.log(`ok`);
  console.log(func.storage);
});