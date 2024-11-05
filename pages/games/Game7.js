// src/pages/Game7.js

import React from 'react';
import GameTemplateCard from '../../components/GameTemplateCard';
import InstanceABI from '../../interfaces/ChangePassword.json';
import { changePassword, previousPassword } from '../../functions/Game7Functions';

const gameData7 = {
  id: 7,
  title: 'Change Password',
  description: `Dive into Solidity's 'private' state variables. Discover and master state variable intricacies.  
                To complete this mission, you need to understand Solidity's state variable visibility, 
                especially private variables, and how to potentially expose or access these 'hidden' variables.`,
  code: `// SPDX-License-Identifier: MIT
  pragma solidity ^0.8.10;

  contract ChangePassword {
      uint256 private password;
      uint256[] public PreviousPassword;

      constructor(uint256 _password) {
          password = _password;
      }

      function changePassword(uint256 _password, uint256 newPassword) external {
          require(password == _password, "Password Cannot Be Changed!");
          require(password != newPassword, "The Password Must Be Different From The Previous Password!");
          PreviousPassword.push(_password);
          password = newPassword;
      }
  }
  `,
  abi: InstanceABI,
  badgeId: 7,
  hint: 'Understand how Solidity’s private variables are stored and accessed.',
  hintLink: 'https://web3js.readthedocs.io/en/v1.2.11/web3-eth.html?highlight=getStorageAt#getstorageat',

  functions: [
    {
      label: 'Previous Password',
      functionName: 'previousPassword',
      buttonText: 'Fetch Previous Password',
      inputs: [{ name: 'num', placeholder: 'Enter Previous Password Index' }],
    },
    {
      label: 'Change Password',
      functionName: 'changePassword',
      buttonText: 'Submit New Password',
      inputs: [
        { name: '_password', placeholder: 'Enter Current Password' },
        { name: 'newPassword', placeholder: 'Enter New Password' },
      ],
    },
  ],
};

const Game7 = () => <GameTemplateCard gameData={gameData7} gameFunctions={{ changePassword, previousPassword }} />;

export default Game7;
