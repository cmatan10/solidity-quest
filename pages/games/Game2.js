// src/pages/Game2.js

import React from 'react';
import GameTemplateCard from '../../components/GameTemplateCard';
import InstanceABI from '../../interfaces/Fallback.json';
import { fixMe, checkFallbackGame } from '../../functions/Game2Functions';

const gameData2 = {
  id: 2,
  title: 'Fallback',
  description: 'Delve into Solidity\'s fallback function mechanism...',
  code: `// SPDX-License-Identifier: MIT
          pragma solidity ^0.8.10;

          contract Fallback {
              uint8 public num = 0;

              function fixMe() external view returns (bool) {
                  return num == 1;
              }

              fallback() external {
                  num = 1;
              }
          }`,
  abi: InstanceABI,
  badgeId: 2, // Unique Badge ID for this game
  hint: `Each hexadecimal digit represents four binary bits, 
  and a bytes2 consists of sixteen bits. 
  It requires four hexadecimal digits to represent all possible values. 
  In hexadecimal notation, values range from 0x0000 to 0xFFFF.`,
  functions: [
    {
      label: 'Fix Me',
      functionName: 'fixMe',
      buttonText: 'Execute fixMe',
      inputs: [],
    },
    {
      label: 'Check Fallback Game',
      functionName: 'checkFallbackGame',
      buttonText: 'Submit',
      inputs: [],
    },
  ],
};

const Game2 = () => <GameTemplateCard gameData={gameData2} gameFunctions={{ fixMe, checkFallbackGame }} />;

export default Game2;

// /* eslint-disable no-shadow */
// import React, { useState, useRef, useContext, useEffect } from 'react';
// import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism';
// import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

// import { Button, Container, Card, CardBody, CardTitle } from 'reactstrap';
// import { CopyToClipboard } from 'react-copy-to-clipboard';
// import { ToastContainer, toast } from 'react-toastify';
// import InstanceABI from '../../interfaces/Fallback.json';
// import { Web3Context } from '../../web3/Web3provider';
// import 'react-toastify/dist/ReactToastify.css';
// import { Navbar } from '../../components';

// const Game2 = () => {
//   const [InstanceAddress, setInstanceAddress] = useState('');
//   const [TokenBalance, setTokenBalance] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const codeRef = useRef(null);
//   const { walletAddress, factoryContract, nftContract, web3 } = useContext(Web3Context);
//   const [instanceContract, setInstanceContract] = useState(null);
//   const [isHintVisible, setIsHintVisible] = useState(false);
//   const [fixMeState, setFixMeState] = useState(false);
//   const [isButtonClicked, setIsButtonClicked] = useState(false);

//   const hintLink = 'https://docs.soliditylang.org/en/v0.8.10/contracts.html?highlight=fallback#fallback-function';

//   const toggleHint = () => {
//     setIsHintVisible(!isHintVisible);
//   };
//   useEffect(() => {
//     if (web3 && web3.utils.isAddress(InstanceAddress)) {
//       setInstanceContract(new web3.eth.Contract(InstanceABI, InstanceAddress));
//     }
//   }, [InstanceAddress, web3]);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (!walletAddress || !nftContract) {
//         return;
//       }
//       const balance = await nftContract.methods.balanceOf(walletAddress, 2).call();
//       setTokenBalance(balance);
//       console.log(TokenBalance);
//     };
//     fetchData();
//   }, [walletAddress, nftContract, TokenBalance]);

//   const createGame = async () => {
//     try {
//       setIsLoading(true);
//       const receipt = await factoryContract.methods.deploy(2).send({
//         from: walletAddress,
//       });

//       const deployInstanceEvent = receipt.events.DeployInstance;
//       if (deployInstanceEvent) {
//         setInstanceAddress(deployInstanceEvent.returnValues.Instance);
//         toast.success('Game created successfully!');
//       } else {
//         toast.error('Game creation failed.');
//       }

//       setIsLoading(false);
//     } catch (err) {
//       setIsLoading(false);
//       console.log(err);
//       toast.error(`Game creation failed.
//       Please make sure:
// -That your Metamask wallet is properly connected.`);
//     }
//   };

//   const checkFallbackGame = async () => {
//     const fixMeValue = await instanceContract.methods.fixMe().call();
//     console.log(fixMeValue);
//     setFixMeState(fixMeValue);
//     if (fixMeValue === true) {
//       console.log('The Mission Is Complete');
//       toast('Well done! You have solved this level!', {
//         autoClose: 5000,
//       });
//       if (TokenBalance < 1) {
//         try {
//           await nftContract.methods.mint(2, InstanceAddress).send({
//             from: walletAddress,
//           })
//             .once('error', (err) => {
//               console.log(err);
//               toast.error('Minting failed.');
//             })
//             .once('receipt', async () => {
//               const balance = await nftContract.methods.balanceOf(walletAddress, 2).call();
//               setTokenBalance(balance);
//               console.log(balance);
//               toast.success('Minting completed successfully!');
//             });
//         } catch (err) {
//           console.error(err.message);
//           toast.error('Minting failed.');
//         }
//       }
//     }
//   };
//   const fixMe = async () => {
//     setIsButtonClicked(true);
//     const fixMeValue = await instanceContract.methods.fixMe().call();
//     console.log(fixMeValue);
//     setFixMeState(fixMeValue);
//   };

//   const code = `// SPDX-License-Identifier: MIT
//     pragma solidity ^0.8.10;
//     contract Fallback {
//         uint8 num = 0;
//         function fixMe() external view returns (bool) {
//             return num == 1;
//         }
//         fallback() external {
//             num = 1;
//         }
//     }`;

//   return (
//     <>
//       <Container className="bg-primary-black overflow-hidden">
//         <Navbar />
//         <h1 className="game-title title-color"><b>Fallback</b></h1>
//         <Card className="card" style={{ backgroundColor: '#000000', color: 'white' }}>

//           <CardBody>
//             <div style={{ position: 'relative' }}>
//               <CopyToClipboard text={code}>
//                 <Button className="button-copy">
//                   Copy code
//                 </Button>
//               </CopyToClipboard>
//               <SyntaxHighlighter language="javascript" style={a11yDark} ref={codeRef}>
//                 {code}
//               </SyntaxHighlighter>
//             </div>
//           </CardBody>
//         </Card>

//         <Card className="game-card" style={{ backgroundColor: '#000000', color: 'white' }}>
//           <CardBody>
//             <CardTitle className="desc-title title-color"><b>Game Description</b></CardTitle>
//             <p><b>Delve into Solidity's fallback intricacies. Discover its mechanics and maximize its potential. </b>
//               <br /><br />
//               <b><strong> You need:</strong>  To complete this mission, you need to understand how Solidity's fallback function works, when it's triggered, and how to activate it. </b>
//             </p>
//             <div>
//               <br />
//               <Button style={{ backgroundColor: '#c97539', color: 'white' }} className="flex items-center h-fit py-2 px-4 rounded-[12px] gap-[12px]" onClick={createGame}>
//                 Create Instance
//               </Button>
//             </div>

//           </CardBody>
//         </Card>

//         {!isLoading && InstanceAddress !== '' && (
//           <>
//             <Card className="card" style={{ backgroundColor: '#000000', color: 'white', minHeight: '150px' }}>
//               <CardBody>
//                 <CardTitle className="desc-title title-color"><b>State Variables & Call Functions</b></CardTitle>
//                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                   <Button style={{ backgroundColor: '#355f7d', color: 'white' }} className="flex items-center h-fit py-2 px-4 rounded-[12px] gap-[12px]" onClick={fixMe}>
//                     fixMe
//                   </Button>
//                   {isButtonClicked && fixMeState !== null && <p style={{ marginLeft: '10px' }}>{fixMeState.toString()}</p>}
//                 </div>
//                 <br />
//                 <Button style={{ backgroundColor: '#355f7d', color: 'white' }} className="flex items-center h-fit py-2 px-4 rounded-[12px] gap-[12px]" onClick={toggleHint}>
//                   {isHintVisible ? 'Hide Hint' : 'Show Hint'}
//                 </Button>
//                 {isHintVisible && (
//                   <Card className="card" style={{ backgroundColor: '#000000', color: 'white' }}>
//                     <CardBody>
//                       <CardTitle className="desc-title title-color"><b>Hint</b></CardTitle>
//                       <p>
//                         <strong>Interact with the contract using Remix, and remember that the fallback function is executed on a call to the contract if none of the other functions match the given function signature or if no data was supplied at all and there is no receive Ether function.
//                           The fallback function always receives data, but in order to also receive Ether it must be marked payable.
//                           You Can Read More
//                         </strong> <a style={{ textDecoration: 'underline' }} href={hintLink} target="_blank" rel="noopener noreferrer"><strong>Here</strong></a>.
//                       </p>
//                     </CardBody>
//                   </Card>
//                 )}
//               </CardBody>
//             </Card>

//             <Card className="card" style={{ backgroundColor: '#000000', color: 'white' }}>
//               <CardBody>
//                 <h3 className="desc-title title-color"><b>Your Test Address:</b></h3>
//                 <p style={{ wordBreak: 'break-all' }} className="Instance-color"> {InstanceAddress} </p>
//                 <br />
//                 <Button style={{ backgroundColor: '#c97539', color: 'white' }} className="flex items-center h-fit py-2 px-4 rounded-[12px] gap-[12px]" onClick={checkFallbackGame}>
//                   Submit
//                 </Button>
//               </CardBody>
//             </Card>
//           </>
//         )}

//         <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//           {TokenBalance < 1 ? null : (
//             <div>

//               <strong>
//                 Congratulations! You Got A Badge{' '}
//                 <i className="fas fa-medal" style={{ color: 'gold', fontSize: '20px', position: 'relative', top: '3px' }} />
//               </strong>
//               <br /><br />
//             </div>
//           )}
//         </p>
//       </Container>

//       <ToastContainer />

//     </>
//   );
// };

// export default Game2;
