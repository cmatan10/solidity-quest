// src/pages/Game4.js

import React from 'react';
import GameTemplateCard from '../../components/GameTemplateCard';
import InstanceABI from '../../interfaces/PayableContract.json'; // Assuming ABI is available here
import { checkPayableGame } from '../../functions/Game4Functions';

const gameData4 = {
  id: 4,
  title: 'Payable Contract',
  description: `Dive into the receive function in Solidity. Learn and ensure smooth interactions.
                To accomplish this task, you need to understand the receive function in Solidity, its purpose, when it's triggered, 
                and how to interact with it by sending Ether to the contract.`,
  code: `// SPDX-License-Identifier: MIT
    pragma solidity ^0.8.10;
    
    contract PayableContract {
        receive() external payable {
            require(msg.value == 1 wei, "Incorrect amount received");
        }
    }`,
  abi: InstanceABI,
  badgeId: 4,
  hint: 'Interact with the contract using Remix. The receive function is triggered by plain Ether transfers without calldata.',
  hintLink: 'https://docs.soliditylang.org/en/v0.8.10/contracts.html?highlight=fallback#receive-ether-function',
  functions: [
    {
      label: 'Check Payable Game',
      functionName: 'checkPayableGame',
      buttonText: 'Submit',
      inputs: [],
    },
  ],
};

const Game4 = () => <GameTemplateCard gameData={gameData4} gameFunctions={{ checkPayableGame }} />;

export default Game4;
