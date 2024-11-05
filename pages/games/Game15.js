// src/pages/Game15.js

import React from 'react';
import GameTemplateCard from '../../components/GameTemplateCard';
import InstanceABI from '../../interfaces/SupportInterface.json';
import { calculateXOR, contractInterface, selector1, selector2 } from '../../functions/Game15Functions';

const gameData15 = {
  id: 15,
  title: 'Contract Interface Support',
  description: `Dive into Solidity's contract interfaces. Uncover signatures and master their mechanics.
                You need to understand the keccak256 hash functions, Bytes4 data type, and XOR operations, 
                which are used to calculate a function's signature.`,
  code: `// SPDX-License-Identifier: MIT
          pragma solidity ^0.8.10;
          
          contract SupportInterface {
              bool public contractInterface;
              bytes4 public selector1 = bytes4(keccak256("calcFunc1(uint)"));
              bytes4 public selector2 = bytes4(keccak256("calcFunc2(bool)"));
              
              function calcFunc1(uint number) private {}
              function calcFunc2(bool Boolean) private {}
              
              function calculateXOR(bytes4 id) external {
                  bytes4 xorValue = selector1 ^ selector2 ^ bytes4(keccak256("calculateXOR(bytes4)"));
                  require(id == xorValue, "This is not the interface of the contract");
                  contractInterface = true;
              }
          }`,
  abi: InstanceABI,
  badgeId: 15,
  hint: `
         Write a function as follows: function calculateXOR() public pure returns(bytes4);
         Alternatively, calculate the function signatures and XOR values`,
  hintLink: 'https://emn178.github.io/online-tools/keccak_256.html',
  hintLink2: 'https://xor.pw/#',
  functions: [
    {
      label: 'Check Contract Interface',
      functionName: 'contractInterface',
      buttonText: 'Fetch Interface Status',
      inputs: [],
    },
    {
      label: 'Selector 1',
      functionName: 'selector1',
      buttonText: 'Fetch Selector 1',
      inputs: [],
    },
    {
      label: 'Selector 2',
      functionName: 'selector2',
      buttonText: 'Fetch Selector 2',
      inputs: [],
    },
    {
      label: 'Calculate XOR',
      functionName: 'calculateXOR',
      buttonText: 'Calculate XOR',
      inputs: [
        { name: 'id', placeholder: 'Enter ID (bytes4)' },
      ],
    },
  ],
};
const Game15 = () => (
  <GameTemplateCard gameData={gameData15} gameFunctions={{ calculateXOR, contractInterface, selector1, selector2 }} />
);

export default Game15;
