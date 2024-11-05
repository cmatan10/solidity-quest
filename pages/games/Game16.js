// src/pages/Game16.js

import React from 'react';
import GameTemplateCard from '../../components/GameTemplateCard';
import InstanceABI from '../../interfaces/LimitedTickets.json';
import InstanceABI2 from '../../interfaces/LimitedTicketsHack.json';
import { claimTickets, Count, maxTicketsPerAddress, attack, checkLimitedTickets } from '../../functions/Game16Functions';

const gameData16 = {
  id: 16,
  title: 'Limited Tickets',
  description: `Strategize and bypass ticket limitations in Solidity. Challenge the system and claim rewards.
                To play this game, you must creatively explore communication with the ticketing contract, 
                understanding how to potentially bypass a limitation that restricts users to three tickets. 
                Familiarity with intermediate contracts could prove valuable.`,
  code: `// SPDX-License-Identifier: MIT
          pragma solidity ^0.8.10;
          
          contract LimitedTickets {
              mapping(address => uint256) public Count;
              uint8 public maxTicketsPerAddress = 3;

              function claimTickets(address receiver, uint256 ticketAmount) public {
                  require(
                      Count[msg.sender] + ticketAmount <= maxTicketsPerAddress,
                      "max tickets per address exceeded"
                  );
                  for (uint256 i = 0; i < ticketAmount; i++) {
                      Count[receiver]++;
                  }
              }
          }
          
          contract HacklimitedTickets {
              LimitedTickets target;

              function attack(address _target, address attacker, uint256 ticketAmount) public {
                  target = LimitedTickets(_target);
                  target.claimTickets(attacker, ticketAmount);
              }
          }`,
  abi: InstanceABI,
  abi2: InstanceABI2,
  badgeId: 16,
  hint: `Consider how the 'claimTickets' function tracks ticket count. When the attacker contract calls this function, 
         it's defined as the msg.sender. Even though the tickets are transferred to your address through the attacker contract, 
         the balance of the attacker contract will always remain at zero tickets.`,
  functions: [
    {
      label: 'Count Tickets',
      functionName: 'Count',
      buttonText: 'Fetch Ticket Count',
      inputs: [{ name: 'inputCounter', placeholder: 'Enter Address' }],
    },
    {
      label: 'Max Tickets Per Address',
      functionName: 'maxTicketsPerAddress',
      buttonText: 'Fetch Max Tickets',
      inputs: [],
    },
    {
      label: 'Claim Tickets',
      functionName: 'claimTickets',
      buttonText: 'Claim Tickets',
      inputs: [
        { name: 'receiver', placeholder: 'Enter Receiver Address' },
        { name: 'ticketAmount', placeholder: 'Enter Ticket Amount' },
      ],
    },
    {
      label: 'Hack Limited Tickets',
      functionName: 'attack',
      buttonText: 'Perform Attack',
      inputs: [
        { name: 'target', placeholder: 'Enter Target Address' },
        { name: 'attacker', placeholder: 'Enter Attacker Address' },
        { name: 'ticketAmount', placeholder: 'Enter Ticket Amount' },
      ],
    },
    {
      label: 'Check Limited Tickets',
      functionName: 'checkLimitedTickets',
      buttonText: 'Submit',
      inputs: [],
    },
  ],
};

const Game16 = () => (
  <GameTemplateCard
    gameData={gameData16}
    gameFunctions={{
      claimTickets,
      Count,
      maxTicketsPerAddress,
      attack,
      checkLimitedTickets,
    }}
  />
);

export default Game16;
