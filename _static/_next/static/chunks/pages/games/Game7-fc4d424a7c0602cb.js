(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[887],{45632:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/Game7",function(){return n(78900)}])},78900:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(85893),o=n(67294),s=n(45281),a=n(84283),i=n(53637),l=n(39886),c=n(54610),u=n(84082),d=n(49816),p=n(87261),f=n(89163),h=n(74855),y=n(44173),b=JSON.parse('[{"inputs":[{"internalType":"uint256","name":"_password","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"PreviousPassword","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_password","type":"uint256"},{"internalType":"uint256","name":"newPassword","type":"uint256"}],"name":"changePassword","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),m=n(46050);n(71399);var g=n(96941),w=()=>{let[e,t]=(0,o.useState)(""),[n,w]=(0,o.useState)(""),[x,j]=(0,o.useState)(""),[v,P]=(0,o.useState)(""),[O,k]=(0,o.useState)(!1),N=(0,o.useRef)(null),{walletAddress:C,factoryContract:S,nftContract:_,web3:Z}=(0,o.useContext)(m.S),[T,M]=(0,o.useState)(null),[E,I]=(0,o.useState)(!1),[R,A]=(0,o.useState)(!1),[z,D]=(0,o.useState)(null);(0,o.useEffect)(()=>{Z&&Z.utils.isAddress(x)&&M(new Z.eth.Contract(b,x))},[x,Z]),(0,o.useEffect)(()=>{let e=async()=>{if(!C||!_)return;let e=await _.methods.balanceOf(C,7).call();P(e),console.log(v)};e()},[C,_,v]);let B=async()=>{try{k(!0);let e=await S.methods.deploy(7).send({from:C}),t=e.events.DeployInstance;t?(j(t.returnValues.Instance),y.Am.success("Game created successfully!")):y.Am.error("Game creation failed."),k(!1)}catch(e){k(!1),console.log(e),y.Am.error("Game creation failed. \n      Please make sure:\n-That your Metamask wallet is properly connected.")}},G=async(e,t)=>{if(isNaN(Number(e))||isNaN(Number(t))){setTimeout(()=>alert("Invalid password!"),0);return}if(T)try{await T.methods.changePassword(e,t).send({from:C}).then(async()=>{if(console.log("The Mission Is Complete"),(0,y.Am)("Well done! You have solved this level!",{autoClose:5e3}),v<1)try{console.log(v),await _.methods.mint(7,x).send({from:C}).once("error",e=>{console.log(e),y.Am.error("Minting failed.")}).once("receipt",async()=>{let e=await _.methods.balanceOf(C,7).call();P(e),console.log(e),y.Am.success("Minting completed successfully!")})}catch(e){console.error(e.message),y.Am.error("Minting failed.")}})}catch(e){console.log(e),y.Am.error("Password change failed.")}},H=async e=>{try{let t=await T.methods.PreviousPassword(e).call();D(t)}catch(e){console.error(e),y.Am.error("Failed to get previous password.")}},F='// SPDX-License-Identifier: MIT\n  pragma solidity ^0.8.10;\n  \n  contract ChangePassword {\n      uint256 private password;\n      uint256[] public PreviousPassword;\n  \n      constructor(uint256 _password) {\n          password = _password;\n      }\n      function changePassword(uint256 _password, uint256 newPassword) external {\n          require(password == _password, "Password Cannot Be Changed!");\n          require(\n              password != newPassword,\n              "The Password Must Be Different From The Previous Password!"\n          );\n          PreviousPassword.push(_password);\n          password = newPassword;\n      }\n  }\n  ';return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.Z,{className:"bg-primary-black overflow-hidden",children:[(0,r.jsx)(g.wp,{}),(0,r.jsx)("h1",{className:"game-title title-color",children:(0,r.jsx)("b",{children:"change Password"})}),(0,r.jsx)(l.Z,{className:"card",style:{backgroundColor:"#000000",color:"white"},children:(0,r.jsx)(c.Z,{children:(0,r.jsxs)("div",{className:"code-section",children:[(0,r.jsx)(h.CopyToClipboard,{text:F,children:(0,r.jsx)(u.Z,{className:"button-copy",children:"Copy code"})}),(0,r.jsx)(s.Z,{language:"javascript",style:a.Vg,ref:N,children:F})]})})}),(0,r.jsx)(l.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white"},children:(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(d.Z,{className:"desc-title title-color",children:(0,r.jsx)("b",{children:"Game Description"})}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"Dive into Solidity's 'private' state variables. Discover and master state variable intricacies."}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsxs)("b",{children:[(0,r.jsx)("strong",{children:" You need:"}),"  To complete this mission, you need to understand Solidity's state variable visibility, especially private variables, and how to potentially expose or access these 'hidden' variables. "]})]}),(0,r.jsx)("div",{children:(0,r.jsx)(u.Z,{style:{backgroundColor:"#c97539",color:"white"},className:"button-margin",onClick:B,children:"Create Instance"})})]})}),!O&&""!==x&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white",minHeight:"150px"},children:(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(d.Z,{className:"desc-title title-color",children:(0,r.jsx)("b",{children:"State Variables"})}),(0,r.jsx)(p.Z,{style:{color:"black"},className:"form-control-alternative",id:"input-city",placeholder:"PreviousPassword Inedx",type:"text",onChange:e=>A(e.target.value)}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,r.jsx)(u.Z,{style:{backgroundColor:"#355f7d",color:"white"},className:"mt-1",onClick:()=>H(R),children:"PreviousPassword"}),null!==z&&(0,r.jsx)("p",{style:{marginLeft:"10px",marginTop:"12px",wordBreak:"break-all"},children:z.toString()})]}),(0,r.jsx)("br",{}),(0,r.jsx)(u.Z,{style:{backgroundColor:"#355f7d",color:"white"},className:"mt-1",onClick:()=>{I(!E)},children:E?"Hide Hint":"Show Hint"}),E&&(0,r.jsx)(l.Z,{className:"card",style:{backgroundColor:"#000000",color:"white"},children:(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(d.Z,{className:"desc-title title-color",children:(0,r.jsx)("b",{children:"Hint"})}),(0,r.jsx)("p",{children:(0,r.jsx)("strong",{children:(0,r.jsx)("a",{style:{textDecoration:"underline"},href:"https://web3js.readthedocs.io/en/v1.2.11/web3-eth.html?highlight=getStorageAt#getstorageat",target:"_blank",rel:"noopener noreferrer",children:" https://web3js.readthedocs.io/en/v1.2.11/web3-eth.html?highlight=getStorageAt#getstorageat"})})})]})})]})}),(0,r.jsx)(l.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white"},children:(0,r.jsxs)(c.Z,{children:[(0,r.jsx)("h3",{className:"desc-title title-color",children:(0,r.jsx)("b",{children:"Your Test Address:"})}),(0,r.jsxs)("p",{style:{wordBreak:"break-all"},className:"Instance-color",children:[" ",x," "]}),(0,r.jsxs)(f.Z,{children:[(0,r.jsx)(p.Z,{style:{color:"black"},className:"form-control-alternative",id:"input-password",placeholder:"_password",type:"text",onChange:e=>t(e.target.value)}),(0,r.jsx)("br",{}),(0,r.jsx)(p.Z,{style:{color:"black"},className:"form-control-alternative",id:"input-newPassword",placeholder:"newPassword",type:"text",onChange:e=>w(e.target.value)})]}),(0,r.jsx)(u.Z,{style:{backgroundColor:"#c97539",color:"white"},className:"mt-1",onClick:()=>G(e,n),children:"changePassword"})]})})]}),(0,r.jsx)("p",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:v<1?null:(0,r.jsxs)("div",{children:[(0,r.jsxs)("strong",{children:["Congratulations! You Got A Badge"," ",(0,r.jsx)("i",{className:"fas fa-medal",style:{color:"gold",fontSize:"20px",position:"relative",top:"3px"}})]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]})})]}),(0,r.jsx)(y.Ix,{})]})}},89163:function(e,t,n){"use strict";var r=n(67294),o=n(45697),s=n.n(o),a=n(93967),i=n.n(a),l=n(22040),c=["className","cssModule","row","disabled","check","inline","floating","noMargin","tag","switch"];function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d={children:s().node,row:s().bool,check:s().bool,switch:s().bool,inline:s().bool,floating:s().bool,noMargin:s().bool,disabled:s().bool,tag:l.iC,className:s().string,cssModule:s().object};function p(e){var t=e.className,n=e.cssModule,o=e.row,s=e.disabled,a=e.check,d=e.inline,p=e.floating,f=e.noMargin,h=e.tag,y=void 0===h?"div":h,b=e.switch,m=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,c),g=a||b,w=(0,l.mx)(i()(t,!!o&&"row",!!g&&"form-check",!!b&&"form-switch",!g&&!f&&"mb-3",!!g&&!!d&&"form-check-inline",!!g&&!!s&&"disabled",p&&"form-floating"),n);return"fieldset"===y&&(m.disabled=s),r.createElement(y,u({},m,{className:w}))}p.propTypes=d,t.Z=p},87261:function(e,t,n){"use strict";var r=n(67294),o=n(45697),s=n.n(o),a=n(93967),i=n.n(a),l=n(22040);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"];function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b={children:s().node,type:s().string,size:s().oneOfType([s().number,s().string]),bsSize:s().string,valid:s().bool,invalid:s().bool,tag:l.iC,innerRef:s().oneOfType([s().object,s().func,s().string]),plaintext:s().bool,addon:s().bool,className:s().string,cssModule:s().object},m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(a,e);var t,n,o,s=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=y(a);if(t){var r=y(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return function(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return h(e)}(this,e)});function a(e){var t;return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,a),(t=s.call(this,e)).getRef=t.getRef.bind(h(t)),t.focus=t.focus.bind(h(t)),t}return n=[{key:"getRef",value:function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e}},{key:"focus",value:function(){this.ref&&this.ref.focus()}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.cssModule,o=e.type,s=void 0===o?"text":o,a=e.bsSize,c=e.valid,p=e.invalid,f=e.tag,h=e.addon,y=e.plaintext,b=e.innerRef,m=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,u),g=["switch","radio","checkbox"].indexOf(s)>-1,w="textarea"===s,x="select"===s,j="range"===s,v=f||(x||w?s:"input"),P="form-control";y?(P="".concat(P,"-plaintext"),v=f||"input"):j?P="form-range":x?P="form-select":g&&(P=h?null:"form-check-input"),m.size&&/\D/g.test(m.size)&&((0,l.O4)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),a=m.size,delete m.size);var O=(0,l.mx)(i()(t,p&&"is-invalid",c&&"is-valid",!!a&&(x?"form-select-".concat(a):"form-control-".concat(a)),P),n);return("input"===v||f&&"function"==typeof f)&&(m.type="switch"===s?"checkbox":s),m.children&&!(y||"select"===s||"string"!=typeof v||"select"===v)&&((0,l.O4)('Input with a type of "'.concat(s,'" cannot have children. Please use "value"/"defaultValue" instead.')),delete m.children),r.createElement(v,d({},m,{ref:b,className:O,"aria-invalid":p}))}}],p(a.prototype,n),o&&p(a,o),Object.defineProperty(a,"prototype",{writable:!1}),a}(r.Component);m.propTypes=b,t.Z=m}},function(e){e.O(0,[817,839,941,774,888,179],function(){return e(e.s=45632)}),_N_E=e.O()}]);