(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[947],{68118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/Game1",function(){return n(429)}])},429:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return J}});var r,o=n(85893),i=n(67294),s=n(45281),a=n(84283),l=n(53637),c=n(39886),u=n(54610),p=n(84082),f=n(49816),d=n(45697),h=n.n(d),b=n(93967),y=n.n(b);function m(e,t){return(m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}var x=n(73935),g={disabled:!1},v=i.createContext(null),j="unmounted",E="exited",O="entering",w="entered",N="exiting",S=function(e){function t(t,n){r=e.call(this,t,n)||this;var r,o,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(o=E,r.appearStatus=O):o=w:o=t.unmountOnExit||t.mountOnEnter?j:E,r.state={status:o},r.nextCallback=null,r}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,m(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===j?{status:E}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==O&&n!==w&&(t=O):(n===O||n===w)&&(t=N)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){if(this.cancelNextCallback(),t===O){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:x.findDOMNode(this);n&&n.scrollTop}this.performEnter(e)}else this.performExit()}else this.props.unmountOnExit&&this.state.status===E&&this.setState({status:j})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[x.findDOMNode(this),r],i=o[0],s=o[1],a=this.getTimeouts(),l=r?a.appear:a.enter;if(!e&&!n||g.disabled){this.safeSetState({status:w},function(){t.props.onEntered(i)});return}this.props.onEnter(i,s),this.safeSetState({status:O},function(){t.props.onEntering(i,s),t.onTransitionEnd(l,function(){t.safeSetState({status:w},function(){t.props.onEntered(i,s)})})})},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:x.findDOMNode(this);if(!t||g.disabled){this.safeSetState({status:E},function(){e.props.onExited(r)});return}this.props.onExit(r),this.safeSetState({status:N},function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:E},function(){e.props.onExited(r)})})})},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:x.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(!n||r){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=o[0],s=o[1];this.props.addEndListener(i,s)}null!=e&&setTimeout(this.nextCallback,e)},n.render=function(){var e=this.state.status;if(e===j)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(o[n]=e[n]);return o}(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.createElement(v.Provider,{value:null},"function"==typeof n?n(e,r):i.cloneElement(i.Children.only(n),r))},t}(i.Component);function k(){}S.contextType=v,S.propTypes={},S.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:k,onEntering:k,onEntered:k,onExit:k,onExiting:k,onExited:k},S.UNMOUNTED=j,S.EXITED=E,S.ENTERING=O,S.ENTERED=w,S.EXITING=N;var C=n(22040);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var T=["tag","horizontal","isOpen","className","navbar","cssModule","children","innerRef"];function R(){return(R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t){return(M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function D(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach(function(t){A(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=z(z({},S.propTypes),{},{horizontal:h().bool,isOpen:h().bool,children:h().oneOfType([h().arrayOf(h().node),h().node]),tag:C.iC,className:h().node,navbar:h().bool,cssModule:h().object,innerRef:h().shape({current:h().object})}),G=z(z({},S.defaultProps),{},{horizontal:!1,isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:C.wF.Collapse}),B=(A(r={},C.E5.ENTERING,"collapsing"),A(r,C.E5.ENTERED,"collapse show"),A(r,C.E5.EXITING,"collapsing"),A(r,C.E5.EXITED,"collapse"),r),H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&M(e,t)}(s,e);var t,n,r,o=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=Z(s);if(t){var r=Z(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return function(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return D(e)}(this,e)});function s(e){var t;return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,s),(t=o.call(this,e)).state={dimension:null},t.nodeRef=e.innerRef||i.createRef(),["onEntering","onEntered","onExit","onExiting","onExited"].forEach(function(e){t[e]=t[e].bind(D(t))}),t}return n=[{key:"onEntering",value:function(e,t){var n=this.getNode();this.setState({dimension:this.getDimension(n)}),this.props.onEntering(n,t)}},{key:"onEntered",value:function(e,t){var n=this.getNode();this.setState({dimension:null}),this.props.onEntered(n,t)}},{key:"onExit",value:function(){var e=this.getNode();this.setState({dimension:this.getDimension(e)}),this.props.onExit(e)}},{key:"onExiting",value:function(){var e=this.getNode();this.getDimension(e),this.setState({dimension:0}),this.props.onExiting(e)}},{key:"onExited",value:function(){var e=this.getNode();this.setState({dimension:null}),this.props.onExited(e)}},{key:"getNode",value:function(){return this.nodeRef.current}},{key:"getDimension",value:function(e){return this.props.horizontal?e.scrollWidth:e.scrollHeight}},{key:"render",value:function(){var e=this,t=this.props,n=t.tag,r=t.horizontal,o=t.isOpen,s=t.className,a=t.navbar,l=t.cssModule,c=t.children,u=(t.innerRef,function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(t,T)),p=this.state.dimension,f=(0,C.ei)(u,C.rb),d=(0,C.CE)(u,C.rb);return i.createElement(S,R({},f,{in:o,nodeRef:this.nodeRef,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),function(t){var o=B[t]||"collapse",u=(0,C.mx)(y()(s,r&&"collapse-horizontal",o,a&&"navbar-collapse"),l),f=null===p?null:A({},r?"width":"height",p);return i.createElement(n,R({},d,{style:z(z({},d.style),f),className:u,ref:e.nodeRef}),c)})}}],_(s.prototype,n),r&&_(s,r),Object.defineProperty(s,"prototype",{writable:!1}),s}(i.Component);H.propTypes=F,H.defaultProps=G;var L=n(89163),X=n(87261),Y=n(74855),U=n(44173),W=JSON.parse('[{"inputs":[{"internalType":"bytes2","name":"_biggerNum","type":"bytes2"}],"name":"increaseNum","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"num","outputs":[{"internalType":"bytes2","name":"","type":"bytes2"}],"stateMutability":"view","type":"function"}]'),V=n(46050);n(71399);var q=n(96941),J=()=>{let[e,t]=(0,i.useState)(""),[n,r]=(0,i.useState)(""),[d,h]=(0,i.useState)(""),[b,y]=(0,i.useState)(!1),m=(0,i.useRef)(null),{walletAddress:x,factoryContract:g,nftContract:v,web3:j}=(0,i.useContext)(V.S),[E,O]=(0,i.useState)(null),[w,N]=(0,i.useState)(!1),[S,k]=(0,i.useState)("");(0,i.useEffect)(()=>{j&&j.utils.isAddress(n)&&O(new j.eth.Contract(W,n))},[n,j]),(0,i.useEffect)(()=>{let e=async()=>{if(!x||!v)return;let e=await v.methods.balanceOf(x,1).call();h(e)};e()},[x,v,d]);let C=async()=>{try{y(!0);let e=await g.methods.deploy(1).send({from:x}),t=e.events.DeployInstance;t?(r(t.returnValues.Instance),U.Am.success("Game created successfully!")):U.Am.error("Game creation failed."),y(!1)}catch(e){y(!1),console.log(e),U.Am.error("Game creation failed. \n      Please make sure:\n-That your Metamask wallet is properly connected.")}},P=async e=>{let t=e.startsWith("0x")?e.slice(2):e;if(!/^([0-9A-Fa-f]{1,4})$/.test(t)){alert("Invalid input! Please provide a valid hexadecimal string (2 bytes)");return}if(E)try{let e=t.padStart(4,"0");await E.methods.increaseNum(j.utils.toHex("0x".concat(e))).send({from:x}).then(async()=>{if(console.log("Transaction sent successfully!"),(0,U.Am)("Well done! You have solved this level!",{autoClose:5e3}),d<1)try{await v.methods.mint(1,n).send({from:x,gas:3e5}).once("error",e=>{console.log(e),U.Am.error("Minting failed.")}).once("receipt",async()=>{let e=await v.methods.balanceOf(x,1).call();h(e),console.log(e),U.Am.success("Minting completed successfully!")})}catch(e){console.error(e.message),U.Am.error("Minting failed.")}})}catch(e){console.error(e.message),U.Am.error("Transaction failed.")}},T=async()=>{let e=await E.methods.num().call();k(e),console.log(e)},R='// SPDX-License-Identifier: MIT\n    pragma solidity ^0.8.10;\n    \n    contract Bytes2 {\n        bytes2 public num = 0;\n    \n        function increaseNum(bytes2 _biggerNum) external {\n            require(_biggerNum != bytes2(0), "biggerNum cannot be zero");\n            num = _biggerNum;\n        }\n    }';return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(l.Z,{className:"bg-primary-black overflow-hidden",children:[(0,o.jsx)(q.wp,{}),(0,o.jsx)("h1",{className:"game-title title-color",children:(0,o.jsx)("b",{children:"Byte2"})}),(0,o.jsx)(c.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white"},children:(0,o.jsx)(u.Z,{children:(0,o.jsxs)("div",{children:[(0,o.jsx)(Y.CopyToClipboard,{text:R,children:(0,o.jsx)(p.Z,{className:"button-copy",children:"Copy code"})}),(0,o.jsx)(s.Z,{language:"javascript",style:a.YC,ref:m,customStyle:{margin:"0"},children:R})]})})}),(0,o.jsx)(c.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white"},children:(0,o.jsxs)(u.Z,{children:[(0,o.jsx)(f.Z,{className:"desc-title title-color",children:(0,o.jsx)("b",{children:"Game Description"})}),(0,o.jsxs)("p",{children:[(0,o.jsx)("b",{children:"Traverse the bytes2 data type in Solidity. Share insights and master byte manipulation. "}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsxs)("b",{children:[(0,o.jsx)("strong",{children:" You need:"}),"   To play this game, you need to understand Solidity's bytes data type, specifically bytes2, and how to use it in a contract function."]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("br",{}),(0,o.jsx)(p.Z,{className:"flex items-center h-fit py-2 px-4 rounded-[12px] gap-[12px]",onClick:C,style:{backgroundColor:"#c97539",color:"white"},children:"Create Instance"})]})]})}),!b&&""!==n&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white"},children:(0,o.jsxs)(u.Z,{children:[(0,o.jsx)(f.Z,{className:"desc-title title-color",children:(0,o.jsx)("b",{children:"State Variables"})}),(0,o.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",minHeight:"50px"},children:[(0,o.jsx)(p.Z,{className:"flex items-center h-fit py-2 px-4 rounded-[12px] gap-[12px]",onClick:()=>T(),style:{backgroundColor:"#355f7d",color:"white"},children:"num"}),""!==S&&(0,o.jsx)("p",{style:{marginLeft:"10px"},children:S})]}),(0,o.jsx)("br",{}),(0,o.jsxs)("div",{children:[(0,o.jsx)(p.Z,{className:"flex items-center h-fit py-2 px-4 rounded-[12px] gap-[12px]",onClick:()=>{N(!w)},style:{backgroundColor:"#355f7d",color:"white"},children:w?"Hide Hint":"Show Hint"}),w&&(0,o.jsx)(H,{isOpen:w,children:(0,o.jsx)(c.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white"},children:(0,o.jsxs)(u.Z,{children:[(0,o.jsx)(f.Z,{className:"desc-title title-color",children:(0,o.jsx)("b",{children:"Hint"})}),(0,o.jsx)("p",{children:"A bytes2 data type is represented by four hexadecimal digits. Each hexadecimal digit represents four binary bits, and since a bytes2 consists of sixteen bits, it requires four hexadecimal digits to represent all possible values. In hexadecimal notation, the values range from 0x0000 to 0xFFFF, where 0x0000 represents the minimum value (0 in decimal) and 0xFFFF represents the maximum value (65535 in decimal)."})]})})})]})]})}),(0,o.jsx)(c.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white"},children:(0,o.jsxs)(u.Z,{children:[(0,o.jsx)("h3",{className:"desc-title title-color",children:(0,o.jsx)("b",{children:"Your Test Address:"})}),(0,o.jsxs)("p",{style:{wordBreak:"break-all"},className:"Instance-color",children:[" ",n," "]}),(0,o.jsx)("br",{}),(0,o.jsx)(L.Z,{children:(0,o.jsx)(X.Z,{style:{color:"black"},className:"form-control-alternative rounded-[12px]",id:"input-city",placeholder:"_biggerNum",type:"text",onChange:e=>t(e.target.value)})}),(0,o.jsx)("br",{}),(0,o.jsx)(p.Z,{style:{backgroundColor:"#c97539",color:"white"},className:"flex items-center h-fit py-2 px-4 rounded-[12px] gap-[12px]",onClick:()=>P(e),children:"increaseNum"})]})})]}),(0,o.jsx)("p",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:d<1?null:(0,o.jsxs)("div",{children:[(0,o.jsxs)("strong",{children:["Congratulations! You Got A Badge"," ",(0,o.jsx)("i",{className:"fas fa-medal",style:{color:"gold",fontSize:"20px",position:"relative",top:"3px"}})]}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{})]})})]}),(0,o.jsx)(U.Ix,{})]})}},89163:function(e,t,n){"use strict";var r=n(67294),o=n(45697),i=n.n(o),s=n(93967),a=n.n(s),l=n(22040),c=["className","cssModule","row","disabled","check","inline","floating","noMargin","tag","switch"];function u(){return(u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p={children:i().node,row:i().bool,check:i().bool,switch:i().bool,inline:i().bool,floating:i().bool,noMargin:i().bool,disabled:i().bool,tag:l.iC,className:i().string,cssModule:i().object};function f(e){var t=e.className,n=e.cssModule,o=e.row,i=e.disabled,s=e.check,p=e.inline,f=e.floating,d=e.noMargin,h=e.tag,b=void 0===h?"div":h,y=e.switch,m=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,c),x=s||y,g=(0,l.mx)(a()(t,!!o&&"row",!!x&&"form-check",!!y&&"form-switch",!x&&!d&&"mb-3",!!x&&!!p&&"form-check-inline",!!x&&!!i&&"disabled",f&&"form-floating"),n);return"fieldset"===b&&(m.disabled=i),r.createElement(b,u({},m,{className:g}))}f.propTypes=p,t.Z=f},87261:function(e,t,n){"use strict";var r=n(67294),o=n(45697),i=n.n(o),s=n(93967),a=n.n(s),l=n(22040);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var u=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"];function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y={children:i().node,type:i().string,size:i().oneOfType([i().number,i().string]),bsSize:i().string,valid:i().bool,invalid:i().bool,tag:l.iC,innerRef:i().oneOfType([i().object,i().func,i().string]),plaintext:i().bool,addon:i().bool,className:i().string,cssModule:i().object},m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(s,e);var t,n,o,i=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=b(s);if(t){var r=b(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return function(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return h(e)}(this,e)});function s(e){var t;return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,s),(t=i.call(this,e)).getRef=t.getRef.bind(h(t)),t.focus=t.focus.bind(h(t)),t}return n=[{key:"getRef",value:function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e}},{key:"focus",value:function(){this.ref&&this.ref.focus()}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.cssModule,o=e.type,i=void 0===o?"text":o,s=e.bsSize,c=e.valid,f=e.invalid,d=e.tag,h=e.addon,b=e.plaintext,y=e.innerRef,m=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,u),x=["switch","radio","checkbox"].indexOf(i)>-1,g="textarea"===i,v="select"===i,j="range"===i,E=d||(v||g?i:"input"),O="form-control";b?(O="".concat(O,"-plaintext"),E=d||"input"):j?O="form-range":v?O="form-select":x&&(O=h?null:"form-check-input"),m.size&&/\D/g.test(m.size)&&((0,l.O4)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=m.size,delete m.size);var w=(0,l.mx)(a()(t,f&&"is-invalid",c&&"is-valid",!!s&&(v?"form-select-".concat(s):"form-control-".concat(s)),O),n);return("input"===E||d&&"function"==typeof d)&&(m.type="switch"===i?"checkbox":i),m.children&&!(b||"select"===i||"string"!=typeof E||"select"===E)&&((0,l.O4)('Input with a type of "'.concat(i,'" cannot have children. Please use "value"/"defaultValue" instead.')),delete m.children),r.createElement(E,p({},m,{ref:y,className:w,"aria-invalid":f}))}}],f(s.prototype,n),o&&f(s,o),Object.defineProperty(s,"prototype",{writable:!1}),s}(r.Component);m.propTypes=y,t.Z=m}},function(e){e.O(0,[817,839,941,774,888,179],function(){return e(e.s=68118)}),_N_E=e.O()}]);