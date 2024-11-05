// src/functions/Game16Functions.js

export const claimTickets = async (toast, instanceContract, inputValues, walletAddress) => {
  const { receiver, ticketAmount } = inputValues;

  try {
    await instanceContract.methods.claimTickets(receiver, ticketAmount).send({ from: walletAddress });
    toast.success('Claiming was completed successfully!');
  } catch (error) {
    console.error('Error in claimTickets function:', error);
    toast.error('Claiming tickets failed.');
  }
};

export const Count = async (toast, instanceContract, inputValues) => {
  const { inputCounter } = inputValues;

  try {
    const count = await instanceContract.methods.Count(inputCounter).call();
    toast.info(`Ticket Count for ${inputCounter}: ${count}`);
  } catch (error) {
    console.error('Error in Count function:', error);
    toast.error('Fetching ticket count failed.');
  }
};

export const maxTicketsPerAddress = async (toast, instanceContract) => {
  try {
    const maxTickets = await instanceContract.methods.maxTicketsPerAddress().call();
    console.log(maxTickets);
    toast.info(`Max Tickets Per Address: ${maxTickets}`);
  } catch (error) {
    console.error('Error in maxTicketsPerAddress function:', error);
    toast.error('Fetching max tickets per address failed.');
  }
};

export const attack = async (toast, instanceContract, inputValues, walletAddress, nftContract, badgeId, web3, instanceContract2) => {
  const { target, attacker, ticketAmount } = inputValues;

  try {
    await instanceContract2.methods.attack(target, attacker, ticketAmount).send({ from: walletAddress });
    toast.success(`Attack executed! ${ticketAmount} tickets attempted to claim.`);
  } catch (error) {
    console.error('Error in attack function:', error);
    toast.error('Attack failed.');
  }
};

export const checkLimitedTickets = async (toast, instanceContract, inputValues, walletAddress, nftContract, badgeId) => {
  try {
    const userTicketsCount = await instanceContract.methods.Count(walletAddress).call();
    if (userTicketsCount > 3) {
      toast.success('Congratulations! You met the ticket requirement!');

      const balance = await nftContract.methods.balanceOf(walletAddress, badgeId).call();
      if (balance < 1) {
        await nftContract.methods.mint(badgeId, instanceContract.options.address).send({ from: walletAddress });
        toast.success('Badge minted successfully!');
      }
    } else {
      toast.error("You don't have enough tickets.");
    }
  } catch (error) {
    console.error('Error in checkLimitedTickets function:', error);
    toast.error('Checking limited tickets failed.');
  }
};
