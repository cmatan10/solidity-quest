// web3ModalConfig.js
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { configureChains, createClient } from 'wagmi';
import { polygonMumbai, sepolia } from 'wagmi/chains';

const chains = [polygonMumbai, sepolia]; // Add any other chains as needed

const { provider } = configureChains(chains, [w3mProvider({ projectId: '9ea74fc0-0f80-4bc4-b98f-d6d4e256d34f' })]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId: '9ea74fc0-0f80-4bc4-b98f-d6d4e256d34f', version: 1, chains }),
  provider,
});

const ethereumClient = new EthereumClient(wagmiClient, chains);

export { wagmiClient, ethereumClient };
