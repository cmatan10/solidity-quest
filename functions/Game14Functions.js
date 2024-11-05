/* eslint-disable no-underscore-dangle */
// src/functions/Game14Functions.js

export const correctPrediction = async (toast, instanceContract) => {
  try {
    const prediction = await instanceContract.methods.correctPrediction().call();
    toast.info(`Correct Prediction: ${prediction ? 'True' : 'False'}`);
  } catch (error) {
    toast.error('Failed to fetch correct prediction.');
    console.error(error);
  }
};

export const Saltt = async (toast, instanceContract) => {
  try {
    const saltValue = await instanceContract.methods._salt().call();
    toast.info(`Salt: ${saltValue}`);
  } catch (error) {
    toast.error('Failed to fetch salt.');
    console.error(error);
  }
};

export const bytecode = async (toast, instanceContract) => {
  try {
    const bytecodeValue = await instanceContract.methods.bytecode().call();
    toast.info(`Bytecode: ${bytecodeValue}`);
  } catch (error) {
    toast.error('Failed to fetch bytecode.');
    console.error(error);
  }
};

export const checkAddress = async (toast, instanceContract, inputValues) => {
  const { _addr, _sal, _bytecode } = inputValues;

  try {
    const addressResult = await instanceContract.methods.checkAddress(_addr, Number(_sal), _bytecode).call();
    toast.info(`Checked Address: ${addressResult}`);
  } catch (error) {
    toast.error('Failed to check address.');
    console.error(error);
  }
};

export const Deploy = async (toast, instanceContract, inputValues, walletAddress, nftContract, badgeId) => {
  const { Add } = inputValues;

  try {
    await instanceContract.methods.deploy(Add).send({ from: walletAddress });
    toast.success('Contract deployed successfully!');

    const balance = await nftContract.methods.balanceOf(walletAddress, badgeId).call();
    if (balance < 1) {
      await nftContract.methods.mint(badgeId, instanceContract.options.address).send({ from: walletAddress });
      toast.success('Badge minted successfully!');
    }
  } catch (error) {
    console.error('Error in Deploy function:', error);
    toast.error(`Deployment failed: ${error.message}`);
  }
};
