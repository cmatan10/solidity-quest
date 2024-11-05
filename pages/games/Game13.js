// src/pages/Game13.js

import React from 'react';
import GameTemplateCard from '../../components/GameTemplateCard';
import InstanceABI from '../../interfaces/DecodeData.json';
import { decode, encodeStringAndUint, player } from '../../functions/Game13Functions';

const gameData13 = {
  id: 13,
  title: 'Decode Data',
  description: `Master data decryption in Solidity. Decode and pass data with precision.
                You need to be familiar with the abi.encode function for encoding data in Solidity, 
                understand how keccak256 works, and use these tools to decode data.`,
  code: `// SPDX-License-Identifier: MIT
          pragma solidity ^0.8.10;
          
          contract DecodeData {
              bytes public encodeStringAndUint = hex"00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000b4920416d204e756d626572000000000000000000000000000000000000000000";
              
              struct Player {
                  string _string;
                  uint256 _number;
              }
              Player public player;
              
              function decode(string memory _str, uint256 _num) external {
                  bytes memory encodedData = abi.encode(_str, _num);
                  require(keccak256(encodedData) == keccak256(encodeStringAndUint), "The Answer is incorrect");
                  player = Player(_str, _num);
              }
          }`,
  abi: InstanceABI,
  badgeId: 13,
  hint: `Write a function as follows: function decode(bytes memory encodedData) external pure returns (string memory, uint256);
         Alternatively, Use the decodeparameters function from the web3js library.
         `,
  hintLink: 'https://web3js.readthedocs.io/en/v1.7.1/web3-eth-abi.html#decodeparameters',
  functions: [
    {
      label: 'Encoded String and Uint',
      functionName: 'encodeStringAndUint',
      buttonText: 'Fetch Encoded Data',
      inputs: [],
    },
    {
      label: 'Player Data',
      functionName: 'player',
      buttonText: 'Fetch Player Data',
      inputs: [],
    },
    {
      label: 'Decode Data',
      functionName: 'decode',
      buttonText: 'Decode',
      inputs: [
        { name: '_str', placeholder: 'Enter string' },
        { name: '_num', placeholder: 'Enter number' },
      ],
    },
  ],
};

const Game13 = () => (
  <GameTemplateCard gameData={gameData13} gameFunctions={{ decode, encodeStringAndUint, player }} />
);

export default Game13;
