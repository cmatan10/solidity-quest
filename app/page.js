import { Web3Modal } from '@web3modal/react';
import { WagmiProvider } from 'wagmi';
import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, WhatsNew } from '../sections';
import { wagmiClient, ethereumClient } from '../web3/web3ModalConfig';
import { Web3Provider } from '../web3/Web3provider';

const Page = () => (
  <WagmiProvider client={wagmiClient}>
    <Web3Provider>
      <div className="bg-primary-black overflow-hidden">
        <Navbar />
        <div className="relative">
          <About />
          <div className="gradient-03 z-0" />
          <Explore />
        </div>
        <div className="relative">
          <GetStarted />
          <div className="gradient-04 z-0" />
          <WhatsNew />
        </div>
        <div className="relative">

          <div className="gradient-04 z-0" />
          <Feedback />
        </div>
        <Footer />
      </div>
    </Web3Provider>
    <Web3Modal projectId="9ea74fc0-0f80-4bc4-b98f-d6d4e256d34f" ethereumClient={ethereumClient} />
  </WagmiProvider>
);

export default Page;
