// src/pages/Game3.js

import React from 'react';
import GameTemplateCard from '../../components/GameTemplateCard';
import InstanceABI from '../../interfaces/BalanceChecker.json';
import { checkBalance, correctBalanceChecked } from '../../functions/Game3Functions';

const gameData3 = {
  id: 3,
  title: 'Balance Checker',
  description: `Perfect the art of balance verification in Solidity. Convert and ensure digital wallet balances align.
                To solve this puzzle, you need to know how to check Ethereum account balances in Solidity and how to convert balances between Ether and Wei.`,
  code: `// SPDX-License-Identifier: MIT
          pragma solidity ^0.8.10;

          contract BalanceChecker {
              bool public correctBalanceChecked = false;

              function checkBalance(address _account, uint256 _amount) public {
                  require(_account.balance == _amount, "Incorrect balance");
                  correctBalanceChecked = true;
              }
          }`,
  abi: InstanceABI,
  badgeId: 3,
  hint: 'Check how to Get the balance of an address at a given block.',
  hintLink: 'https://web3js.readthedocs.io/en/v1.2.11/web3-eth.html?highlight=balance#getbalance',
  functions: [
    {
      label: 'Get Balance Check Status',
      functionName: 'correctBalanceChecked',
      buttonText: 'correctBalanceChecked ',
      inputs: [],
    },
    {
      label: 'Check Balance',
      functionName: 'checkBalance',
      buttonText: 'Submit Balance Check',
      inputs: [
        { name: '_account', placeholder: 'Enter account address' },
        { name: '_amount', placeholder: 'Enter amount in Wei' },
      ],
    },
  ],
};

const Game3 = () => <GameTemplateCard gameData={gameData3} gameFunctions={{ checkBalance, correctBalanceChecked }} />;

export default Game3;
