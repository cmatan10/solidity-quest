(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[527],{73352:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/Game15",function(){return n(40785)}])},40785:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(85893),o=n(67294),s=n(45281),l=n(84283),c=n(53637),i=n(39886),a=n(54610),u=n(84082),d=n(49816),f=n(89163),p=n(87261),h=n(74855),y=n(44173),b=n(96941),m=JSON.parse('[{"inputs":[{"internalType":"bytes4","name":"id","type":"bytes4"}],"name":"calculateXOR","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"selector1","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"selector2","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"view","type":"function"}]'),x=n(46050);n(71399);var g=()=>{let[e,t]=(0,o.useState)(""),[n,g]=(0,o.useState)(""),[j,v]=(0,o.useState)(""),[w,O]=(0,o.useState)(!1),k=(0,o.useRef)(null),{walletAddress:C,factoryContract:N,nftContract:S,web3:Z}=(0,o.useContext)(x.S),[R,_]=(0,o.useState)(null),[I,P]=(0,o.useState)(!1),[T,M]=(0,o.useState)(null),[E,z]=(0,o.useState)(null),[A,X]=(0,o.useState)(null);(0,o.useEffect)(()=>{Z&&Z.utils.isAddress(n)&&_(new Z.eth.Contract(m,n))},[n,Z]),(0,o.useEffect)(()=>{let e=async()=>{if(!C||!S)return;let e=await S.methods.balanceOf(C,15).call();v(e),console.log(j)};e()},[C,S,j]);let D=async()=>{try{O(!0);let e=await N.methods.deploy(15).send({from:C}),t=e.events.DeployInstance;t?(g(t.returnValues.Instance),y.Am.success("Game created successfully!")):y.Am.error("Game creation failed."),O(!1)}catch(e){O(!1),console.log(e),y.Am.error("Game creation failed. \n      Please make sure:\n-That your Metamask wallet is properly connected.")}},H=async e=>{if(R)try{await R.methods.calculateXOR(e).send({from:C,gas:7e5}).then(async()=>{if(console.log("The Mission Is Complete"),(0,y.Am)("Well done! You have solved this level!",{autoClose:5e3}),j<1)try{await S.methods.mint(15,n).send({from:C}).once("error",e=>{console.log(e),y.Am.error("Minting failed.")}).once("receipt",async()=>{let e=await S.methods.balanceOf(C,15).call();v(e),console.log(e),y.Am.success("Minting completed successfully!")})}catch(e){console.error(e.message),y.Am.error("Minting failed.")}})}catch(e){console.error(e.message),y.Am.error("Transaction failed.")}},F=async()=>{let e=await R.methods.contractInterface().call();M(e),console.log(e)},G=async()=>{let e=await R.methods.selector1().call();z(e),console.log(e)},V=async()=>{let e=await R.methods.selector2().call();X(e),console.log(e)},B='// SPDX-License-Identifier: MIT\n  pragma solidity ^0.8.10;\n  \n  contract SupportInterface {\n  \n      bool public contractInterface;\n  \n      bytes4 public selector1 = bytes4(keccak256("calcFunc1(uint)"));\n      \n      bytes4 public selector2 = bytes4(keccak256("calcFunc2(bool)"));\n      \n      function calcFunc1(uint number) private {\n      }\n  \n      function calcFunc2(bool Boolean) private {\n      }\n  \n      function calculateXOR(bytes4 id) external {\n          bytes4 xorValue = selector1 ^ selector2 ^ bytes4(keccak256("calculateXOR(bytes4)"));\n          require(id == xorValue, "This is not the interface of the contract");\n              contractInterface = true;\n      }\n  }\n  \n  \n  ';return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c.Z,{className:"bg-primary-black overflow-hidden",children:[(0,r.jsx)(b.wp,{}),(0,r.jsx)("h1",{className:"game-title title-color",children:(0,r.jsx)("b",{children:"Contract Factory"})}),(0,r.jsx)(i.Z,{className:"card",style:{backgroundColor:"#000000",color:"white"},children:(0,r.jsx)(a.Z,{children:(0,r.jsxs)("div",{className:"code-section",children:[(0,r.jsx)(h.CopyToClipboard,{text:B,children:(0,r.jsx)(u.Z,{className:"button-copy",children:"Copy code"})}),(0,r.jsx)(s.Z,{language:"javascript",style:l.Vg,ref:k,children:B})]})})}),(0,r.jsx)(i.Z,{className:"game-card card-color",style:{backgroundColor:"#000000",color:"white"},children:(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(d.Z,{className:"desc-title title-color",children:(0,r.jsx)("b",{children:"Game Description"})}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"Dive into Solidity's contract interfaces. Uncover signatures and master their mechanics "}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsxs)("b",{children:[(0,r.jsx)("strong",{children:" You need:"})," Understand the keccak256 hash functions, Bytes4 data type, and XOR operations, which are used to calculate a function's signature."]})]}),(0,r.jsx)("div",{children:(0,r.jsx)(u.Z,{style:{backgroundColor:"#c97539",color:"white"},className:"button-margin",onClick:D,children:"Create Instance"})})]})}),!w&&""!==n&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white"},children:(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(d.Z,{className:"desc-title title-color",children:(0,r.jsx)("b",{children:"State Variables"})}),(0,r.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",minHeight:"50px"},children:[(0,r.jsx)(u.Z,{style:{backgroundColor:"#355f7d",color:"white"},className:"mt-1",onClick:()=>F(),children:"ContractInterface"}),null!==T&&(0,r.jsx)("p",{style:{marginLeft:"10px"},children:T?"True":"False"})]}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",minHeight:"50px"},children:[(0,r.jsx)(u.Z,{style:{backgroundColor:"#355f7d",color:"white"},className:"mt-1",onClick:()=>G(),children:"selector1"}),""!==E&&(0,r.jsx)("p",{style:{marginLeft:"10px"},children:E})]}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",minHeight:"50px"},children:[(0,r.jsx)(u.Z,{style:{backgroundColor:"#355f7d",color:"white"},className:"mt-1",onClick:()=>V(),children:"selector2"}),""!==A&&(0,r.jsx)("p",{style:{marginLeft:"10px"},children:A})]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(u.Z,{style:{backgroundColor:"#355f7d",color:"white"},className:"mt-1",onClick:()=>{P(!I)},children:I?"Hide Hint":"Show Hint"}),I&&(0,r.jsx)(i.Z,{className:"card",style:{backgroundColor:"#000000",color:"white"},children:(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(d.Z,{className:"desc-title title-color",children:(0,r.jsx)("b",{children:"Hint"})}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Calculate the function signatures "})," ",(0,r.jsx)("a",{style:{textDecoration:"underline"},href:"https://emn178.github.io/online-tools/keccak_256.html",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("strong",{children:"Here"})}),".",(0,r.jsx)("br",{}),(0,r.jsx)("strong",{children:(0,r.jsx)("strong",{children:"And"})}),(0,r.jsx)("br",{}),(0,r.jsx)("strong",{children:"Calculate the XOR value of function signatures  "})," ",(0,r.jsx)("a",{style:{textDecoration:"underline"},href:"https://xor.pw/#",target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)("strong",{children:"Here"})}),".",(0,r.jsx)("br",{}),(0,r.jsx)("strong",{children:(0,r.jsx)("strong",{children:"Or"})}),(0,r.jsx)("br",{}),(0,r.jsxs)("strong",{children:["Write a function according to the following interface:",(0,r.jsx)("br",{})," ",(0,r.jsx)("strong",{children:" function calculateXOR() public pure returns(bytes4);"})]})]})]})})]})}),(0,r.jsx)(i.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white"},children:(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)("h3",{className:"mt-1 title-color",children:["Your Test Address: ",(0,r.jsxs)("p",{className:"Instance-color",children:[" ",n," "]})]}),(0,r.jsx)(f.Z,{children:(0,r.jsx)(p.Z,{style:{color:"black"},className:"form-control-alternative",id:"input-city",placeholder:"ID",type:"text",onChange:e=>t(e.target.value)})}),(0,r.jsx)(u.Z,{style:{backgroundColor:"#c97539",color:"white"},className:"mt-1",onClick:()=>H(e),children:"calculateXOR"})]})})]}),(0,r.jsx)("p",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:j<1?null:(0,r.jsxs)("div",{children:[(0,r.jsxs)("strong",{children:["Congratulations! You Got A Badge"," ",(0,r.jsx)("i",{className:"fas fa-medal",style:{color:"gold",fontSize:"20px",position:"relative",top:"3px"}})]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]})})]}),(0,r.jsx)(y.Ix,{})]})}},89163:function(e,t,n){"use strict";var r=n(67294),o=n(45697),s=n.n(o),l=n(93967),c=n.n(l),i=n(22040),a=["className","cssModule","row","disabled","check","inline","floating","noMargin","tag","switch"];function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d={children:s().node,row:s().bool,check:s().bool,switch:s().bool,inline:s().bool,floating:s().bool,noMargin:s().bool,disabled:s().bool,tag:i.iC,className:s().string,cssModule:s().object};function f(e){var t=e.className,n=e.cssModule,o=e.row,s=e.disabled,l=e.check,d=e.inline,f=e.floating,p=e.noMargin,h=e.tag,y=void 0===h?"div":h,b=e.switch,m=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,a),x=l||b,g=(0,i.mx)(c()(t,!!o&&"row",!!x&&"form-check",!!b&&"form-switch",!x&&!p&&"mb-3",!!x&&!!d&&"form-check-inline",!!x&&!!s&&"disabled",f&&"form-floating"),n);return"fieldset"===y&&(m.disabled=s),r.createElement(y,u({},m,{className:g}))}f.propTypes=d,t.Z=f},87261:function(e,t,n){"use strict";var r=n(67294),o=n(45697),s=n.n(o),l=n(93967),c=n.n(l),i=n(22040);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"];function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b={children:s().node,type:s().string,size:s().oneOfType([s().number,s().string]),bsSize:s().string,valid:s().bool,invalid:s().bool,tag:i.iC,innerRef:s().oneOfType([s().object,s().func,s().string]),plaintext:s().bool,addon:s().bool,className:s().string,cssModule:s().object},m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(l,e);var t,n,o,s=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=y(l);if(t){var r=y(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return h(e)}(this,e)});function l(e){var t;return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,l),(t=s.call(this,e)).getRef=t.getRef.bind(h(t)),t.focus=t.focus.bind(h(t)),t}return n=[{key:"getRef",value:function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e}},{key:"focus",value:function(){this.ref&&this.ref.focus()}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.cssModule,o=e.type,s=void 0===o?"text":o,l=e.bsSize,a=e.valid,f=e.invalid,p=e.tag,h=e.addon,y=e.plaintext,b=e.innerRef,m=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,u),x=["switch","radio","checkbox"].indexOf(s)>-1,g="textarea"===s,j="select"===s,v="range"===s,w=p||(j||g?s:"input"),O="form-control";y?(O="".concat(O,"-plaintext"),w=p||"input"):v?O="form-range":j?O="form-select":x&&(O=h?null:"form-check-input"),m.size&&/\D/g.test(m.size)&&((0,i.O4)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=m.size,delete m.size);var k=(0,i.mx)(c()(t,f&&"is-invalid",a&&"is-valid",!!l&&(j?"form-select-".concat(l):"form-control-".concat(l)),O),n);return("input"===w||p&&"function"==typeof p)&&(m.type="switch"===s?"checkbox":s),m.children&&!(y||"select"===s||"string"!=typeof w||"select"===w)&&((0,i.O4)('Input with a type of "'.concat(s,'" cannot have children. Please use "value"/"defaultValue" instead.')),delete m.children),r.createElement(w,d({},m,{ref:b,className:k,"aria-invalid":f}))}}],f(l.prototype,n),o&&f(l,o),Object.defineProperty(l,"prototype",{writable:!1}),l}(r.Component);m.propTypes=b,t.Z=m}},function(e){e.O(0,[817,839,941,774,888,179],function(){return e(e.s=73352)}),_N_E=e.O()}]);