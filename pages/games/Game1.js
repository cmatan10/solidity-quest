// src/pages/Game1.js

import React from 'react';
import GameTemplateCard from '../../components/GameTemplateCard';
import InstanceABI from '../../interfaces/Bytes2.json';
import { increaseNum, num } from '../../functions/Game1Functions';

const gameData1 = {
  id: 1,
  title: 'Bytes2',
  description: `Traverse the bytes2 data type in Solidity, Share insights and master byte manipulation. 
                To play this game, you need to understand Solidity's bytes data type, specifically bytes2, and how to use it in a contract function.`,
  code: `// SPDX-License-Identifier: MIT
          pragma solidity ^0.8.10;

          contract Bytes2 {
              bytes2 public num = 0;
              function increaseNum(bytes2 _biggerNum) external {
                  require(_biggerNum != bytes2(0), "biggerNum cannot be zero");
                  num = _biggerNum;
              }
          }`,
  abi: InstanceABI,
  badgeId: 1,
  hint: `Each hexadecimal digit represents four binary bits, 
         and a bytes2 consists of sixteen bits. 
         It requires four hexadecimal digits to represent all possible values. 
         In hexadecimal notation, values range from 0x0000 to 0xFFFF.`,
  functions: [
    {
      label: 'Fetch Num',
      functionName: 'num',
      buttonText: 'Num',
      inputs: [],
    },
    {
      label: 'Increase Num',
      functionName: 'increaseNum',
      buttonText: 'increaseNum',
      inputs: [{ name: 'Bytes2', placeholder: 'Enter bytes2 value' }],
    },
  ],
};

const Game1 = () => <GameTemplateCard gameData={gameData1} gameFunctions={{ increaseNum, num }} />;

export default Game1;
