(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[506],{8655:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/Game10",function(){return n(50298)}])},50298:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(85893),o=n(67294),s=n(45281),i=n(84283),l=n(53637),c=n(39886),a=n(54610),u=n(84082),d=n(49816),f=n(89163),h=n(87261),p=n(74855),y=n(44173),b=JSON.parse('[{"inputs":[{"internalType":"bytes4","name":"id","type":"bytes4"}],"name":"CalcMe","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"answer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]'),m=n(46050);n(71399);var g=n(96941),x=()=>{let[e,t]=(0,o.useState)(""),[n,x]=(0,o.useState)(""),[j,v]=(0,o.useState)(""),[w,O]=(0,o.useState)(!1),k=(0,o.useRef)(null),{walletAddress:C,factoryContract:N,nftContract:S,web3:M}=(0,o.useContext)(m.S),[Z,P]=(0,o.useState)(null),[_,I]=(0,o.useState)(!1),[T,E]=(0,o.useState)(null);(0,o.useEffect)(()=>{M&&M.utils.isAddress(n)&&P(new M.eth.Contract(b,n))},[n,M]),(0,o.useEffect)(()=>{let e=async()=>{if(!C||!S)return;let e=await S.methods.balanceOf(C,10).call();v(e),console.log(j)};e()},[C,S,j]);let R=async()=>{try{O(!0);let e=await N.methods.deploy(10).send({from:C}),t=e.events.DeployInstance;t?(x(t.returnValues.Instance),y.Am.success("Game created successfully!")):y.Am.error("Game creation failed."),O(!1)}catch(e){O(!1),console.log(e),y.Am.error("Game creation failed. \n      Please make sure:\n-That your Metamask wallet is properly connected.")}},z=async e=>{let t=e.startsWith("0x")?e.slice(2):e;if(!M.utils.isHex(e)&&isNaN(e)||!/^([0-9A-Fa-f]{8})$/.test(t)){alert("Invalid input! Please provide a valid integer or hexadecimal");return}let r=isNaN(e)?e:M.utils.toHex(e);if(Z)try{await Z.methods.CalcMe(r).send({from:C}).then(async()=>{let e=await Z.methods.answer().call();if(!0===e&&(console.log("The Mission Is Complete"),(0,y.Am)("Well done! You have solved this level!",{autoClose:5e3}),j<1))try{await S.methods.mint(10,n).send({from:C}).once("error",e=>{console.log(e),y.Am.error("Minting failed.")}).once("receipt",async()=>{let e=await S.methods.balanceOf(C,10).call();v(e),console.log(e),y.Am.success("Minting completed successfully!")})}catch(e){console.error(e.message),y.Am.error("Minting failed.")}})}catch(e){console.error(e.message),y.Am.error("CalcMe operation failed.")}},A=async()=>{let e=await Z.methods.answer().call();console.log(e),E(e)},D='// SPDX-License-Identifier: MIT\n  pragma solidity ^0.8.10;\n  \n  contract InterfaceId {\n      bool public answer;\n  \n      function CalcMe(bytes4 id) external {\n          require(id == bytes4(keccak256("CalcMe(bytes4)")), "Calc Me Again!");\n          answer = true;\n      }\n  }\n  ';return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.Z,{className:"bg-primary-black overflow-hidden",children:[(0,r.jsx)(g.wp,{}),(0,r.jsx)("h1",{className:"game-title title-color",children:(0,r.jsx)("b",{children:"Interface Id"})}),(0,r.jsx)(c.Z,{className:"card",style:{backgroundColor:"#000000",color:"white"},children:(0,r.jsx)(a.Z,{children:(0,r.jsxs)("div",{className:"code-section",children:[(0,r.jsx)(p.CopyToClipboard,{text:D,children:(0,r.jsx)(u.Z,{className:"button-copy",children:"Copy code"})}),(0,r.jsx)(s.Z,{language:"javascript",style:i.Vg,ref:k,children:D})]})})}),(0,r.jsx)(c.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white"},children:(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(d.Z,{className:"desc-title title-color",children:(0,r.jsx)("b",{children:"Game Description"})}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"Decipher function signatures in Solidity. Compute and match using cryptographic functions."}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsxs)("b",{children:[(0,r.jsx)("strong",{children:" You need:"})," To solve this puzzle, you need to understand function signatures in Solidity, how to compute them using the keccak256 hash function, and how to convert them into the bytes4 type. "]})]}),(0,r.jsx)("div",{children:(0,r.jsx)(u.Z,{style:{backgroundColor:"#c97539",color:"white"},className:"button-margin",onClick:R,children:"Create Instance"})})]})}),!w&&""!==n&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white",minHeight:"150px"},children:(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(d.Z,{className:"desc-title title-color",children:(0,r.jsx)("b",{children:"State Variables"})}),(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(u.Z,{style:{backgroundColor:"#355f7d",color:"white"},className:"mt-1",onClick:()=>A(),children:"answer"}),null!==T&&(0,r.jsx)("p",{style:{marginLeft:"10px"},children:T.toString()})]}),(0,r.jsx)("br",{}),(0,r.jsx)(u.Z,{style:{backgroundColor:"#355f7d",color:"white"},className:"mt-1",onClick:()=>{I(!_)},children:_?"Hide Hint":"Show Hint"}),_&&(0,r.jsx)(c.Z,{className:"card",style:{backgroundColor:"#000000",color:"white"},children:(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(d.Z,{className:"desc-title title-color",children:(0,r.jsx)("b",{children:"Hint"})}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Calculate the function signature "})," ",(0,r.jsx)("a",{style:{textDecoration:"underline"},href:"https://emn178.github.io/online-tools/keccak_256.html",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("strong",{children:"Here"})}),".",(0,r.jsx)("br",{}),(0,r.jsx)("strong",{children:(0,r.jsx)("strong",{children:"Or"})}),(0,r.jsx)("br",{}),(0,r.jsxs)("strong",{children:["Write a function according to the following interface:",(0,r.jsx)("strong",{children:" function Calc() external pure returns (bytes4);"})]})]})]})})]})}),(0,r.jsx)(c.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white"},children:(0,r.jsxs)(a.Z,{children:[(0,r.jsx)("h3",{className:"desc-title title-color",children:(0,r.jsx)("b",{children:"Your Test Address:"})}),(0,r.jsxs)("p",{style:{wordBreak:"break-all"},className:"Instance-color",children:[" ",n," "]}),(0,r.jsx)(f.Z,{children:(0,r.jsx)(h.Z,{style:{color:"black"},className:"form-control-alternative",id:"input-city",placeholder:"ID",type:"text",onChange:e=>t(e.target.value)})}),(0,r.jsx)(u.Z,{style:{backgroundColor:"#c97539",color:"white"},className:"mt-1",onClick:()=>z(e),children:"CalcMe"})]})})]}),(0,r.jsx)("p",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:j<1?null:(0,r.jsxs)("div",{children:[(0,r.jsxs)("strong",{children:["Congratulations! You Got A Badge"," ",(0,r.jsx)("i",{className:"fas fa-medal",style:{color:"gold",fontSize:"20px",position:"relative",top:"3px"}})]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]})})]}),(0,r.jsx)(y.Ix,{})]})}},89163:function(e,t,n){"use strict";var r=n(67294),o=n(45697),s=n.n(o),i=n(93967),l=n.n(i),c=n(22040),a=["className","cssModule","row","disabled","check","inline","floating","noMargin","tag","switch"];function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d={children:s().node,row:s().bool,check:s().bool,switch:s().bool,inline:s().bool,floating:s().bool,noMargin:s().bool,disabled:s().bool,tag:c.iC,className:s().string,cssModule:s().object};function f(e){var t=e.className,n=e.cssModule,o=e.row,s=e.disabled,i=e.check,d=e.inline,f=e.floating,h=e.noMargin,p=e.tag,y=void 0===p?"div":p,b=e.switch,m=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,a),g=i||b,x=(0,c.mx)(l()(t,!!o&&"row",!!g&&"form-check",!!b&&"form-switch",!g&&!h&&"mb-3",!!g&&!!d&&"form-check-inline",!!g&&!!s&&"disabled",f&&"form-floating"),n);return"fieldset"===y&&(m.disabled=s),r.createElement(y,u({},m,{className:x}))}f.propTypes=d,t.Z=f},87261:function(e,t,n){"use strict";var r=n(67294),o=n(45697),s=n.n(o),i=n(93967),l=n.n(i),c=n(22040);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"];function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b={children:s().node,type:s().string,size:s().oneOfType([s().number,s().string]),bsSize:s().string,valid:s().bool,invalid:s().bool,tag:c.iC,innerRef:s().oneOfType([s().object,s().func,s().string]),plaintext:s().bool,addon:s().bool,className:s().string,cssModule:s().object},m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(i,e);var t,n,o,s=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=y(i);if(t){var r=y(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return p(e)}(this,e)});function i(e){var t;return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i),(t=s.call(this,e)).getRef=t.getRef.bind(p(t)),t.focus=t.focus.bind(p(t)),t}return n=[{key:"getRef",value:function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e}},{key:"focus",value:function(){this.ref&&this.ref.focus()}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.cssModule,o=e.type,s=void 0===o?"text":o,i=e.bsSize,a=e.valid,f=e.invalid,h=e.tag,p=e.addon,y=e.plaintext,b=e.innerRef,m=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,u),g=["switch","radio","checkbox"].indexOf(s)>-1,x="textarea"===s,j="select"===s,v="range"===s,w=h||(j||x?s:"input"),O="form-control";y?(O="".concat(O,"-plaintext"),w=h||"input"):v?O="form-range":j?O="form-select":g&&(O=p?null:"form-check-input"),m.size&&/\D/g.test(m.size)&&((0,c.O4)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=m.size,delete m.size);var k=(0,c.mx)(l()(t,f&&"is-invalid",a&&"is-valid",!!i&&(j?"form-select-".concat(i):"form-control-".concat(i)),O),n);return("input"===w||h&&"function"==typeof h)&&(m.type="switch"===s?"checkbox":s),m.children&&!(y||"select"===s||"string"!=typeof w||"select"===w)&&((0,c.O4)('Input with a type of "'.concat(s,'" cannot have children. Please use "value"/"defaultValue" instead.')),delete m.children),r.createElement(w,d({},m,{ref:b,className:k,"aria-invalid":f}))}}],f(i.prototype,n),o&&f(i,o),Object.defineProperty(i,"prototype",{writable:!1}),i}(r.Component);m.propTypes=b,t.Z=m}},function(e){e.O(0,[817,839,941,774,888,179],function(){return e(e.s=8655)}),_N_E=e.O()}]);