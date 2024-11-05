/* eslint-disable no-restricted-globals */
// src/functions/Game6Functions.js

export const complexOperation = async (toast, instanceContract, inputValues, walletAddress, nftContract, badgeId) => {
  const { iterations } = inputValues;

  if (isNaN(iterations)) {
    toast.error('Invalid iteration count!');
    return;
  }

  try {
    await instanceContract.methods.complexOperation(iterations).send({ from: walletAddress });
    const gas = await instanceContract.methods.gasUsed().call();

    if (gas > 3000 && gas < 5000) {
      toast.success('Well done! You have solved this level!');
      const balance = await nftContract.methods.balanceOf(walletAddress, badgeId).call();
      if (balance < 1) {
        await nftContract.methods.mint(badgeId, instanceContract.options.address).send({ from: walletAddress });
        toast.success('Badge minted successfully!');
      }
    }
  } catch (error) {
    toast.error(`Complex operation failed: ${error.message}`);
  }
};

export const gasUsed = async (toast, instanceContract) => {
  try {
    const gasUsedValue = await instanceContract.methods.gasUsed().call();
    toast.info(`Gas Used: ${gasUsedValue}`);
  } catch (err) {
    toast.error('Failed to fetch gas usage.');
  }
};

export const gasChecked = async (toast, instanceContract) => {
  try {
    const gasCheckedValue = await instanceContract.methods.GasChecked().call();
    toast.info(`Gas Checked: ${gasCheckedValue}`);
  } catch (err) {
    toast.error('Failed to fetch GasChecked status.');
  }
};
