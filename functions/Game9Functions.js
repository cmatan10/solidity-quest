/* eslint-disable no-restricted-globals */
// src/functions/Game9Functions.js

export const blockHashCheck = async (toast, instanceContract, inputValues, walletAddress, nftContract, badgeId) => {
  const { blockNumber, blockHash } = inputValues;

  if (isNaN(Number(blockNumber)) || blockHash.length !== 66 || !blockHash.startsWith('0x')) {
    toast.error('Invalid input! Enter a valid block number and a block hash in hexadecimal format.');
    return;
  }

  try {
    await instanceContract.methods.blockHashCheck(Number(blockNumber), blockHash).send({ from: walletAddress });
    toast.success('Block hash checked successfully!');
    const correctBlockHash = await instanceContract.methods.correctBlockHash().call();
    if (correctBlockHash) {
      const balance = await nftContract.methods.balanceOf(walletAddress, badgeId).call();
      if (balance < 1) {
        await nftContract.methods.mint(badgeId, instanceContract.options.address).send({ from: walletAddress });
        toast.success('Badge minted successfully!');
      }
    }
  } catch (error) {
    console.error('Error in blockHashCheck function:', error);
    toast.error(`Block hash verification failed: ${error.message}`);
  }
};

export const correctBlockHash = async (toast, instanceContract) => {
  try {
    const correctBlockHashStatus = await instanceContract.methods.correctBlockHash().call();
    toast.info(`Correct block hash: ${correctBlockHashStatus ? 'True' : 'False'}`);
  } catch (err) {
    toast.error('Fetching block hash status failed.');
    console.error(err);
  }
};
