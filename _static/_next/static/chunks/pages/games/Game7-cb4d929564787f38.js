(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[887],{45632:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/games/Game7",function(){return a(71437)}])},83545:function(e,s,a){"use strict";var t=a(85893),n=a(67294),r=a(53637),o=a(39886),i=a(54610),l=a(84082),c=a(49816),d=a(89163),u=a(87261),p=a(45281),h=a(84283),m=a(74855),x=a(44173),w=a(96941);a(71399);var g=a(46050);s.Z=e=>{let{gameData:s,gameFunctions:a}=e,[y,b]=(0,n.useState)({}),[f,j]=(0,n.useState)(""),[P,N]=(0,n.useState)(""),[C,v]=(0,n.useState)(""),[Z,k]=(0,n.useState)(!1),[T,_]=(0,n.useState)(null),[S,B]=(0,n.useState)(null),[I,A]=(0,n.useState)(!1),[E,H]=(0,n.useState)(null),F=(0,n.useRef)(null),{walletAddress:D,factoryContract:G,nftContract:M,web3:O}=(0,n.useContext)(g.S);(0,n.useEffect)(()=>{O&&O.utils.isAddress(f)&&_(new O.eth.Contract(s.abi,f)),O&&s.abi2&&O.utils.isAddress(P)&&B(new O.eth.Contract(s.abi2,P))},[f,P,O,s.abi,s.abi2]),(0,n.useEffect)(()=>{let e=async()=>{if(D&&M){let e=await M.methods.balanceOf(D,s.badgeId).call();v(e)}};e()},[D,M,s.badgeId]);let Y=(e,s)=>{b({...y,[s]:e.target.value})},X=async()=>{try{k(!0);let e=await G.methods.deploy(s.id).send({from:D}),a=e.events.DeployInstance;a?(j(O.utils.toChecksumAddress("0x".concat(e.logs[0].topics[1].slice(-40)))),s.abi2&&e.logs[1]&&N(O.utils.toChecksumAddress("0x".concat(e.logs[1].topics[1].slice(-40)))),s.showTransactionHash&&H(e.transactionHash),x.Am.success("Game instance(s) created successfully!")):x.Am.error("Game creation failed.")}catch(e){x.Am.error("Game creation failed. Please ensure your wallet is connected."),console.error(e)}finally{k(!1)}},q=(e,a)=>{a(x.Am,T,y,D,M,s.badgeId,O,S)};return(0,t.jsxs)(r.Z,{className:"bg-primary-black overflow-hidden",style:{paddingBottom:"30px",minHeight:"100vh"},children:[(0,t.jsx)(w.wp,{}),(0,t.jsx)(x.Ix,{}),(0,t.jsx)("h1",{className:"game-title title-color",style:{paddingTop:"20px",paddingBottom:"20px"},children:(0,t.jsx)("b",{children:s.title})}),(0,t.jsx)(o.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white",marginBottom:"20px"},children:(0,t.jsx)(i.Z,{children:(0,t.jsxs)("div",{children:[(0,t.jsx)(m.CopyToClipboard,{text:s.code,children:(0,t.jsx)(l.Z,{className:"button-copy",children:"Copy code"})}),(0,t.jsx)(p.Z,{language:"javascript",style:h.YC,ref:F,customStyle:{margin:"0"},children:s.code})]})})}),s.code1&&(0,t.jsx)(o.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white",marginBottom:"20px"},children:(0,t.jsx)(i.Z,{children:(0,t.jsxs)("div",{children:[(0,t.jsx)(m.CopyToClipboard,{text:s.code1,children:(0,t.jsx)(l.Z,{className:"button-copy",children:"Copy code"})}),(0,t.jsx)(p.Z,{style:h.YC,ref:F,customStyle:{margin:"0"},children:s.code1})]})})}),(0,t.jsx)(o.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white",marginBottom:"20px"},children:(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(c.Z,{className:"desc-title title-color",children:(0,t.jsx)("b",{children:"Game Description"})}),(0,t.jsx)("p",{children:s.description}),(0,t.jsx)("br",{}),(0,t.jsx)(l.Z,{onClick:X,className:"flex h-fit py-2 px-4 bg-[#25618B] rounded-[12px] gap-[6px]",style:{backgroundColor:"#c97539",color:"white"},children:Z?"Creating...":"Create Instance"})]})}),f&&!Z&&(0,t.jsx)(o.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white",marginBottom:"20px"},children:(0,t.jsxs)(i.Z,{children:[(0,t.jsx)("h3",{className:"desc-title title-color",children:(0,t.jsx)("b",{children:"Your Instance Address:"})}),(0,t.jsx)("p",{style:{wordBreak:"break-all",color:"#c97539"},children:f}),S&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h3",{className:"desc-title title-color",children:(0,t.jsx)("b",{children:"Your Hacking Instance Address:"})}),(0,t.jsx)("p",{style:{wordBreak:"break-all",color:"#c97539"},children:P})]})]})}),f&&!Z&&s.hint&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.Z,{onClick:()=>A(!I),className:"flex h-fit py-2 px-4 bg-[#25618B] rounded-[12px] gap-[6px]",style:{backgroundColor:"#355f7d",color:"white",marginBottom:"17px",marginLeft:"12px"},children:I?"Hide Hint":"Show Hint"}),I&&(0,t.jsx)(o.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white",marginTop:"10px"},children:(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(c.Z,{className:"desc-title title-color",children:(0,t.jsx)("b",{children:"Hint"})}),(0,t.jsxs)("p",{children:[s.hint,s.showTransactionHash&&E&&(0,t.jsxs)("span",{children:[" ",E,"."]})]})]})})]}),f&&!Z&&s.functions.map((e,s)=>(0,t.jsx)(o.Z,{className:"game-card",style:{backgroundColor:"#000000",color:"white",marginBottom:"20px"},children:(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(c.Z,{className:"desc-title title-color",children:(0,t.jsx)("b",{children:e.label})}),e.inputs.map((e,s)=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.Z,{children:(0,t.jsx)(u.Z,{className:"py-1 rounded-[12px]",style:{color:"black"},placeholder:e.placeholder,onChange:s=>Y(s,e.name)})},s),(0,t.jsx)("br",{})]})),(0,t.jsx)(l.Z,{className:"flex h-fit py-2 px-4 bg-[#25618B] rounded-[12px] gap-[6px]",style:{backgroundColor:"#355f7d",color:"white"},onClick:()=>q(e.functionName,a[e.functionName]),children:e.buttonText})]})},s)),C>0&&(0,t.jsx)("div",{style:{textAlign:"center",color:"#c97539",marginTop:"20px"},children:(0,t.jsxs)("strong",{children:["Congratulations! You Got A Badge ",(0,t.jsx)("i",{className:"fas fa-medal",style:{fontSize:"20px"}})]})})]})}},71437:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return c}});var t=a(85893);a(67294);var n=a(83545),r=JSON.parse('[{"inputs":[{"internalType":"uint256","name":"_password","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"PreviousPassword","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_password","type":"uint256"},{"internalType":"uint256","name":"newPassword","type":"uint256"}],"name":"changePassword","outputs":[],"stateMutability":"nonpayable","type":"function"}]');let o=async(e,s,a,t,n,r)=>{let{_password:o,newPassword:i}=a;if(isNaN(Number(o))||isNaN(Number(i))){e.error("Invalid password! Both passwords must be numbers.");return}try{await s.methods.changePassword(o,i).send({from:t}),e.success("Password changed successfully!");let a=await n.methods.balanceOf(t,r).call();a<1&&(await n.methods.mint(r,s.options.address).send({from:t}),e.success("Badge minted successfully!"))}catch(s){e.error("Password change failed: ".concat(s.message))}},i=async(e,s,a)=>{let{num:t}=a;try{let a=await s.methods.PreviousPassword(t).call();e.info("Previous Password: ".concat(a))}catch(s){e.error("Failed to fetch previous password.")}},l={id:7,title:"Change Password",description:"Explore Solidity's private state variables. Discover and master state variable intricacies.",code:'// SPDX-License-Identifier: MIT\n  pragma solidity ^0.8.10;\n\n  contract ChangePassword {\n      uint256 private password;\n      uint256[] public PreviousPassword;\n\n      constructor(uint256 _password) {\n          password = _password;\n      }\n\n      function changePassword(uint256 _password, uint256 newPassword) external {\n          require(password == _password, "Password Cannot Be Changed!");\n          require(password != newPassword, "The Password Must Be Different From The Previous Password!");\n          PreviousPassword.push(_password);\n          password = newPassword;\n      }\n  }\n  ',abi:r,badgeId:7,hint:"Understand how Solidity’s private variables are stored and accessed.",functions:[{label:"Previous Password",functionName:"previousPassword",buttonText:"Fetch Previous Password",inputs:[{name:"num",placeholder:"Enter Previous Password Index"}]},{label:"Change Password",functionName:"changePassword",buttonText:"Submit New Password",inputs:[{name:"_password",placeholder:"Enter Current Password"},{name:"newPassword",placeholder:"Enter New Password"}]}]};var c=()=>(0,t.jsx)(n.Z,{gameData:l,gameFunctions:{changePassword:o,previousPassword:i}})}},function(e){e.O(0,[817,311,941,774,888,179],function(){return e(e.s=45632)}),_N_E=e.O()}]);