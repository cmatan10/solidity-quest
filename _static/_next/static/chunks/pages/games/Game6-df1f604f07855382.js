(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[654],{38120:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/Game6",function(){return s(5019)}])},83545:function(e,t,s){"use strict";var a=s(85893),n=s(67294),o=s(53637),i=s(39886),l=s(54610),r=s(84082),c=s(49816),d=s(89163),u=s(87261),h=s(45281),p=s(84283),m=s(74855),x=s(55678),g=s(96941);s(71399);var f=s(46050);t.Z=e=>{let{gameData:t,gameFunctions:s}=e,[y,b]=(0,n.useState)({}),[j,k]=(0,n.useState)(""),[C,w]=(0,n.useState)(""),[N,Z]=(0,n.useState)(""),[S,v]=(0,n.useState)(!1),[G,T]=(0,n.useState)(null),[B,_]=(0,n.useState)(null),[A,I]=(0,n.useState)(!1),[O,U]=(0,n.useState)(null),E=(0,n.useRef)(null),{walletAddress:H,factoryContract:Y,nftContract:F,web3:L}=(0,n.useContext)(f.S);(0,n.useEffect)(()=>{L&&L.utils.isAddress(j)&&T(new L.eth.Contract(t.abi,j)),L&&t.abi2&&L.utils.isAddress(C)&&_(new L.eth.Contract(t.abi2,C))},[j,C,L,t.abi,t.abi2]),(0,n.useEffect)(()=>{let e=async()=>{if(H&&F){let e=await F.methods.balanceOf(H,t.badgeId).call();Z(e)}};e()},[H,F,t.badgeId]);let M=(e,t)=>{b({...y,[t]:e.target.value})},z=async()=>{try{v(!0);let e=await Y.methods.deploy(t.id).send({from:H}),s=e.events.DeployInstance;s?(k(L.utils.toChecksumAddress("0x".concat(e.logs[0].topics[1].slice(-40)))),t.abi2&&e.logs[1]&&w(L.utils.toChecksumAddress("0x".concat(e.logs[1].topics[1].slice(-40)))),t.showTransactionHash&&U(e.transactionHash),x.Am.success("Game instance(s) created successfully!")):x.Am.error("Game creation failed.")}catch(e){x.Am.error("Game creation failed. Please ensure your wallet is connected."),console.error(e)}finally{v(!1)}},D=(e,s)=>{s(x.Am,G,y,H,F,t.badgeId,L,B)};return(0,a.jsxs)(o.Z,{className:"bg-primary-black overflow-hidden",style:{paddingBottom:"30px",minHeight:"100vh"},children:[(0,a.jsx)(g.wp,{}),(0,a.jsx)(x.Ix,{}),(0,a.jsx)("h1",{className:"game-title title-color",style:{paddingTop:"20px",paddingBottom:"20px"},children:(0,a.jsx)("b",{children:t.title})}),(0,a.jsx)(i.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white",marginBottom:"20px"},children:(0,a.jsx)(l.Z,{children:(0,a.jsxs)("div",{children:[(0,a.jsx)(m.CopyToClipboard,{text:t.code,children:(0,a.jsx)(r.Z,{className:"button-copy",children:"Copy code"})}),(0,a.jsx)(h.Z,{language:"javascript",style:p.YC,ref:E,customStyle:{margin:"0"},children:t.code})]})})}),t.code1&&(0,a.jsx)(i.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white",marginBottom:"20px"},children:(0,a.jsx)(l.Z,{children:(0,a.jsxs)("div",{children:[(0,a.jsx)(m.CopyToClipboard,{text:t.code1,children:(0,a.jsx)(r.Z,{className:"button-copy",children:"Copy code"})}),(0,a.jsx)(h.Z,{style:p.YC,ref:E,customStyle:{margin:"0"},children:t.code1})]})})}),(0,a.jsx)(i.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white",marginBottom:"20px"},children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(c.Z,{className:"desc-title title-color",children:(0,a.jsx)("b",{children:"Game Description"})}),(0,a.jsx)("p",{children:t.description}),(0,a.jsx)("br",{}),(0,a.jsx)(r.Z,{onClick:z,className:"flex h-fit py-2 px-4 bg-[#25618B] rounded-[12px] gap-[6px]",style:{backgroundColor:"#c97539",color:"white"},children:S?"Creating...":"Create Instance"})]})}),j&&!S&&(0,a.jsx)(i.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white",marginBottom:"20px"},children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)("h3",{className:"desc-title title-color",children:(0,a.jsx)("b",{children:"Your Instance Address:"})}),(0,a.jsx)("p",{style:{wordBreak:"break-all",color:"#c97539"},children:j}),B&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{className:"desc-title title-color",children:(0,a.jsx)("b",{children:"Your Hacking Instance Address:"})}),(0,a.jsx)("p",{style:{wordBreak:"break-all",color:"#c97539"},children:C})]})]})}),j&&!S&&t.hint&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Z,{onClick:()=>I(!A),className:"flex h-fit py-2 px-4 bg-[#25618B] rounded-[12px] gap-[6px]",style:{backgroundColor:"#355f7d",color:"white",marginBottom:"17px",marginLeft:"12px"},children:A?"Hide Hint":"Show Hint"}),A&&(0,a.jsx)(i.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white",marginTop:"10px"},children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(c.Z,{className:"desc-title title-color",children:(0,a.jsx)("b",{children:"Hint"})}),(0,a.jsxs)("p",{children:[t.hint,t.showTransactionHash&&O&&(0,a.jsxs)("span",{style:{wordBreak:"break-all",color:"#c97539"},children:[" ",O,"."]}),t.hintLink&&(0,a.jsxs)("span",{children:[" You can read more ",(0,a.jsx)("a",{href:t.hintLink,target:"_blank",rel:"noopener noreferrer",style:{color:"#c97539"},children:"here"}),"."]}),t.hintLink2&&(0,a.jsxs)("span",{children:[" and ",(0,a.jsx)("a",{href:t.hintLink2,target:"_blank",rel:"noopener noreferrer",style:{color:"#c97539"},children:"here"}),"."]})]})]})})]}),j&&!S&&t.functions.map((e,t)=>(0,a.jsx)(i.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white",marginBottom:"20px"},children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(c.Z,{className:"desc-title title-color",children:(0,a.jsx)("b",{children:e.label})}),e.inputs.map((e,t)=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.Z,{children:(0,a.jsx)(u.Z,{className:"py-1 rounded-[12px]",style:{color:"black"},placeholder:e.placeholder,onChange:t=>M(t,e.name)})},t),(0,a.jsx)("br",{})]})),(0,a.jsx)(r.Z,{className:"flex h-fit py-2 px-4 bg-[#25618B] rounded-[12px] gap-[6px]",style:{backgroundColor:"#355f7d",color:"white"},onClick:()=>D(e.functionName,s[e.functionName]),children:e.buttonText})]})},t)),N>0&&(0,a.jsx)("div",{style:{textAlign:"center",color:"#c97539",marginTop:"20px"},children:(0,a.jsxs)("strong",{children:["Congratulations! You Got A Badge ",(0,a.jsx)("i",{className:"fas fa-medal",style:{fontSize:"20px"}})]})})]})}},5019:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var a=s(85893);s(67294);var n=s(83545),o=JSON.parse('[{"inputs":[],"name":"GasChecked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"iterations","type":"uint256"}],"name":"complexOperation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"gasUsed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]');let i=async(e,t,s,a,n,o)=>{let{iterations:i}=s;if(isNaN(i)){e.error("Invalid iteration count!");return}try{await t.methods.complexOperation(i).send({from:a});let s=await t.methods.gasUsed().call();if(s>3e3&&s<5e3){e.success("Well done! You have solved this level!");let s=await n.methods.balanceOf(a,o).call();s<1&&(await n.methods.mint(o,t.options.address).send({from:a}),e.success("Badge minted successfully!"))}}catch(t){e.error("Complex operation failed: ".concat(t.message))}},l=async(e,t)=>{try{let s=await t.methods.gasUsed().call();e.info("Gas Used: ".concat(s))}catch(t){e.error("Failed to fetch gas usage.")}},r=async(e,t)=>{try{let s=await t.methods.GasChecked().call();e.info("Gas Checked: ".concat(s))}catch(t){e.error("Failed to fetch GasChecked status.")}},c={id:6,title:"Gas Checker",description:"Explore gas consumption in Solidity. Manage gas usage efficiently.\n                To solve this puzzle, you need to understand Ethereum's gas concept, \n                how to use gasleft() to monitor gas consumption, and how to control and optimize gas usage in Solidity.",code:"// SPDX-License-Identifier: MIT\n  pragma solidity ^0.8.10;\n\n  contract GasChecker {\n      uint256 public gasUsed = 0; \n      bool public GasChecked = false;\n\n      function complexOperation(uint256 iterations) external {\n          uint256 gasStart = gasleft();\n          uint256 sum = 0;\n          for(uint256 i = 0; i < iterations; i++) {\n              sum += i;\n          }\n          gasUsed = gasStart - gasleft();\n          if(gasUsed > 3000 && gasUsed < 5000){\n           GasChecked = true;\n          }\n      }\n  }",abi:o,badgeId:6,hint:"Try to figure out how much gas is required for one iteration, so you can estimate how many iterations the loop will take to consume gas in the range of 3000 to 5000.",functions:[{label:"Check Gas Used",functionName:"gasUsed",buttonText:"Gas Used",inputs:[]},{label:"Gas Checked Status",functionName:"gasChecked",buttonText:"Check Gas",inputs:[]},{label:"Complex Operation",functionName:"complexOperation",buttonText:"Execute Complex Operation",inputs:[{name:"iterations",placeholder:"Enter number of iterations"}]}]};var d=()=>(0,a.jsx)(n.Z,{gameData:c,gameFunctions:{complexOperation:i,gasUsed:l,gasChecked:r}})}},function(e){e.O(0,[931,318,941,774,888,179],function(){return e(e.s=38120)}),_N_E=e.O()}]);