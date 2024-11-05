/* eslint-disable no-restricted-globals */
// src/functions/Game8Functions.js

export const add = async (toast, instanceContract, inputValues, walletAddress, nftContract, badgeId) => {
  const { value } = inputValues;

  if (isNaN(Number(value))) {
    toast.error('Invalid input! Please enter a number.');
    return;
  }

  try {
    await instanceContract.methods.add(Number(value)).send({ from: walletAddress });
    toast.success('Value added successfully!');
    const overflowStatus = await instanceContract.methods.overflowOccurred().call();
    if (overflowStatus === true) {
      const balance = await nftContract.methods.balanceOf(walletAddress, badgeId).call();
      if (balance < 1) {
        await nftContract.methods.mint(badgeId, instanceContract.options.address).send({ from: walletAddress });
        toast.success('Badge minted successfully!');
      }
    }
  } catch (error) {
    console.error('Error in add function:', error);
    toast.error(`Add operation failed: ${error.message}`);
  }
};

export const counter = async (toast, instanceContract) => {
  try {
    const counterValue = await instanceContract.methods.counter().call();
    toast.info(`Counter value is: ${counterValue}`);
  } catch (err) {
    toast.error('Fetching counter value failed.');
    console.error(err);
  }
};

export const overflowOccurred = async (toast, instanceContract) => {
  try {
    const overflowStatus = await instanceContract.methods.overflowOccurred().call();
    toast.info(`Overflow occurred: ${overflowStatus ? 'True' : 'False'}`);
  } catch (err) {
    toast.error('Checking overflow status failed.');
    console.error(err);
  }
};
