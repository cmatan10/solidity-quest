/* eslint-disable no-underscore-dangle */

export const fixMe = async (toast, instanceContract) => {
  try {
    const fixMeValue = await instanceContract.methods.fixMe().call();
    console.log('fixMeValue:', fixMeValue);
    toast.info(`fixMeValue: ${fixMeValue}`);
  } catch (err) {
    console.error('Error fetching fixMe state:', err);
    toast.error('Failed to fetch fixMe state.');
  }
};

export const checkFallbackGame = async (toast, instanceContract, walletAddress, nftContract, badgeId) => {
  try {
    const fixMeValue = await instanceContract.methods.fixMe().call();
    console.log('fixMeValue:', fixMeValue);
    if (fixMeValue) {
      toast.success('Fallback game completed!');

      const balance = await nftContract.methods.balanceOf(walletAddress, badgeId).call();
      console.log(`fixMeValue: ${balance}`);
      if (balance < 1) {
        await nftContract.methods.mint(badgeId, instanceContract._address).send({ from: walletAddress });
        toast.success('Badge minted successfully!');
      }
    } else {
      toast.error('Fallback game not yet completed.');
    }
  } catch (err) {
    toast.error('checkFallbackGame function failed.');
    console.error(err);
  }
};
