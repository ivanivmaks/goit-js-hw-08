var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,r=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,a=u||f||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return a.Date.now()};function p(e,t,n){var o,i,r,u,f,a,c=0,p=!1,b=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,f=setTimeout(T,t),p?g(e):u}function h(e){var n=e-a;return void 0===a||n>=t||n<0||b&&e-c>=r}function T(){var e=d();if(h(e))return w(e);f=setTimeout(T,function(e){var n=t-(e-a);return b?s(n,r-(e-c)):n}(e))}function w(e){return f=void 0,m&&o?g(e):(o=i=void 0,u)}function O(){var e=d(),n=h(e);if(o=arguments,i=this,a=e,n){if(void 0===f)return j(a);if(b)return f=setTimeout(T,t),g(a)}return void 0===f&&(f=setTimeout(T,t)),u}return t=v(t)||0,y(n)&&(p=!!n.leading,r=(b="maxWait"in n)?l(v(n.maxWait)||0,t):r,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=a=i=f=void 0},O.flush=function(){return void 0===f?u:w(d())},O}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(y(e)){var u="function"==typeof e.valueOf?e.valueOf():e;e=y(u)?u+"":u}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var f=o.test(e);return f||i.test(e)?r(e.slice(2),f?2:8):n.test(e)?NaN:+e}const b=document.querySelector(".feedback-form");b.querySelector('input[type="email"]'),b.querySelector('textarea[name="message"]');
//# sourceMappingURL=03-feedback.cea9dbcf.js.map
