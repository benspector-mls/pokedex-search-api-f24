# Pokedex

## Setup

Create a new repository and clone it down. CD and then:

```sh
`npm create vite`
# name: app
# Framework: Vanilla
# Variant: JavaScript
```

cd into `app` and `npm i`

Remove the starter code.

## Plan

Before you build anything, draw a wireframe:

![](./pokedex-wireframe.svg)

Then plan out the logic:
* When the page loads:
  * fetch pikachu (make sure to catch any errors)
  * render pikachu data to the screen
  * add an event listener for the form

* When the form is submitted:
  * grab data from the form
  * use that data to fetch a new pokemon (make sure to catch any errors)
  * render that pokemon to the screen

## Separation of Concerns

Rather than writing all of your code in one place, separate your code into three files:
- `src/fetching-helpers.js` - exports functions related to fetching data from specific Web APIs
- `src/dom-helpers.js` - exports functions related to dom manipulation
- `src/main.js` - pulls together functions from helper files and invokes them. Defines event handlers if needed.