# vanilla-spinner
Pure javascript spinner what creates a simple SVG spinner.

Demo:
  https://w3.calantas.org/vanilla-spinner

  # Example Usage:

  Add a the library to your website

  ```html
  <script src="../node_modules/jqgrid_utils/dist/vanilla-spinner.js"></script>
```


Example Usage:
```javascript
  let spinner = new Vanilla-spinner();
  let spinner.start();
  let spinner.halt();
```

<a name="module_Vanilla-spinner"></a>

## Vanilla-spinner
A module for Jqgrid_utils


* [Vanilla-spinner](#module_Vanilla-spinner)
    * [module.exports](#exp_module_Vanilla-spinner--module.exports) ⏏
    * [module.exports#halt()](#exp_module_Vanilla-spinner--module.exports+halt) ⇒ <code>null</code> ⏏
    * [module.exports#start()](#exp_module_Vanilla-spinner--module.exports+start) ⇒ <code>null</code> ⏏

<a name="exp_module_Vanilla-spinner--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="exp_module_Vanilla-spinner--module.exports+halt"></a>

### module.exports#halt() ⇒ <code>null</code> ⏏
Stop the spinner with the halt function

**Kind**: Exported function  
**Returns**: <code>null</code> - - null  
**Example**  
```js
let s = new Spinner();
s.start();
s.halt();
```
<a name="exp_module_Vanilla-spinner--module.exports+start"></a>

### module.exports#start() ⇒ <code>null</code> ⏏
Start the spinner with the start function

**Kind**: Exported function  
**Returns**: <code>null</code> - - null  
**Example**  
```js
let s = new Spinner();
s.start();
```
