// src/pages/Game14.js

import React from 'react';
import GameTemplateCard from '../../components/GameTemplateCard';
import InstanceABI from '../../interfaces/LevelFactory.json';
import { correctPrediction, Saltt, bytecode, checkAddress, Deploy } from '../../functions/Game14Functions';

const gameData14 = {
  id: 14,
  title: 'Contract Factory',
  description: `Anticipate contract deployments in Solidity. Calculate and predict with accuracy. 
                You need to understand how a smart contract address is calculated and calculate the address 
                where the SomeContract contract will be deployed.`,
  code: `
                // SPDX-License-Identifier: MIT
                pragma solidity ^0.8.10;
                
                contract Factory {
                    SomeContract[] public SomeContracts;
                    bool public correctPrediction;
                    uint256 public _salt = 1;
                    bytes public byte1 = type(SomeContract).creationCode;
            
                    function checkAddress(address _addr, uint256 _sal, bytes memory _bytecode)
                        external
                        pure
                        returns (address)
                    {
                        bytes32 result = keccak256(
                            abi.encodePacked(
                                bytes1(0xff),
                                address(_addr),
                                _sal,
                                keccak256(_bytecode)
                            )
                        );
                        return address(uint160(uint256(result)));
                    }
            
                    function deploy(address _add) external {
                        require(_add != address(0), "Address must not be null");
                        bytes32 salt = bytes32(_salt);
                        SomeContract someContract = (new SomeContract){salt: salt}();
                        SomeContracts.push(someContract);
                        if (address(SomeContracts[0]) == _add) {
                            correctPrediction = true;
                        }
                        require(correctPrediction, "not correct");
                    }
                }
              `,
  code1: `
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.10;
    
    contract SomeContract {
      /*
            ~~~~                                       ~~~~
        ~~                                           ~~
          ~~                                           ~~
        ~~                                            ~~
          ~~                                           ~~
        ________                                     _______
       /  |   | \\                                  / |   | \\
      / __|___|__\\                                /__|___|__\\
     / ||_|___|_||\\                              /||_|___|_||\\
    /              \\                            /             \\
   /                \\                          /               \\
  /__________________\\ ______________________ /_________________\\
  |   ____________    ||   ____    ____     ||   ____________    |
  |  |            |   ||  |    |  |    |    ||  |            |   |
  |  |____________|   ||  |____|  |____|    ||  |____________|   |
  |                   ||                    ||                   |
  |   _____________   ||   _____________    ||   _____________   |
  |  |             |  ||  |             |   ||  |             |  |
  |  |   _     _   |  ||  |   _     _   |   ||  |   _     _   |  |
  |  |  | |   | |  |  ||  |  | |   | |  |   ||  |  | |   | |  |  |
  |__|__| |___| |__|__||__|__| |___| |__|___||__|__| |___| |__|__|
      */
    }`,
  abi: InstanceABI,
  badgeId: 14,
  hint: 'Calculate the deployed address: keccak256(abi.encodePacked(bytes1(0xff), address(this), salt, keccak256(bytecode))).',
  functions: [
    {
      label: 'Correct Prediction',
      functionName: 'correctPrediction',
      buttonText: 'Fetch Correct Prediction',
      inputs: [],
    },
    {
      label: 'Salt',
      functionName: 'Saltt',
      buttonText: 'Fetch Salt',
      inputs: [],
    },
    {
      label: 'Bytecode',
      functionName: 'bytecode',
      buttonText: 'Fetch Bytecode',
      inputs: [],
    },
    {
      label: 'Check Address',
      functionName: 'checkAddress',
      buttonText: 'Check Address',
      inputs: [
        { name: '_addr', placeholder: 'Enter Address' },
        { name: '_sal', placeholder: 'Enter Salt' },
        { name: '_bytecode', placeholder: 'Enter Bytecode' },
      ],
    },
    {
      label: 'Deploy Contract',
      functionName: 'Deploy',
      buttonText: 'Deploy',
      inputs: [{ name: 'Add', placeholder: 'Enter Address' }],
    },
  ],
};

const Game14 = () => (
  <GameTemplateCard gameData={gameData14} gameFunctions={{ correctPrediction, Saltt, bytecode, checkAddress, Deploy }} />
);

export default Game14;
