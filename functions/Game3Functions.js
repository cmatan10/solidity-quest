/* eslint-disable no-underscore-dangle */
// src/functions/Game3Functions.js

export const checkBalance = async (toast, instanceContract, walletAddress, nftContract, badgeId, inputValues, web3) => {
  const { _account, _amount } = inputValues;

  if (!web3.utils.isAddress(_account)) {
    alert('Invalid Ethereum address!');
    return;
  }
  try {
    await instanceContract.methods.checkBalance(_account, _amount).send({ from: walletAddress });
    toast.success('Balance checked successfully!');

    // Mint badge if not already owned
    const balance = await nftContract.methods.balanceOf(walletAddress, badgeId).call();
    if (balance < 1) {
      await nftContract.methods.mint(badgeId, instanceContract._address).send({ from: walletAddress });
      toast.success('Badge minted successfully!');
    }
  } catch (err) {
    toast.error('Balance check failed.');
    console.error(err);
  }
};

export const correctBalanceChecked = async (toast, instanceContract) => {
  try {
    const balanceChecked = await instanceContract.methods.correctBalanceChecked().call();
    toast.info(`Correct Balance Checked: ${balanceChecked}`);
  } catch (err) {
    toast.error('Fetching correct balance status failed.');
    console.error(err);
  }
};
