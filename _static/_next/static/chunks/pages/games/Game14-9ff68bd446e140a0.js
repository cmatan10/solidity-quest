(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[663],{62610:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/Game14",function(){return n(81272)}])},81272:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(85893),o=n(67294),s=n(45281),a=n(84283),l=n(53637),c=n(39886),i=n(54610),d=n(84082),_=n(49816),u=n(89163),p=n(87261),f=n(74855),y=n(44173),b=n(96941),h=JSON.parse('[{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"SomeContracts","outputs":[{"internalType":"contract SomeContract","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_salt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bytecode","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"},{"internalType":"uint256","name":"_sal","type":"uint256"},{"internalType":"bytes","name":"_bytecode","type":"bytes"}],"name":"checkAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"correctPrediction","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_add","type":"address"}],"name":"deploy","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),m=n(46050);n(71399);var x=()=>{let[e,t]=(0,o.useState)(""),[n,x]=(0,o.useState)(""),[g,j]=(0,o.useState)(""),[v,w]=(0,o.useState)(!1),k=(0,o.useRef)(null),{walletAddress:C,factoryContract:O,nftContract:S,web3:N}=(0,o.useContext)(m.S),[Z,P]=(0,o.useState)(null),[T,M]=(0,o.useState)(!1),[A,I]=(0,o.useState)(null),[E,R]=(0,o.useState)(null),[z,H]=(0,o.useState)(null),[D,F]=(0,o.useState)(""),[G,B]=(0,o.useState)(""),[L,V]=(0,o.useState)(""),[X,Y]=(0,o.useState)("");(0,o.useEffect)(()=>{N&&N.utils.isAddress(n)&&P(new N.eth.Contract(h,n))},[n,N]),(0,o.useEffect)(()=>{let e=async()=>{if(!C||!S)return;let e=await S.methods.balanceOf(C,14).call();j(e),console.log(g)};e()},[C,S,g]);let q=async()=>{try{w(!0);let e=await O.methods.deploy(14).send({from:C}),t=e.events.DeployInstance;t?(x(t.returnValues.Instance),y.Am.success("Game created successfully!")):y.Am.error("Game creation failed."),w(!1)}catch(e){w(!1),console.log(e),y.Am.error("Game creation failed. \n      Please make sure:\n-That your Metamask wallet is properly connected.")}},J=async e=>{if(Z)try{await Z.methods.deploy(e).send({from:C}).then(async()=>{if(console.log("The Mission Is Complete"),(0,y.Am)("Well done! You have solved this level!",{autoClose:5e3}),g<1)try{await S.methods.mint(14,n).send({from:C}).once("error",e=>{console.log(e),y.Am.error("Minting failed.")}).once("receipt",async()=>{let e=await S.methods.balanceOf(C,14).call();j(e),console.log(e),y.Am.success("Minting completed successfully!")})}catch(e){console.error(e.message),y.Am.error("Minting failed.")}})}catch(e){console.error(e.message),y.Am.error("Transaction failed.")}},W=async()=>{let e=await Z.methods.correctPrediction().call();I(e),console.log(e)},K=async()=>{let e=Number(await Z.methods._salt().call());R(e),console.log(e)},Q=async()=>{let e=await Z.methods.bytecode().call();H(e),console.log(e)},U=async(e,t,n)=>{if(Z)try{let r=await Z.methods.checkAddress(e,Number(t),n).call();console.log(r),Y(r)}catch(e){console.error(e.message)}},$='\n\n  // SPDX-License-Identifier: MIT\n\n  pragma solidity ^0.8.10;\n  \n  contract Factory {\n      SomeContract[] public SomeContracts;\n  \n      bool public correctPrediction;\n  \n      uint256 public _salt = 1;\n  \n      bytes public byte1 = type(SomeContract).creationCode;\n  \n      function checkAddress(address _addr, uint256 _sal, bytes memory _bytecode)\n          external\n          pure\n          returns (address)\n      {\n          bytes32 result = keccak256(\n              abi.encodePacked(\n                  bytes1(0xff),\n                  address(_addr),\n                  _sal,\n                  keccak256(_bytecode)\n              )\n          );\n          return address(uint160(uint256(result)));\n      }\n  \n      function deploy(address _add) external{\n            require(_add != address(0), "Address must not be null");\n            bytes32 salt = bytes32(_salt);\n            SomeContract someContract = (new SomeContract){salt: salt}();\n            SomeContracts.push(someContract);\n            if (address(SomeContracts[0]) == _add){\n            correctPrediction = true;\n            }\n            require(correctPrediction,"not correct");\n        }\n  }\n  ';return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.Z,{className:"bg-primary-black overflow-hidden",children:[(0,r.jsx)(b.wp,{}),(0,r.jsx)("h1",{className:"game-title title-color",children:(0,r.jsx)("b",{children:"Contract Factory"})}),(0,r.jsx)(c.Z,{className:"card",style:{backgroundColor:"#000000",color:"white"},children:(0,r.jsx)(i.Z,{children:(0,r.jsxs)("div",{className:"code-section",children:[(0,r.jsx)(s.Z,{language:"",style:a.Vg,ref:k,children:"\n\n  // SPDX-License-Identifier: MIT\n\n  pragma solidity ^0.8.10;\n  \n  contract SomeContract {\n    /*\n          ~~~~                                       ~~~~\n      ~~                                           ~~\n        ~~                                           ~~\n      ~~                                            ~~\n        ~~                                           ~~\n      ________                                     _______\n     /  |   | \\                                  / |   | \\\n    / __|___|__\\                                /__|___|__\\\n   / ||_|___|_||\\                              /||_|___|_||\\\n  /              \\                            /             \\\n /                \\                          /               \\\n/__________________\\ ______________________ /_________________\\\n|   ____________    ||   ____    ____     ||   ____________    |\n|  |            |   ||  |    |  |    |    ||  |            |   |\n|  |____________|   ||  |____|  |____|    ||  |____________|   |\n|                   ||                    ||                   |\n|   _____________   ||   _____________    ||   _____________   |\n|  |             |  ||  |             |   ||  |             |  |\n|  |   _     _   |  ||  |   _     _   |   ||  |   _     _   |  |\n|  |  | |   | |  |  ||  |  | |   | |  |   ||  |  | |   | |  |  |\n|__|__| |___| |__|__||__|__| |___| |__|___||__|__| |___| |__|__|\n\n*/\n  }"}),(0,r.jsx)(f.CopyToClipboard,{text:$,children:(0,r.jsx)(d.Z,{className:"button-copy",children:"Copy code"})}),(0,r.jsx)(s.Z,{language:"javascript",style:a.Vg,ref:k,children:$})]})})}),(0,r.jsx)(c.Z,{className:"game-card card-color",style:{backgroundColor:"#000000",color:"white"},children:(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(_.Z,{className:"desc-title title-color",children:(0,r.jsx)("b",{children:"Game Description"})}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"Anticipate contract deployments in Solidity. Calculate and predict with accuracy. "}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsxs)("b",{children:[(0,r.jsx)("strong",{children:" You need:"}),"understand how a smart contract address is calculated and calculate the address where the SomeContract contract will be deployed."]})]}),(0,r.jsx)("div",{children:(0,r.jsx)(d.Z,{style:{backgroundColor:"#c97539",color:"white"},className:"button-margin",onClick:q,children:"Create Instance"})})]})}),!v&&""!==n&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white"},children:(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(_.Z,{className:"desc-title title-color",children:(0,r.jsx)("b",{children:"State Variables & Call Functions"})}),(0,r.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",minHeight:"50px"},children:[(0,r.jsx)(d.Z,{style:{backgroundColor:"#355f7d",color:"white"},className:"mt-1",onClick:()=>W(),children:"CorrectPrediction"}),null!==A&&(0,r.jsx)("p",{style:{marginLeft:"10px"},children:A?"True":"False"})]}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",minHeight:"50px"},children:[(0,r.jsx)(d.Z,{style:{backgroundColor:"#355f7d",color:"white"},className:"mt-1",onClick:()=>K(),children:"Salt"}),""!==E&&(0,r.jsx)("p",{style:{marginLeft:"10px"},children:E})]}),(0,r.jsx)("br",{}),(0,r.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",minHeight:"50px"},children:[(0,r.jsx)(d.Z,{style:{backgroundColor:"#355f7d",color:"white"},className:"mt-1",onClick:()=>Q(),children:"bytecode"}),null!==z&&(0,r.jsxs)("p",{style:{wordBreak:"break-all"},children:[" ",JSON.stringify(z)]})]}),(0,r.jsx)("br",{}),(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(p.Z,{style:{color:"black"},className:"form-control-alternative",id:"input-city",placeholder:"_addr",type:"text",onChange:e=>F(e.target.value)}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(p.Z,{style:{color:"black"},className:"form-control-alternative",id:"input-city",placeholder:"_sal",type:"text",onChange:e=>B(e.target.value)}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(p.Z,{style:{color:"black"},className:"form-control-alternative",id:"input-city",placeholder:"_bytecode",type:"text",onChange:e=>V(e.target.value)}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]}),(0,r.jsx)(d.Z,{style:{backgroundColor:"#355f7d",color:"white"},className:"mt-1",onClick:()=>U(D,G,L),children:"checkAddress"}),""!==X&&(0,r.jsx)("p",{style:{marginLeft:"10px",marginTop:"12px"},children:X}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(d.Z,{style:{backgroundColor:"#355f7d",color:"white"},className:"mt-1",onClick:()=>{M(!T)},children:T?"Hide Hint":"Show Hint"}),T&&(0,r.jsx)(c.Z,{className:"card",style:{backgroundColor:"#000000",color:"white"},children:(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(_.Z,{className:"desc-title title-color",children:(0,r.jsx)("b",{children:"Hint"})}),(0,r.jsx)("p",{children:"calc the deployed address: keccak256(abi.encodePacked(bytes1(0xff), address(this), salt, keccak256(bytecode))) ."})]})})]})}),(0,r.jsx)(c.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white"},children:(0,r.jsxs)(i.Z,{children:[(0,r.jsx)("h3",{className:"desc-title title-color",children:(0,r.jsx)("b",{children:"Your Test Address:"})}),(0,r.jsxs)("p",{style:{wordBreak:"break-all"},className:"Instance-color",children:[" ",n," "]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(u.Z,{children:(0,r.jsx)(p.Z,{style:{color:"black"},className:"form-control-alternative",id:"input-city",placeholder:"_add",type:"text",onChange:e=>t(e.target.value)})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(d.Z,{style:{backgroundColor:"#c97539",color:"white"},className:"mt-1",onClick:()=>J(e),children:"deploy"})]})})]}),(0,r.jsx)("p",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:g<1?null:(0,r.jsxs)("div",{children:[(0,r.jsxs)("strong",{children:["Congratulations! You Got A Badge"," ",(0,r.jsx)("i",{className:"fas fa-medal",style:{color:"gold",fontSize:"20px",position:"relative",top:"3px"}})]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]})})]}),(0,r.jsx)(y.Ix,{})]})}},89163:function(e,t,n){"use strict";var r=n(67294),o=n(45697),s=n.n(o),a=n(93967),l=n.n(a),c=n(22040),i=["className","cssModule","row","disabled","check","inline","floating","noMargin","tag","switch"];function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var _={children:s().node,row:s().bool,check:s().bool,switch:s().bool,inline:s().bool,floating:s().bool,noMargin:s().bool,disabled:s().bool,tag:c.iC,className:s().string,cssModule:s().object};function u(e){var t=e.className,n=e.cssModule,o=e.row,s=e.disabled,a=e.check,_=e.inline,u=e.floating,p=e.noMargin,f=e.tag,y=void 0===f?"div":f,b=e.switch,h=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,i),m=a||b,x=(0,c.mx)(l()(t,!!o&&"row",!!m&&"form-check",!!b&&"form-switch",!m&&!p&&"mb-3",!!m&&!!_&&"form-check-inline",!!m&&!!s&&"disabled",u&&"form-floating"),n);return"fieldset"===y&&(h.disabled=s),r.createElement(y,d({},h,{className:x}))}u.propTypes=_,t.Z=u},87261:function(e,t,n){"use strict";var r=n(67294),o=n(45697),s=n.n(o),a=n(93967),l=n.n(a),c=n(22040);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var d=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"];function _(){return(_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b={children:s().node,type:s().string,size:s().oneOfType([s().number,s().string]),bsSize:s().string,valid:s().bool,invalid:s().bool,tag:c.iC,innerRef:s().oneOfType([s().object,s().func,s().string]),plaintext:s().bool,addon:s().bool,className:s().string,cssModule:s().object},h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(a,e);var t,n,o,s=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=y(a);if(t){var r=y(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return function(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return f(e)}(this,e)});function a(e){var t;return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,a),(t=s.call(this,e)).getRef=t.getRef.bind(f(t)),t.focus=t.focus.bind(f(t)),t}return n=[{key:"getRef",value:function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e}},{key:"focus",value:function(){this.ref&&this.ref.focus()}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.cssModule,o=e.type,s=void 0===o?"text":o,a=e.bsSize,i=e.valid,u=e.invalid,p=e.tag,f=e.addon,y=e.plaintext,b=e.innerRef,h=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,d),m=["switch","radio","checkbox"].indexOf(s)>-1,x="textarea"===s,g="select"===s,j="range"===s,v=p||(g||x?s:"input"),w="form-control";y?(w="".concat(w,"-plaintext"),v=p||"input"):j?w="form-range":g?w="form-select":m&&(w=f?null:"form-check-input"),h.size&&/\D/g.test(h.size)&&((0,c.O4)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),a=h.size,delete h.size);var k=(0,c.mx)(l()(t,u&&"is-invalid",i&&"is-valid",!!a&&(g?"form-select-".concat(a):"form-control-".concat(a)),w),n);return("input"===v||p&&"function"==typeof p)&&(h.type="switch"===s?"checkbox":s),h.children&&!(y||"select"===s||"string"!=typeof v||"select"===v)&&((0,c.O4)('Input with a type of "'.concat(s,'" cannot have children. Please use "value"/"defaultValue" instead.')),delete h.children),r.createElement(v,_({},h,{ref:b,className:k,"aria-invalid":u}))}}],u(a.prototype,n),o&&u(a,o),Object.defineProperty(a,"prototype",{writable:!1}),a}(r.Component);h.propTypes=b,t.Z=h}},function(e){e.O(0,[817,839,941,774,888,179],function(){return e(e.s=62610)}),_N_E=e.O()}]);