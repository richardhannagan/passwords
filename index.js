#!/usr/bin/env node
import { program } from 'commander';

import clipboardy from 'clipboardy';

const log = console.log;

import { createPassword } from './utils/createPassword.js';
import { savePassword } from './utils/savePassword.js';

program
  .version('1.0.0')
  .description('password generator')
  .option('-l, --length <number>', 'length of password', '8')
  .option('-s, --save', 'save password to passwords.txt')
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols');

  program.parse();

const {length, save, numbers, symbols} = program.opts();

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols);

// Save to file
if(save) {
    savePassword(generatedPassword)
}

// Copy to clipboard
clipboardy.writeSync(generatedPassword);

// Output generated password
log(generatedPassword);
log('Password copied to clipboard');