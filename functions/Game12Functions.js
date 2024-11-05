// src/functions/Game12Functions.js

export const findCollision = async (toast, instanceContract, inputValues, walletAddress, nftContract, badgeId) => {
  const { guess } = inputValues;

  if (!/^0x[0-9A-Fa-f]*$/.test(guess)) {
    toast.error('Invalid input! Please enter a hexadecimal guess.');
    return;
  }

  try {
    await instanceContract.methods.findCollision(guess).send({ from: walletAddress });
    toast.success('Collision found successfully!');

    const balance = await nftContract.methods.balanceOf(walletAddress, badgeId).call();
    if (balance < 1) {
      await nftContract.methods.mint(badgeId, instanceContract.options.address).send({ from: walletAddress });
      toast.success('Badge minted successfully!');
    }
  } catch (error) {
    console.error('Error in findCollision function:', error);
    toast.error(`Collision operation failed: ${error.message}`);
  }
};

export const secretHash = async (toast, instanceContract) => {
  try {
    const secretHashValue = await instanceContract.methods.secretHash().call();
    toast.info(`Secret Hash: ${secretHashValue}`);
  } catch (err) {
    toast.error('Fetching secret hash failed.');
    console.error(err);
  }
};

export const collisionFound = async (toast, instanceContract) => {
  try {
    const collisionStatus = await instanceContract.methods.collisionFound().call();
    toast.info(`Collision Found: ${collisionStatus ? 'True' : 'False'}`);
  } catch (err) {
    toast.error('Checking collision status failed.');
    console.error(err);
  }
};
