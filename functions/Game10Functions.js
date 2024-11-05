// src/functions/Game10Functions.js

export const CalcMe = async (toast, instanceContract, inputValues, walletAddress, nftContract, badgeId) => {
  const { id } = inputValues;
  const inputId = id.startsWith('0x') ? id : `0x${id}`;

  if (!/^0x[0-9A-Fa-f]{8}$/.test(inputId)) {
    toast.error('Invalid input! Please provide a valid bytes4 hexadecimal string.');
    return;
  }

  try {
    await instanceContract.methods.CalcMe(inputId).send({ from: walletAddress });
    toast.success('CalcMe function executed successfully!');

    const isAnswerCorrect = await instanceContract.methods.answer().call();
    if (isAnswerCorrect) {
      const balance = await nftContract.methods.balanceOf(walletAddress, badgeId).call();
      if (balance < 1) {
        await nftContract.methods.mint(badgeId, instanceContract.options.address).send({ from: walletAddress });
        toast.success('Badge minted successfully!');
      }
    }
  } catch (error) {
    console.error('Error in CalcMe function:', error);
    toast.error(`CalcMe operation failed: ${error.message}`);
  }
};

export const answer = async (toast, instanceContract) => {
  try {
    const answerStatus = await instanceContract.methods.answer().call();
    toast.info(`Answer is: ${answerStatus ? 'True' : 'False'}`);
  } catch (err) {
    toast.error('Fetching answer status failed.');
    console.error(err);
  }
};
