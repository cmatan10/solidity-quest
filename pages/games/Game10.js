// src/pages/Game10.js

import React from 'react';
import GameTemplateCard from '../../components/GameTemplateCard';
import InstanceABI from '../../interfaces/InterfaceId.json';
import { CalcMe, answer } from '../../functions/Game10Functions';

const gameData10 = {
  id: 10,
  title: 'Interface Id',
  description: `Decipher function signatures in Solidity. Compute and match using cryptographic functions. 
                You need to understand function signatures in Solidity, how to compute them using keccak256, 
                and convert them into bytes4 type.`,
  code: `// SPDX-License-Identifier: MIT
          pragma solidity ^0.8.10;
          
          contract InterfaceId {
              bool public answer;
          
              function CalcMe(bytes4 id) external {
                  require(id == bytes4(keccak256("CalcMe(bytes4)")), "Calc Me Again!");
                  answer = true;
              }
          }`,
  abi: InstanceABI,
  badgeId: 10,
  hint: `Write a function according to the following interface: function Calc() external pure returns (bytes4); 
         Or calculate the function signature at the following link:`,
  hintLink: 'https://emn178.github.io/online-tools/keccak_256.html',
  functions: [
    {
      label: 'Answer',
      functionName: 'answer',
      buttonText: 'Check Answer',
      inputs: [],
    },
    {
      label: 'CalcMe Function',
      functionName: 'CalcMe',
      buttonText: 'CalcMe',
      inputs: [{ name: 'id', placeholder: 'Enter function ID (bytes4)' }],
    },
  ],
};
const Game10 = () => (
  <GameTemplateCard gameData={gameData10} gameFunctions={{ CalcMe, answer }} />
);

export default Game10;
