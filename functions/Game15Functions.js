// src/functions/Game15Functions.js

export const calculateXOR = async (toast, instanceContract, inputValues, walletAddress, nftContract, badgeId) => {
  const { id } = inputValues;

  try {
    await instanceContract.methods.calculateXOR(id).send({ from: walletAddress, gas: 700000 });
    toast.success('XOR calculation completed successfully!');

    const balance = await nftContract.methods.balanceOf(walletAddress, badgeId).call();
    if (balance < 1) {
      await nftContract.methods.mint(badgeId, instanceContract.options.address).send({ from: walletAddress });
      toast.success('Badge minted successfully!');
    }
  } catch (error) {
    console.error('Error in calculateXOR function:', error);
    toast.error(`XOR calculation failed: ${error.message}`);
  }
};

export const contractInterface = async (toast, instanceContract) => {
  try {
    const interfaceStatus = await instanceContract.methods.contractInterface().call();
    toast.info(`Contract interface status: ${interfaceStatus ? 'True' : 'False'}`);
  } catch (error) {
    console.error('Error in contractInterface function:', error);
    toast.error('Fetching contract interface status failed.');
  }
};

export const selector1 = async (toast, instanceContract) => {
  try {
    const selector = await instanceContract.methods.selector1().call();
    toast.info(`Selector 1: ${selector}`);
  } catch (error) {
    console.error('Error in selector1 function:', error);
    toast.error('Fetching Selector 1 failed.');
  }
};

export const selector2 = async (toast, instanceContract) => {
  try {
    const selector = await instanceContract.methods.selector2().call();
    toast.info(`Selector 2: ${selector}`);
  } catch (error) {
    console.error('Error in selector2 function:', error);
    toast.error('Fetching Selector 2 failed.');
  }
};
