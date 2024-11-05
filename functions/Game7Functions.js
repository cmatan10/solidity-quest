/* eslint-disable no-restricted-globals */
// src/functions/Game7Functions.js

export const changePassword = async (toast, instanceContract, inputValues, walletAddress, nftContract, badgeId) => {
  const { _password, newPassword } = inputValues;

  if (isNaN(Number(_password)) || isNaN(Number(newPassword))) {
    toast.error('Invalid password! Both passwords must be numbers.');
    return;
  }

  try {
    await instanceContract.methods.changePassword(_password, newPassword).send({ from: walletAddress });
    toast.success('Password changed successfully!');

    const balance = await nftContract.methods.balanceOf(walletAddress, badgeId).call();
    if (balance < 1) {
      await nftContract.methods.mint(badgeId, instanceContract.options.address).send({ from: walletAddress });
      toast.success('Badge minted successfully!');
    }
  } catch (error) {
    toast.error(`Password change failed: ${error.message}`);
  }
};

export const previousPassword = async (toast, instanceContract, inputValues) => {
  const { num } = inputValues;

  try {
    const previousPasswordValue = await instanceContract.methods.PreviousPassword(num).call();
    toast.info(`Previous Password: ${previousPasswordValue}`);
  } catch (error) {
    toast.error('Failed to fetch previous password.');
  }
};
