// src/functions/Game4Functions.js
/* eslint-disable no-underscore-dangle */

export const checkPayableGame = async (toast, instanceContract, inputValues, walletAddress, nftContract, badgeId, web3) => {
  try {
    const bal = await web3.eth.getBalance(instanceContract.options.address);
    if (bal === '1') {
      toast('Well done! You have solved this level!', {
        autoClose: 5000,
      });
    }

    const balance = await nftContract.methods.balanceOf(walletAddress, badgeId).call();
    if (balance < 1) {
      await nftContract.methods.mint(badgeId, instanceContract.options.address).send({ from: walletAddress });
      toast.success('Minting completed successfully!');
    }
  } catch (err) {
    console.error('Error in checkPayableGame function:', err);
    toast.error(`Transaction failed: ${err.message}`);
  }
};
