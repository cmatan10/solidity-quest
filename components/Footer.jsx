import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Web3Context } from '../web3/Web3provider';
import styles from '../styles';
import { footerVariants } from '../utils/motion';
import { socials } from '../constants';

const Footer = () => {
  const { finalMint, walletAddress, nftContract, tokenIDs } = useContext(Web3Context);
  const [isGameCompleted, setIsGameCompleted] = useState(false);
  const requiredTokenIDs = Array.from({ length: 17 }, (_, i) => i + 1); // Array [1, 2, ..., 17]

  useEffect(() => {
    const checkBalance = async () => {
      if (nftContract && walletAddress) {
        try {
          const balance = await nftContract.methods.balanceOf(walletAddress, 18).call();
          if (balance > 0) {
            console.log('You finished the game');
            setIsGameCompleted(true);
          }
        } catch (error) {
          console.error('Error fetching balance:', error);
        }
      }
    };
    checkBalance();
  }, [nftContract, walletAddress]);

  const hasAllRequiredTokens = requiredTokenIDs.every((id) => tokenIDs.includes(id));

  const handleFinalMintClick = async () => {
    if (!hasAllRequiredTokens) {
      toast('To collect a final certificate you have to solve all the puzzles');
      return;
    }
    try {
      await finalMint();
      console.log('Minting successful!');
    } catch (error) {
      console.error('Minting failed:', error);
      toast.error('Minting failed. Please try again.');
    }
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <ToastContainer />
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white flex items-center justify-center text-center mx-auto">
            {isGameCompleted ? (
              <>
                You got a certificate
                <EmojiEventsIcon className="ml-2" style={{ fontSize: '64px' }} />
              </>
            ) : (
              'Claim Final Certificate'
            )}
          </h4>
          {!isGameCompleted && (
            <div
              onClick={handleFinalMintClick}
              className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] cursor-pointer"
            >
              <img
                src="/certificate.png"
                alt="certificate"
                className="w-[24px] h-[24px] object-contain"
              />
              <span className="font-normal text-[16px] text-white">Claim</span>
            </div>
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
