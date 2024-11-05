/* eslint-disable no-underscore-dangle */

export const increaseNum = async (toast, instanceContract, walletAddress, nftContract, badgeId, inputValues) => {
  console.log('instanceContract', instanceContract, 'inputValues', inputValues, 'walletAddress', walletAddress, 'nftContract', nftContract, 'badgeId', badgeId);

  try {
    const inputBytes2 = inputValues.Bytes2.startsWith('0x') ? inputValues.Bytes2 : `0x${inputValues.Bytes2}`;

    if (!/^0x[0-9A-Fa-f]{1,4}$/.test(inputBytes2)) {
      toast.error('Invalid input! Please provide a valid hexadecimal string (2 bytes).');
      return;
    }

    await instanceContract.methods.increaseNum(inputBytes2).send({ from: walletAddress });
    toast.success('Transaction sent successfully!');

    const balance = await nftContract.methods.balanceOf(walletAddress, badgeId).call();
    if (balance < 1) {
      await nftContract.methods.mint(badgeId, instanceContract._address).send({ from: walletAddress });
      toast.success('Badge minted successfully!');
    }
  } catch (error) {
    console.error('Error in increaseNum function:', error);
    toast.error(`Transaction failed: ${error.message}`);
  }
};

export const num = async (toast, instanceContract) => {
  try {
    const result = await instanceContract.methods.num().call();
    toast.info(`Num value is: ${result}`);
  } catch (err) {
    toast.error('Fetching num value failed.');
    console.error(err);
  }
};
