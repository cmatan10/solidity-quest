/* eslint-disable no-restricted-globals */
// src/functions/Game13Functions.js

export const decode = async (toast, instanceContract, inputValues, walletAddress, nftContract, badgeId) => {
  const { _str, _num } = inputValues;

  if (isNaN(Number(_num))) {
    toast.error('Invalid input! Please enter a valid number.');
    return;
  }

  try {
    await instanceContract.methods.decode(_str, Number(_num)).send({ from: walletAddress });
    toast.success('Data decoded successfully!');

    const balance = await nftContract.methods.balanceOf(walletAddress, badgeId).call();
    if (balance < 1) {
      await nftContract.methods.mint(badgeId, instanceContract.options.address).send({ from: walletAddress });
      toast.success('Badge minted successfully!');
    }
  } catch (error) {
    console.error('Error in decode function:', error);
    toast.error(`Decoding operation failed: ${error.message}`);
  }
};

export const encodeStringAndUint = async (toast, instanceContract) => {
  try {
    const encodedData = await instanceContract.methods.encodeStringAndUint().call();
    toast.info(`Encoded data: ${encodedData}`);
  } catch (err) {
    toast.error('Fetching encoded data failed.');
    console.error(err);
  }
};

export const player = async (toast, instanceContract) => {
  try {
    const playerData = await instanceContract.methods.player().call();
    toast.info(`Player data: ${JSON.stringify(playerData, (key, value) => (typeof value === 'bigint' ? value.toString() : value))}`);
  } catch (err) {
    toast.error('Fetching player data failed.');
    console.error(err);
  }
};
