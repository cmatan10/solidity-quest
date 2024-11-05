// src/pages/Game9.js

import React from 'react';
import GameTemplateCard from '../../components/GameTemplateCard';
import InstanceABI from '../../interfaces/BlockHash.json';
import { blockHashCheck, correctBlockHash } from '../../functions/Game9Functions';

const gameData9 = {
  id: 9,
  title: 'BlockHash',
  description: `Embark on a journey with Solidity's block properties. Match hashes and validate findings.
                To complete this puzzle, you need to understand Ethereum's block properties.`,
  code: `// SPDX-License-Identifier: MIT
          pragma solidity ^0.8.10;
          
          contract BlockHash {
              bool public correctBlockHash = false;
          
              function blockHashCheck(uint blockNumber, bytes32 blockHash) external {
                  require(blockNumber < block.number, "Block number should be less than current block number");
                  require(block.number - blockNumber <= 256, "Block number should be within the last 256 blocks");
                  if(blockhash(blockNumber) == blockHash){
                      correctBlockHash = true;
                  }
              }
          }`,
  abi: InstanceABI,
  badgeId: 9,
  hint: 'You will find the block number in the block explorer by this hash:',
  showTransactionHash: true,
  functions: [
    {
      label: 'Check Correct Block Hash',
      functionName: 'correctBlockHash',
      buttonText: 'Check Correct Block Hash',
      inputs: [],
    },
    {
      label: 'Block Hash Check',
      functionName: 'blockHashCheck',
      buttonText: 'Verify Block Hash',
      inputs: [
        { name: 'blockNumber', placeholder: 'Enter Block Number' },
        { name: 'blockHash', placeholder: 'Enter Block Hash' },
      ],
    },
  ],
};

const Game9 = () => (
  <GameTemplateCard gameData={gameData9} gameFunctions={{ blockHashCheck, correctBlockHash }} />
);

export default Game9;
