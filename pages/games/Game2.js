// src/pages/Game2.js

import React from 'react';
import GameTemplateCard from '../../components/GameTemplateCard';
import InstanceABI from '../../interfaces/Fallback.json';
import { fixMe, checkFallbackGame } from '../../functions/Game2Functions';

const gameData2 = {
  id: 2,
  title: 'Fallback',
  description: `into Solidity's fallback intricacies. Discover its mechanics and maximize its potential.
                To complete this mission, you need to understand how Solidity's fallback function works, 
                when it's triggered, and how to activate it.`,
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
  badgeId: 2,
  hint: `Each hexadecimal digit represents four binary bits, 
  and a bytes2 consists of sixteen bits. 
  It requires four hexadecimal digits to represent all possible values. 
  In hexadecimal notation, values range from 0x0000 to 0xFFFF.`,
  hintLink: 'https://docs.soliditylang.org/en/v0.8.10/contracts.html?highlight=fallback#fallback-function',
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
