(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[837],{10719:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/Game11",function(){return n(84530)}])},83545:function(e,t,n){"use strict";var a=n(85893),s=n(67294),o=n(53637),c=n(39886),r=n(54610),i=n(84082),l=n(49816),d=n(89163),u=n(87261),h=n(45281),m=n(84283),p=n(74855),x=n(44173),g=n(96941);n(71399);var y=n(46050);t.Z=e=>{let{gameData:t,gameFunctions:n}=e,[b,f]=(0,s.useState)({}),[j,w]=(0,s.useState)(""),[k,C]=(0,s.useState)(""),[N,Z]=(0,s.useState)(""),[S,A]=(0,s.useState)(!1),[v,E]=(0,s.useState)(null),[_,B]=(0,s.useState)(null),[T,D]=(0,s.useState)(!1),[I,H]=(0,s.useState)(null),U=(0,s.useRef)(null),{walletAddress:F,factoryContract:G,nftContract:Y,web3:O}=(0,s.useContext)(y.S);(0,s.useEffect)(()=>{O&&O.utils.isAddress(j)&&E(new O.eth.Contract(t.abi,j)),O&&t.abi2&&O.utils.isAddress(k)&&B(new O.eth.Contract(t.abi2,k))},[j,k,O,t.abi,t.abi2]),(0,s.useEffect)(()=>{let e=async()=>{if(F&&Y){let e=await Y.methods.balanceOf(F,t.badgeId).call();Z(e)}};e()},[F,Y,t.badgeId]);let P=(e,t)=>{f({...b,[t]:e.target.value})},M=async()=>{try{A(!0);let e=await G.methods.deploy(t.id).send({from:F}),n=e.events.DeployInstance;n?(w(O.utils.toChecksumAddress("0x".concat(e.logs[0].topics[1].slice(-40)))),t.abi2&&e.logs[1]&&C(O.utils.toChecksumAddress("0x".concat(e.logs[1].topics[1].slice(-40)))),t.showTransactionHash&&H(e.transactionHash),x.Am.success("Game instance(s) created successfully!")):x.Am.error("Game creation failed.")}catch(e){x.Am.error("Game creation failed. Please ensure your wallet is connected."),console.error(e)}finally{A(!1)}},X=(e,n)=>{n(x.Am,v,b,F,Y,t.badgeId,O,_)};return(0,a.jsxs)(o.Z,{className:"bg-primary-black overflow-hidden",style:{paddingBottom:"30px",minHeight:"100vh"},children:[(0,a.jsx)(g.wp,{}),(0,a.jsx)(x.Ix,{}),(0,a.jsx)("h1",{className:"game-title title-color",style:{paddingTop:"20px",paddingBottom:"20px"},children:(0,a.jsx)("b",{children:t.title})}),(0,a.jsx)(c.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white",marginBottom:"20px"},children:(0,a.jsx)(r.Z,{children:(0,a.jsxs)("div",{children:[(0,a.jsx)(p.CopyToClipboard,{text:t.code,children:(0,a.jsx)(i.Z,{className:"button-copy",children:"Copy code"})}),(0,a.jsx)(h.Z,{language:"javascript",style:m.YC,ref:U,customStyle:{margin:"0"},children:t.code})]})})}),t.code1&&(0,a.jsx)(c.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white",marginBottom:"20px"},children:(0,a.jsx)(r.Z,{children:(0,a.jsxs)("div",{children:[(0,a.jsx)(p.CopyToClipboard,{text:t.code1,children:(0,a.jsx)(i.Z,{className:"button-copy",children:"Copy code"})}),(0,a.jsx)(h.Z,{style:m.YC,ref:U,customStyle:{margin:"0"},children:t.code1})]})})}),(0,a.jsx)(c.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white",marginBottom:"20px"},children:(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(l.Z,{className:"desc-title title-color",children:(0,a.jsx)("b",{children:"Game Description"})}),(0,a.jsx)("p",{children:t.description}),(0,a.jsx)("br",{}),(0,a.jsx)(i.Z,{onClick:M,className:"flex h-fit py-2 px-4 bg-[#25618B] rounded-[12px] gap-[6px]",style:{backgroundColor:"#c97539",color:"white"},children:S?"Creating...":"Create Instance"})]})}),j&&!S&&(0,a.jsx)(c.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white",marginBottom:"20px"},children:(0,a.jsxs)(r.Z,{children:[(0,a.jsx)("h3",{className:"desc-title title-color",children:(0,a.jsx)("b",{children:"Your Instance Address:"})}),(0,a.jsx)("p",{style:{wordBreak:"break-all",color:"#c97539"},children:j}),_&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{className:"desc-title title-color",children:(0,a.jsx)("b",{children:"Your Hacking Instance Address:"})}),(0,a.jsx)("p",{style:{wordBreak:"break-all",color:"#c97539"},children:k})]})]})}),j&&!S&&t.hint&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{onClick:()=>D(!T),className:"flex h-fit py-2 px-4 bg-[#25618B] rounded-[12px] gap-[6px]",style:{backgroundColor:"#355f7d",color:"white",marginBottom:"17px",marginLeft:"12px"},children:T?"Hide Hint":"Show Hint"}),T&&(0,a.jsx)(c.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white",marginTop:"10px"},children:(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(l.Z,{className:"desc-title title-color",children:(0,a.jsx)("b",{children:"Hint"})}),(0,a.jsxs)("p",{children:[t.hint,t.showTransactionHash&&I&&(0,a.jsxs)("span",{children:[" ",I,"."]})]})]})})]}),j&&!S&&t.functions.map((e,t)=>(0,a.jsx)(c.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white",marginBottom:"20px"},children:(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(l.Z,{className:"desc-title title-color",children:(0,a.jsx)("b",{children:e.label})}),e.inputs.map((e,t)=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.Z,{children:(0,a.jsx)(u.Z,{className:"py-1 rounded-[12px]",style:{color:"black"},placeholder:e.placeholder,onChange:t=>P(t,e.name)})},t),(0,a.jsx)("br",{})]})),(0,a.jsx)(i.Z,{className:"flex h-fit py-2 px-4 bg-[#25618B] rounded-[12px] gap-[6px]",style:{backgroundColor:"#355f7d",color:"white"},onClick:()=>X(e.functionName,n[e.functionName]),children:e.buttonText})]})},t)),N>0&&(0,a.jsx)("div",{style:{textAlign:"center",color:"#c97539",marginTop:"20px"},children:(0,a.jsxs)("strong",{children:["Congratulations! You Got A Badge ",(0,a.jsx)("i",{className:"fas fa-medal",style:{fontSize:"20px"}})]})})]})}},84530:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var a=n(85893);n(67294);var s=n(83545),o=JSON.parse('[{"inputs":[],"name":"_encodeStringAndUint","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"encodedData","type":"bytes"}],"name":"encode","outputs":[],"stateMutability":"nonpayable","type":"function"}]');let c=async(e,t,n,a,s,o)=>{let{encodedData:c}=n;if(!/^0x[0-9A-Fa-f]+$/.test(c)){e.error("Invalid input! Please provide encoded data in hexadecimal format.");return}try{await t.methods.encode(c).send({from:a}),e.success("Data encoded successfully!");let n=await s.methods.balanceOf(a,o).call();n<1&&(await s.methods.mint(o,t.options.address).send({from:a}),e.success("Badge minted successfully!"))}catch(t){console.error("Error in encode function:",t),e.error("Encoding operation failed: ".concat(t.message))}},r=async(e,t)=>{try{let n=await t.methods._encodeStringAndUint().call();e.info("Encoded data is: ".concat(n||"bytes: 0x"))}catch(t){e.error("Fetching encoded data failed."),console.error(t)}},i={id:11,title:"Encode Data",description:"Master data encryption in Solidity. Use encoding tools and craft the perfect solution.\n                You need to be familiar with the abi.encode function for encoding data in Solidity, understand\n                how keccak256 works, and use these tools to encrypt data.",code:'// SPDX-License-Identifier: MIT\n          pragma solidity ^0.8.10;\n          \n          contract EncodeData {\n              bytes public _encodeStringAndUint = hex"";\n          \n              function encode(bytes memory encodedData) external {\n                  require(\n                      keccak256(encodedData) == keccak256(abi.encode("WEB", 3)),\n                      "The Answer is incorrect"\n                  );\n                  _encodeStringAndUint = encodedData;\n              }  \n          }',abi:o,badgeId:11,hint:"Use the encodeparameters function from the web3js library. \n         For more info, check https://web3js.readthedocs.io/en/v1.7.1/web3-eth-abi.html#encodeparameters.\n         Alternatively, write a function as follows: function encode(string memory _str, uint256 _num) external pure returns (bytes memory);",functions:[{label:"Encoded String and Uint",functionName:"encodeStringAndUint",buttonText:"Fetch Encoded Data",inputs:[]},{label:"Encode Data",functionName:"encode",buttonText:"Encode",inputs:[{name:"encodedData",placeholder:"Enter encoded data"}]}]};var l=()=>(0,a.jsx)(s.Z,{gameData:i,gameFunctions:{encode:c,encodeStringAndUint:r}})}},function(e){e.O(0,[817,311,941,774,888,179],function(){return e(e.s=10719)}),_N_E=e.O()}]);