# _Store and Fetch_

#### _A command line tool that stores and fetches key-value pairs_

#### By _**Jason Khan**_

## Description

_This command line tool will store and fetch values given a key and value which are both strings._

### Specs
| Spec | Input | Output |
| :----- | :------ | :------ |
| The tool will run from the command line by typing key-value | key-value | display command prompt |
| The tool will accept a put command that stores a key and a value | "put favorite_color purple" | favorite-color: purple |
| The tool will overwrite the previous value if the key already exists | "put favorite_color green" | favorite_color: green |
| The tool will output a message for any succsessful put  | "put favorite_color green" | "ok" |
| The tool will accept a fetch command that returns the associated value given a key  | "fetch favorite_color" | "green" |
| The tool will output a message if no key is found  | "fetch second_favorite_color" | "Value not found" |
| The tool will accept an exit command and display a message  | exit | "Bye!" , tool closes |
| The tool will display a message if any other command is entered  | switch | "Unknown command. Known commands are: put, fetch, exit" |
| The tool will display a message if a command has incorrect arguments | put favorite_color purple green | "Invalid syntax" |

## Setup/Installation Requirements

* _Visit the following link: https://github.com/jasonkhan99/key-value_
* _Clone the repository to your desired directory._
* _Type `npm install`, then `key-value` into the terminal._
## Known Bugs

_No Known Bugs_

## Support and contact details

_https://github.com/jasonkhan99_

## Technologies Used

Javascript,
Node.js,
Markdown,
Jest,
Babel,

### License

*ISC license distribution*

Copyright (c) 2021 **_Jason Khan_**
