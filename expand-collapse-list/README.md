# Javascript: Accordion
Complete a partially completed JavaScript application. Complete the application as shown below in order to pass all the unit tests.

## Environment 

- Node Version: ^12.18.3
- Default Port: 8000

## Application Demo:
![](https://hrcdn.net/s3_pub/istreet-assets/9U2nOebE-zcVvlcOjysMTg/1084083-vanillajs-accordion-medium.gif)

## Application description

Implement a simple accordion (expand and collapse) behavior for the given layout.

Requirements:

- All titles should always be visible.
- The first item should be in the expanded state by default.
- When an item is in the expanded state, the collapse icon should be visible next to the title (rightmost corner).
- When an item is in the collapsed state, the expand icon should be visible next to the title (rightmost corner).
- Clicking on the expand icon should collapse any expanded item and expand the selected item.
- Clicking on the collapse icon should collapse the description of the item.
- If the "Multiple" checkbox is checked, it should be possible to expand more than one item.
- If "Multiple" is not checked, when a new item is expanded, the current item should collapse then the new item should expand.


All the markup for the question has been added. As a candidate, you have to complete the Javascript file to implement the above-stated features/functionality.

## Project Specifications

**Read Only Files**
- `test/*`
- `src/index.js`
- `src/index.html`
- `app.js`

**Commands**
- run: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```
- install: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```
- test: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```
