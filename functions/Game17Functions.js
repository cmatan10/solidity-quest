// src/functions/Game17Functions.js

export const random = async (toast, instanceContract, inputValues, walletAddress) => {
  const { Gusess } = inputValues;

  try {
    await instanceContract.methods.random(Gusess).send({ from: walletAddress });
    toast.success('Guess sent successfully!');
  } catch (error) {
    console.error('Error in random function:', error);
    toast.error('Sending guess failed.');
  }
};

export const correctGuess = async (toast, instanceContract) => {
  try {
    const isCorrect = await instanceContract.methods.correctGuess().call();
    toast.info(`Correct Guess: ${isCorrect}`);
  } catch (error) {
    console.error('Error in correctGuess function:', error);
    toast.error('Fetching correct guess status failed.');
  }
};

export const attack = async (toast, instanceContract, inputValues, walletAddress, nftContract, badgeId, web3, instanceContract2) => {
  const { Target, attackerContract, Num } = inputValues;

  try {
    await instanceContract2.methods.attack(Target, attackerContract, Num).send({ from: walletAddress });
    toast.success('Attack executed successfully!');
  } catch (error) {
    console.error('Error in attack function:', error);
    toast.error('Attack failed.');
  }
};

export const checkEducatedGuess = async (toast, instanceContract, inputValues, walletAddress, nftContract, badgeId) => {
  try {
    const isCorrectGuess = await instanceContract.methods.correctGuess().call();

    if (isCorrectGuess) {
      toast.success('Correct guess! Mission complete.');
      const balance = await nftContract.methods.balanceOf(walletAddress, badgeId).call();
      if (balance < 1) {
        await nftContract.methods.mint(badgeId, instanceContract.options.address).send({ from: walletAddress });
        toast.success('Badge minted successfully!');
      }
    } else {
      toast.error("You don't have the correct guess.");
    }
  } catch (error) {
    console.error('Error in checkEducatedGuess function:', error);
    toast.error('Checking educated guess failed.');
  }
};
