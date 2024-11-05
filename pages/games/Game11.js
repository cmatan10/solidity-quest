// src/pages/Game11.js

import React from 'react';
import GameTemplateCard from '../../components/GameTemplateCard';
import InstanceABI from '../../interfaces/EncodeData.json';
import { encode, encodeStringAndUint } from '../../functions/Game11Functions';

const gameData11 = {
  id: 11,
  title: 'Encode Data',
  description: `Master data encryption in Solidity. Use encoding tools and craft the perfect solution.
                You need to be familiar with the abi.encode function for encoding data in Solidity, understand
                how keccak256 works, and use these tools to encrypt data.`,
  code: `// SPDX-License-Identifier: MIT
          pragma solidity ^0.8.10;
          
          contract EncodeData {
              bytes public _encodeStringAndUint = hex"";
          
              function encode(bytes memory encodedData) external {
                  require(
                      keccak256(encodedData) == keccak256(abi.encode("WEB", 3)),
                      "The Answer is incorrect"
                  );
                  _encodeStringAndUint = encodedData;
              }  
          }`,
  abi: InstanceABI,
  badgeId: 11,
  hint: `Write a function as follows: function encode(string memory _str, uint256 _num) external pure returns (bytes memory);
         Alternatively, use the encodeparameters function from the web3js library. `,
  hintLink: 'https://web3js.readthedocs.io/en/v1.7.1/web3-eth-abi.html#encodeparameters',
  functions: [
    {
      label: 'Encoded String and Uint',
      functionName: 'encodeStringAndUint',
      buttonText: 'Fetch Encoded Data',
      inputs: [],
    },
    {
      label: 'Encode Data',
      functionName: 'encode',
      buttonText: 'Encode',
      inputs: [{ name: 'encodedData', placeholder: 'Enter encoded data' }],
    },
  ],
};
const Game11 = () => (
  <GameTemplateCard gameData={gameData11} gameFunctions={{ encode, encodeStringAndUint }} />
);

export default Game11;
