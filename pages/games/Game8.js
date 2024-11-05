// src/pages/Game8.js

import React from 'react';
import GameTemplateCard from '../../components/GameTemplateCard';
import InstanceABI from '../../interfaces/Overflow.json';
import { add, counter, overflowOccurred } from '../../functions/Game8Functions';

const gameData8 = {
  id: 8,
  title: 'Overflow',
  description: `Take on the overflow challenge in Solidity. Navigate and master numeric manipulations.
                To solve this puzzle, you need to understand the concept of integer overflow and underflow, 
                how the 'unchecked' keyword works in Solidity ^0.8.0, and how to induce an overflow situation.`,
  code: `// SPDX-License-Identifier: MIT
          pragma solidity ^0.8.10;
          
          contract Overflow {
              uint256 public counter = type(uint256).max - 3;
              bool public overflowOccurred = false;
          
              function add(uint256 value) external {
                  unchecked {
                      counter += value;
                      if (counter == 3) {
                          overflowOccurred = true;
                      }
                  }
              }
          }`,
  abi: InstanceABI,
  badgeId: 8,
  hint: 'Refer to Solidity documentation on integer overflow handling in version ^0.8.0.',
  hintLink: 'https://docs.soliditylang.org/en/latest/080-breaking-changes.html#silent-changes-of-the-semantics',
  functions: [
    {
      label: 'Counter Value',
      functionName: 'counter',
      buttonText: 'Get Counter Value',
      inputs: [],
    },
    {
      label: 'Overflow Occurred',
      functionName: 'overflowOccurred',
      buttonText: 'Check Overflow Occurred',
      inputs: [],
    },
    {
      label: 'Add Value',
      functionName: 'add',
      buttonText: 'Add',
      inputs: [{ name: 'value', placeholder: 'Enter a value to add' }],
    },
  ],
};

const Game8 = () => (
  <GameTemplateCard gameData={gameData8} gameFunctions={{ add, counter, overflowOccurred }} />
);

export default Game8;
