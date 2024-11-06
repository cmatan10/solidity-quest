/* eslint-disable no-shadow */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
import { createContext, useState, useEffect } from 'react';
import Web3 from 'web3';
import gameABI from '../interfaces/GameFactory.json';
import nftABI from '../interfaces/NFTbadge';

export const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState('');
  const [Chain, setChain] = useState('');
  const [factoryContract, setFactoryContract] = useState(null);
  const [nftContract, setNftContract] = useState(null);
  const [web3, setWeb3] = useState(null);
  const [tokenIDs, setTokenIDs] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      setWeb3(new Web3(window.ethereum));
    }
  }, []);
  const contractAddresses = {
    1440002: { // Xrp network
      gameAddress: '0xa7169fDC282c990b510E2d6428bBC0ED1F7f1EfE',
      nftAddress: '0x1319a2fff9189496b5420256a0b19bBD36aed6eB',
    },
    80002: { // Amoy network
      gameAddress: '0x41Ba2b107DF51e61519b7b975a25bC4DF7eD5D06',
      nftAddress: '0xf55754207c6d8Ed08fD0C5be3D00a4B581718A6a',
    },
    11155111: { // Sepolia network
      gameAddress: '0x0f5841D53526aBdF15ef77c790aCd7839D86D9d0',
      nftAddress: '0x1D5916eF2922d6783aF201A25af034d5024fA2f0',
    },
  };

  const switchChain = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${(11155111).toString(16)}` }],
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        console.log('This chain does not exist on the user wallet.');
      } else {
        console.error('Switch Chain Error:', switchError);
      }
    }
  };

  useEffect(() => {
    if (nftContract) {
      updateAchievements(walletAddress);
    }
  }, [nftContract, walletAddress]);

  const updateAchievements = async (walletAddress) => {
    if (!nftContract) {
      console.error('nftContract is null');
      return;
    }
    const tempTokenIDs = [];
    for (let index = 1; index <= 17; index++) {
      try {
        const balance = await nftContract.methods.balanceOf(walletAddress, index).call();
        if (balance > 0) {
          tempTokenIDs.push(index);
        }
      } catch (e) {
        console.error(`Failed to fetch balance for token ${index} on network ${Chain}. Error: ${e.message}`);
      }
    }
    return setTokenIDs(tempTokenIDs);
  };

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: 'eth_accounts',
        });
        const chainId = parseInt(window.ethereum.chainId, 16);
        setChain(chainId);
        setWalletAddress(accounts[0] || '');
      }
    };
    init();
  }, []);

  useEffect(() => {
    if (Chain) {
      const addresses = contractAddresses[Chain];
      if (addresses) {
        const gameContract = new web3.eth.Contract(gameABI, addresses.gameAddress);
        const nftContractInstance = new web3.eth.Contract(nftABI, addresses.nftAddress);
        console.log('gameContract:', gameContract);
        console.log('nftContractInstance:', nftContractInstance);
        setFactoryContract(gameContract);
        setNftContract(nftContractInstance);
      } else {
        console.log(`No contract addresses available for chain ID: ${Chain}`);
      }
    }
  }, [Chain]);

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: 'eth_accounts',
        });
        const chainId = parseInt(window.ethereum.chainId, 16);
        setChain(chainId);
        setWalletAddress(accounts[0] || '');
      }
    };
    init();
  }, []);

  useEffect(() => {
    const handleAccountsChanged = async (accounts) => {
      console.log(accounts);
      console.log(accounts[0]);
      setWalletAddress(accounts[0]);
    };

    const handleChainChanged = (chainId) => {
      const decimalChainId = parseInt(chainId, 16);
      setChain(decimalChainId);
    };

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      }
    };
  }, []);

  useEffect(() => {
    if (walletAddress) {
      localStorage.setItem('walletAddress', walletAddress);
    }
  }, [walletAddress]);

  const requestAccount = async () => {
    console.log('Requesting account...');

    // Check if in MetaMask browser or mobile
    const isMetaMaskBrowser = window.ethereum && window.ethereum.isMetaMask;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile && !isMetaMaskBrowser) {
      // Redirect to MetaMask deeplink if not already in MetaMask browser
      window.location.href = 'https://metamask.app.link/dapp/solidity-quest.vercel.app/';
      return;
    }

    if (window.ethereum) {
      const chainId = parseInt(window.ethereum.chainId, 16);
      setChain(chainId);
      console.log(chainId);

      // Switch chain if it's not one of the desired chains
      if (chainId !== 80002 && chainId !== 1440002 && chainId !== 11155111) {
        await switchChain();
      }

      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('Ethereum provider not found');
    }
  };

  const finalMint = async () => {
    try {
      await nftContract.methods.finalMint().send({
        from: walletAddress,
        gas: 700000,
      })
        .once('error', (err) => {
          console.log(err);
        })
        .once('receipt', async () => {
          const balance = await nftContract.methods.balanceOf(walletAddress, 18).call();
          console.log(balance);
        });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Web3Context.Provider value={{ Chain, walletAddress, factoryContract, nftContract, web3, tokenIDs, requestAccount, finalMint }}>
      {children}
    </Web3Context.Provider>
  );
};
