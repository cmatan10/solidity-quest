/* eslint-disable no-restricted-globals */
// src/functions/Game5Functions.js
/* eslint-disable no-underscore-dangle */

export const timeReset = async (toast, instanceContract, walletAddress, nftContract, badgeId, inputValues) => {
  const { _Timestamp } = inputValues;

  if (isNaN(_Timestamp)) {
    alert('Invalid timestamp!');
    return;
  }

  try {
    await instanceContract.methods.timeReset(_Timestamp).send({ from: walletAddress });
    toast('Well done! You have solved this level!', { autoClose: 5000 });

    const balance = await nftContract.methods.balanceOf(walletAddress, badgeId).call();
    if (balance < 1) {
      await nftContract.methods.mint(badgeId, instanceContract.options.address).send({ from: walletAddress });
      toast.success('Minting completed successfully!');
    }
  } catch (err) {
    console.error('Error in timeReset function:', err);
    toast.error(`Time reset failed: ${err.message}`);
  }
};

export const success = async (toast, instanceContract) => {
  try {
    const result = await instanceContract.methods.success().call();
    toast.info(`Success state is: ${result}`);
  } catch (err) {
    console.error('Fetching success state failed:', err);
    toast.error('Fetching success state failed.');
  }
};
