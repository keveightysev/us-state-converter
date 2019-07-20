# us-state-converter

The US State Converter package is a module that I made to convert state names to their USPS abbreviations or vice versa. I tried to make it as simple as possible but would any feedback!

## Installation

NPM:

```bash
npm install us-state-converter
```

Yarn:

```bash
yarn add us-state-converter
```

## Usage

Import the package first

```JavaScript
const states = require('us-state-converter')
```

You can get a full list of objects for each US state and territory by calling the function with no parameters

```JavaScript
const listOfStates = states()
console.log(listOfStates)
/* This will return an array of objects for each state including the state name, USPS, ISO, and USCG abbreviations, and the demonym for each state */
```

A single object for an individual state can be retrieved by passing a USPS abbreviation or a full state name

```JavaScript
const wiscObject = states('WI')
console.log(wiscObject)
/*  Will log: {
    name: 'Wisconsin',
    usps: 'WI',
    demonym: 'Wisconsinite',
    iso: 'US-WI',
    altAbbr: [ 'Wis', 'Wisc' ],
    uscg: 'WS'
    }
*/
```

You can get the USPS abbreviation directly by using the `.abbr()` method

```JavaScript
const abbr = states.abbr('Illinois')
console.log(abbr) // <- Logs 'IL'
```

You can do a reverse search using the USPS abbreviation to get the full name of the state, as well, using the `.fullName()` method

```JavaScript
const state = states.fullName('MN')
console.log(state) // <- Logs 'Minnesota'
```

If you need a list of just the 50 states without territories or DC, the `.only50()` method will do that for you

```JavaScript
const fiftyStates = states.only50()
console.log(fiftyStates)
/* This will log the same array of objects as states(), only with the territories and DC removed */
```

Finally, I added a method to find the demonym for any state, for funsies. the method is simply called `.demonym()`

```JavaScript
const cheesehead = states.demonym('Wisconsin')
console.log(cheeshead) // <- Logs 'Wisconsinite', actually 🧀
```

That's it for now! I would love any feedback or ideas on how I can expand this.
