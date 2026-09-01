# AGENTS.md — vanilla-spinner

## What this is
A pure JavaScript module that creates a simple SVG loading spinner. Zero dependencies, lightweight.

## Stack
- Vanilla JavaScript (ES module)
- npm package

## Build
```bash
npm install
```

## Run
```javascript
import VanillaSpinner from 'vanilla-spinner';
let spinner = new VanillaSpinner();
spinner.start();
// ... do work ...
spinner.halt();
```

## Structure
- `vanilla-spinner.js` — main module
- `package.json` — npm metadata

## Conventions
- No comments in code unless asked.
- Verify: `node -c vanilla-spinner.js`
