import { MetaMaskProvider } from '@metamask/sdk-react';
import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, WhatsNew } from '../sections';

const Page = () => (
  <MetaMaskProvider
    debug={false}
    sdkOptions={{
      dappMetadata: {
        name: 'Example React Dapp',
        url: 'https://metamask.app.link/dapp/solidity-quest.vercel.app/',
      },
      infuraAPIKey: 'https://zksync-sepolia.g.alchemy.com/v2/FdP4lSDr9rWv0rpT9qflxHA7KyBDoEDZ',
    }}
  >
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
  </MetaMaskProvider>
);

export default Page;
