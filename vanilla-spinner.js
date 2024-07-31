/**
 * A module for Jqgrid_utils
 * @module Vanilla-spinner
 */

'use strict';

module.exports = class Vanilla_spinner
{
/**
Init the Spinner
@alias module:Vanilla-spinner
@param {object} - setting
@returns {object} - spinner object
@example
let s = new Spinner(
    {
	append_to: '#container',
	speed: 18,
	size: 25,
        show: false,
    }
);

s.start();
setTimeout(function () {s.halt();},5000);
*/
   constructor(setting={})
   {
    this.append_to = setting['append_to'] ? setting['append_to'] : 'body' ;
    this.speed     = setting['speed']     ? setting['speed']     : 18 ;
    this.size      = setting['size']      ? setting['size']      : 50 ;
    this.show      = setting['show'] === true  ? 'block'      : 'none' ;
    this.looper = 0;
    this.degrees = 0;
    this.el = 'spinner';
    this.stop = false;
    this.div = document.createElement('div');
    this.div.setAttribute('style', 'width:' + this.size + 'px;height:'+ this.size +'px;background-color:none;display:'+this.show);
    this.div.setAttribute('id', 'spinner');
    this.container = document.querySelector(this.append_to);
    this.container.appendChild(this.div);
    this.render_svg(this.div);

  }


  render_svg(node)
  {
  let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  let c0 = document.createElementNS('http://www.w3.org/2000/svg','rect');
  let c1 = document.createElementNS('http://www.w3.org/2000/svg','rect');
  let c2 = document.createElementNS('http://www.w3.org/2000/svg','rect');
  let c3 = document.createElementNS('http://www.w3.org/2000/svg','rect');
  let c4 = document.createElementNS('http://www.w3.org/2000/svg','rect');
  let c5 = document.createElementNS('http://www.w3.org/2000/svg','rect');
  let c6 = document.createElementNS('http://www.w3.org/2000/svg','rect');
  let c7 = document.createElementNS('http://www.w3.org/2000/svg','rect');


  svg.setAttribute('x', '0px');
  svg.setAttribute('y', '0px');
  svg.setAttribute('id', 'mysvg');
  svg.setAttribute('viewBox', '0 0 512 512');
  svg.setAttribute('style','enable-background:new 0 0 512 512');
  svg.setAttribute('xml:space','preserve');

  c0.setAttribute('x','232');
  c0.setAttribute('y','0');
  c0.setAttribute('style','fill:#7AB9E8');
  c0.setAttribute('width','48');
  c0.setAttribute('height','160');

  c1.setAttribute('x','51.553');
  c1.setAttribute('y','107.545');
  c1.setAttribute('transform','matrix(-0.7071 -0.7071 0.7071 -0.7071 131.5571 317.5824)');
  c1.setAttribute('style','fill:#7AB9E8');
  c1.setAttribute('width','159.998');
  c1.setAttribute('height','48');

  c2.setAttribute('x','0');
  c2.setAttribute('y','232');
  c2.setAttribute('style','fill:#7AB9E8');
  c2.setAttribute('width','160');
  c2.setAttribute('height','48');

  c3.setAttribute('x','107.558');
  c3.setAttribute('y','300.449');
  c3.setAttribute('transform','matrix(-0.7071 -0.7071 0.7071 -0.7071 -44.4344 742.4907)');
  c3.setAttribute('style','fill:#7AB9E8');
  c3.setAttribute('width','48');
  c3.setAttribute('height','159.998');

  c4.setAttribute('x','232');
  c4.setAttribute('y','352');
  c4.setAttribute('style','fill:#579ADF');
  c4.setAttribute('width','48');
  c4.setAttribute('height','160');

  c5.setAttribute('x','300.449');
  c5.setAttribute('y','356.446');
  c5.setAttribute('transform','matrix(-0.7071 -0.7071 0.7071 -0.7071 380.4497 918.4785)');
  c5.setAttribute('style','fill:#579ADF');
  c5.setAttribute('width','159.998');
  c5.setAttribute('height','48');

  c6.setAttribute('x','352');
  c6.setAttribute('y','232');
  c6.setAttribute('style','fill:#579ADF');
  c6.setAttribute('width','160');
  c6.setAttribute('height','48');


  c7.setAttribute('x','356.443');
  c7.setAttribute('y','51.54');
  c7.setAttribute('transform','matrix(-0.7071 -0.7071 0.7071 -0.7071 556.4435 493.5648)');
  c7.setAttribute('style','fill:#579ADF');
  c7.setAttribute('width','48');
  c7.setAttribute('height','159.998');


  svg.appendChild(c0);
  svg.appendChild(c1);
  svg.appendChild(c2);
  svg.appendChild(c3);
  svg.appendChild(c4);
  svg.appendChild(c5);
  svg.appendChild(c6);
  svg.appendChild(c7);

  return node.appendChild(svg);
}

/**
Stop the spinner with the halt function
@alias module:Vanilla-spinner
@returns {null} - null
@example
let s = new Spinner();
s.start();
s.halt();
*/

  halt()
  {
   this.stop = true;
  }


/**
Start the spinner with the start function
@alias module:Vanilla-spinner
@returns {null} - null
@example
let s = new Spinner();
s.start();
*/

  start()
  {
    this.div.style.display = 'block';
    this.stop = false;
    this._start();
  }

  _start()
  {
    this.div.style.display = 'block';
    let that = this;
    let elem = document.getElementById(this.el);
    if(navigator.userAgent.match("Chrome"))
    {
    elem.style.WebkitTransform = "rotate("+this.degrees+"deg)";
  } 
  else if(navigator.userAgent.match("Firefox"))
  {
    elem.style.MozTransform = "rotate("+this.degrees+"deg)";
  } 
  else if(navigator.userAgent.match("MSIE"))
  {
    elem.style.msTransform = "rotate("+this.degrees+"deg)";
  } 
  else if(navigator.userAgent.match("Opera"))
  {
    elem.style.OTransform = "rotate("+this.degrees+"deg)";
  } 
  else 
  {
    elem.style.transform = "rotate("+this.degrees+"deg)";
  }

  if(! this.stop)
  {
    this.looper = setTimeout(function () {
       that._start(that.el,that.speed);
     },that.speed);
  }
  else
  {
   this.div.style.display = 'none';
  }
  this.degrees++;

  if(this.degrees > 359)
  {
    this.degrees = 1;
  }
}

};


