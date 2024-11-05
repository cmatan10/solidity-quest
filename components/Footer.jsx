/* eslint-disable no-undef */

'use client';

import { motion } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { socials } from '../constants';
import { Web3Context } from '../web3/Web3provider';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => {
  const { finalMint, walletAddress, nftContract } = useContext(Web3Context);
  const [isGameCompleted, setIsGameCompleted] = useState(false); // State to track if game is completed

  useEffect(() => {
    const checkBalance = async () => {
      if (nftContract && walletAddress) {
        try {
          const balance = await nftContract.methods.balanceOf(walletAddress, 18).call();
          if (balance > 0) {
            console.log('You finished the game');
            setIsGameCompleted(true); // Set game as completed if balance > 0
          }
        } catch (error) {
          console.error('Error fetching balance:', error);
        }
      }
    };

    checkBalance();
  }, [nftContract, walletAddress]);

  const handleFinalMint = async () => {
    try {
      await finalMint(); // Call finalMint from Web3Context
      console.log('Minting successful!');
    } catch (error) {
      console.error('Minting failed:', error);
    }
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            {isGameCompleted ? 'You got a certificate' : 'Claim Final Certificate'}
          </h4>
          {!isGameCompleted && ( // Conditionally render the button if the game is not completed
            <button
              type="button"
              onClick={handleFinalMint} // Add onClick handler
              className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
            >
              <img
                src="/certificate.png"
                alt="certificate"
                className="w-[24px] h-[24px] object-contain"
              />
              <span className="font-normal text-[16px] text-white">
                Claim
              </span>
            </button>
          )}
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4
              className="font-extrabold text-[24px] text-white cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Solidity Quest
            </h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © 2021 - 2022 Matan Cohen. All rights reserved.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={social.iconUrl}
                    alt={social.name}
                    className="w-[24px] h-[24px] object-contain cursor-pointer"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
