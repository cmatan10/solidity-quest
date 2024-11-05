// src/pages/Game12.js

import React from 'react';
import GameTemplateCard from '../../components/GameTemplateCard';
import InstanceABI from '../../interfaces/HashCollision.json';
import { findCollision, secretHash, collisionFound } from '../../functions/Game12Functions';

const gameData12 = {
  id: 12,
  title: 'Hash Collision',
  description: `Challenge Solidity's hash functions. Find collisions and match outputs.
                To solve this puzzle, you need to understand hash functions in Solidity, 
                specifically keccak256 and sha256, as well as how to use the abi.encodePacked function. 
                You'll also need to understand the concept of hash collisions, where different inputs produce the same hashed output.`,
  code: `// SPDX-License-Identifier: MIT
          pragma solidity ^0.8.10;
          
          contract HashCollision {
              bytes32 public secretHash = keccak256(abi.encodePacked(sha256("secret")));
              bool public collisionFound = false;
              
              function findCollision(bytes memory guess) public {
                  require(keccak256(abi.encodePacked(guess)) == secretHash, "Not a collision!");
                  collisionFound = true;
              }
          }`,
  abi: InstanceABI,
  badgeId: 12,
  hint: `Write a function according to the following interface:
         function guess() external pure returns (bytes memory secret);`,
  functions: [
    {
      label: 'Secret Hash',
      functionName: 'secretHash',
      buttonText: 'Fetch Secret Hash',
      inputs: [],
    },
    {
      label: 'Collision Found',
      functionName: 'collisionFound',
      buttonText: 'Check Collision Status',
      inputs: [],
    },
    {
      label: 'Find Collision',
      functionName: 'findCollision',
      buttonText: 'Find Collision',
      inputs: [{ name: 'guess', placeholder: 'Enter guess for collision' }],
    },
  ],
};

const Game12 = () => (
  <GameTemplateCard gameData={gameData12} gameFunctions={{ findCollision, secretHash, collisionFound }} />
);

export default Game12;
