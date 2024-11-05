/* eslint-disable no-underscore-dangle */
// src/functions/Game11Functions.js

export const encode = async (toast, instanceContract, inputValues, walletAddress, nftContract, badgeId) => {
  const { encodedData } = inputValues;

  if (!/^0x[0-9A-Fa-f]+$/.test(encodedData)) {
    toast.error('Invalid input! Please provide encoded data in hexadecimal format.');
    return;
  }

  try {
    await instanceContract.methods.encode(encodedData).send({ from: walletAddress });
    toast.success('Data encoded successfully!');

    const balance = await nftContract.methods.balanceOf(walletAddress, badgeId).call();
    if (balance < 1) {
      await nftContract.methods.mint(badgeId, instanceContract.options.address).send({ from: walletAddress });
      toast.success('Badge minted successfully!');
    }
  } catch (error) {
    console.error('Error in encode function:', error);
    toast.error(`Encoding operation failed: ${error.message}`);
  }
};

export const encodeStringAndUint = async (toast, instanceContract) => {
  try {
    const encodedResult = await instanceContract.methods._encodeStringAndUint().call();
    toast.info(`Encoded data is: ${encodedResult || 'bytes: 0x'}`);
  } catch (err) {
    toast.error('Fetching encoded data failed.');
    console.error(err);
  }
};
