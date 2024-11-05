// src/pages/Game6.js
import React from 'react';
import GameTemplateCard from '../../components/GameTemplateCard';
import InstanceABI from '../../interfaces/GasChecker.json';
import { complexOperation, gasUsed, gasChecked } from '../../functions/Game6Functions';

const gameData6 = {
  id: 6,
  title: 'Gas Checker',
  description: `Explore gas consumption in Solidity. Manage gas usage efficiently.
                To solve this puzzle, you need to understand Ethereum's gas concept, 
                how to use gasleft() to monitor gas consumption, and how to control and optimize gas usage in Solidity.`,
  code: `// SPDX-License-Identifier: MIT
  pragma solidity ^0.8.10;

  contract GasChecker {
      uint256 public gasUsed = 0; 
      bool public GasChecked = false;

      function complexOperation(uint256 iterations) external {
          uint256 gasStart = gasleft();
          uint256 sum = 0;
          for(uint256 i = 0; i < iterations; i++) {
              sum += i;
          }
          gasUsed = gasStart - gasleft();
          if(gasUsed > 3000 && gasUsed < 5000){
           GasChecked = true;
          }
      }
  }`,
  abi: InstanceABI,
  badgeId: 6,
  hint: 'Try to figure out how much gas is required for one iteration, so you can estimate how many iterations the loop will take to consume gas in the range of 3000 to 5000.',
  functions: [
    {
      label: 'Check Gas Used',
      functionName: 'gasUsed',
      buttonText: 'Gas Used',
      inputs: [],
    },
    {
      label: 'Gas Checked Status',
      functionName: 'gasChecked',
      buttonText: 'Check Gas',
      inputs: [],
    },
    {
      label: 'Complex Operation',
      functionName: 'complexOperation',
      buttonText: 'Execute Complex Operation',
      inputs: [{ name: 'iterations', placeholder: 'Enter number of iterations' }],
    },
  ],
};

const Game6 = () => <GameTemplateCard gameData={gameData6} gameFunctions={{ complexOperation, gasUsed, gasChecked }} />;

export default Game6;
