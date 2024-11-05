// src/pages/Game5.js

import React from 'react';
import GameTemplateCard from '../../components/GameTemplateCard';
import InstanceABI from '../../interfaces/Timestamp.json'; // Assuming ABI is available here
import { timeReset, success } from '../../functions/Game5Functions';

const gameData5 = {
  id: 5,
  title: 'Timestamp',
  description: `Engage with Solidity’s block.timestamp. Understand and ensure perfect synchronization.
                To complete this puzzle, you need to understand how block.timestamp works in Solidity and how to access it.`,
  code: `// SPDX-License-Identifier: MIT
      pragma solidity 0.8.10;
      
      contract Timestamp {
          uint256 private currentBlockTimestamp;
          bool public success;
      
          constructor() {
              currentBlockTimestamp = block.timestamp;
          }
          function timeReset(uint256 _Timestamp) external {
              require(currentBlockTimestamp == _Timestamp, "This Is Not The Timestamp");
              currentBlockTimestamp = 0;
              success = true;
          }
      }`,
  abi: InstanceABI,
  badgeId: 5,
  hint: 'You will find the block number in the block explorer by using the hash below. Use the Web3 getBlock function to retrieve timestamp details.',
  hintLink: 'https://web3js.readthedocs.io/en/v1.2.11/web3-eth.html?highlight=getBlock#getblock',

  showTransactionHash: true,
  functions: [
    {
      label: 'Check Success',
      functionName: 'success',
      buttonText: 'Check Success',
      inputs: [],
    },
    {
      label: 'Reset Timestamp',
      functionName: 'timeReset',
      buttonText: 'Reset Timestamp',
      inputs: [
        { name: '_Timestamp', placeholder: 'Enter the timestamp' },
      ],
    },
  ],
};
const Game5 = () => (
  <GameTemplateCard gameData={gameData5} gameFunctions={{ timeReset, success }} />
);

export default Game5;
