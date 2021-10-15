#! /usr/bin/env node

import * as readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("> ", function(key, value) {
      console.log(`ok`);
});