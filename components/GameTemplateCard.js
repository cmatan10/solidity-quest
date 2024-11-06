/* eslint-disable react/jsx-closing-tag-location */
// src/components/GameTemplateCard.js

import React, { useState, useEffect, useContext, useRef } from 'react';
import { Button, Container, Card, CardBody, CardTitle, FormGroup, Input } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import { Navbar } from '.';
import 'react-toastify/dist/ReactToastify.css';
import { Web3Context } from '../web3/Web3provider';

const GameTemplateCard = ({ gameData, gameFunctions }) => {
  const [inputValues, setInputValues] = useState({});
  const [InstanceAddress, setInstanceAddress] = useState('');
  const [InstanceAddress2, setInstanceAddress2] = useState('');
  const [TokenBalance, setTokenBalance] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [instanceContract, setInstanceContract] = useState(null);
  const [instanceContract2, setInstanceContract2] = useState(null);
  const [isHintVisible, setIsHintVisible] = useState(false);
  const [transactionHash, setTransactionHash] = useState(null);
  const codeRef = useRef(null);

  const { walletAddress, factoryContract, nftContract, web3 } = useContext(Web3Context);

  const toggleHint = () => setIsHintVisible(!isHintVisible);

  useEffect(() => {
    if (web3 && web3.utils.isAddress(InstanceAddress)) {
      setInstanceContract(new web3.eth.Contract(gameData.abi, InstanceAddress));
    }
    if (web3 && gameData.abi2 && web3.utils.isAddress(InstanceAddress2)) {
      setInstanceContract2(new web3.eth.Contract(gameData.abi2, InstanceAddress2));
    }
  }, [InstanceAddress, InstanceAddress2, web3, gameData.abi, gameData.abi2]);

  useEffect(() => {
    const fetchTokenBalance = async () => {
      if (walletAddress && nftContract) {
        const balance = await nftContract.methods.balanceOf(walletAddress, gameData.badgeId).call();
        setTokenBalance(balance);
      }
    };
    fetchTokenBalance();
  }, [walletAddress, nftContract, gameData.badgeId]);

  const handleInputChange = (event, inputName) => {
    setInputValues({ ...inputValues, [inputName]: event.target.value });
  };

  const createGameInstance = async () => {
    try {
      setIsLoading(true);
      const receipt = await factoryContract.methods.deploy(gameData.id).send({ from: walletAddress });
      const deployInstanceEvent = receipt.events.DeployInstance;

      if (deployInstanceEvent) {
        setInstanceAddress(web3.utils.toChecksumAddress(`0x${receipt.logs[0].topics[1].slice(-40)}`));

        // Check if there's a second contract to deploy
        if (gameData.abi2 && receipt.logs[1]) {
          setInstanceAddress2(web3.utils.toChecksumAddress(`0x${receipt.logs[1].topics[1].slice(-40)}`));
        }

        if (gameData.showTransactionHash) {
          setTransactionHash(receipt.transactionHash);
        }
        toast.success('Game instance(s) created successfully!');
      } else {
        toast.error('Game creation failed.');
      }
    } catch (err) {
      toast.error('Game creation failed. Please ensure your wallet is connected.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFunctionExecution = (funcName, func) => {
    func(toast, instanceContract, inputValues, walletAddress, nftContract, gameData.badgeId, web3, instanceContract2);
  };

  return (
    <Container className="bg-primary-black overflow-hidden" style={{ paddingBottom: '30px', minHeight: '100vh' }}>
      <Navbar />
      <ToastContainer />
      <h1 className="game-title title-color" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <b>{gameData.title}</b>
      </h1>

      {/* Display Code Block */}
      <Card className="game-card" style={{ backgroundColor: '#000000', color: 'white', marginBottom: '20px' }}>
        <CardBody>
          <div>
            <CopyToClipboard text={gameData.code}>
              <Button className="button-copy">Copy code</Button>
            </CopyToClipboard>
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} ref={codeRef} customStyle={{ margin: '0' }}>
              {gameData.code}
            </SyntaxHighlighter>
          </div>
        </CardBody>
      </Card>
      {gameData.code1 && (
        <Card className="game-card" style={{ backgroundColor: '#000000', color: 'white', marginBottom: '20px' }}>
          <CardBody>
            <div>
              <CopyToClipboard text={gameData.code1}>
                <Button className="button-copy">Copy code</Button>
              </CopyToClipboard>
              <SyntaxHighlighter style={vscDarkPlus} ref={codeRef} customStyle={{ margin: '0' }}>
                {gameData.code1}
              </SyntaxHighlighter>
            </div>
          </CardBody>
        </Card>
      )}

      {/* Game Description and Create Instance Button */}
      <Card className="game-card" style={{ backgroundColor: '#000000', color: 'white', marginBottom: '20px' }}>
        <CardBody>
          <CardTitle className="desc-title title-color"><b>Game Description</b></CardTitle>
          <p>{gameData.description}</p>
          <br />
          <Button onClick={createGameInstance} className="flex h-fit py-2 px-4 bg-[#25618B] rounded-[12px] gap-[6px]" style={{ backgroundColor: '#c97539', color: 'white' }}>
            {isLoading ? 'Creating...' : 'Create Instance'}
          </Button>
        </CardBody>
      </Card>

      {/* Display Instance Address */}
      {InstanceAddress && !isLoading && (
      <Card className="game-card" style={{ backgroundColor: '#000000', color: 'white', marginBottom: '20px' }}>
        <CardBody>
          <h3 className="desc-title title-color"><b>Your Instance Address:</b></h3>
          <p style={{ wordBreak: 'break-all', color: '#c97539' }}>{InstanceAddress}</p>
          {instanceContract2 && (
            <><h3 className="desc-title title-color"><b>Your Hacking Instance Address:</b></h3><p style={{ wordBreak: 'break-all', color: '#c97539' }}>{InstanceAddress2}</p></>
          )}
        </CardBody>
      </Card>
      )}

      {/* Game Hint */}
      {InstanceAddress && !isLoading && gameData.hint && (
      <>
        <Button
          onClick={toggleHint}
          className="flex h-fit py-2 px-4 bg-[#25618B] rounded-[12px] gap-[6px]"
          style={{ backgroundColor: '#355f7d', color: 'white', marginBottom: '17px', marginLeft: '12px' }}
        >
          {isHintVisible ? 'Hide Hint' : 'Show Hint'}
        </Button>
        {isHintVisible && (
        <Card className="game-card" style={{ backgroundColor: '#000000', color: 'white', marginTop: '10px' }}>
          <CardBody>
            <CardTitle className="desc-title title-color"><b>Hint</b></CardTitle>
            <p>
              {gameData.hint}
              {gameData.showTransactionHash && transactionHash && (
              <span style={{ wordBreak: 'break-all', color: '#c97539' }}> {transactionHash}.</span>
              )}
              {gameData.hintLink && (
              <span> You can read more <a href={gameData.hintLink} target="_blank" rel="noopener noreferrer" style={{ color: '#c97539' }}>here</a>.</span>
              )}
              {gameData.hintLink2 && (
              <span> and <a href={gameData.hintLink2} target="_blank" rel="noopener noreferrer" style={{ color: '#c97539' }}>here</a>.</span>
              )}
            </p>
          </CardBody>
        </Card>
        )}
      </>
      )}

      {/* Game Functions */}
      {InstanceAddress && !isLoading && gameData.functions.map((func, index) => (
        <Card key={index} className="game-card" style={{ backgroundColor: '#000000', color: 'white', marginBottom: '20px' }}>
          <CardBody>
            <CardTitle className="desc-title title-color"><b>{func.label}</b></CardTitle>
            {func.inputs.map((input, idx) => (
              <><FormGroup key={idx}>
                <Input
                  className="py-1 rounded-[12px]"
                  style={{ color: 'black' }}
                  placeholder={input.placeholder}
                  onChange={(event) => handleInputChange(event, input.name)}
                />
              </FormGroup><br /></>
            ))}
            <Button
              className="flex h-fit py-2 px-4 bg-[#25618B] rounded-[12px] gap-[6px]"
              style={{ backgroundColor: '#355f7d', color: 'white' }}
              onClick={() => handleFunctionExecution(func.functionName, gameFunctions[func.functionName])}
            >
              {func.buttonText}
            </Button>
          </CardBody>
        </Card>
      ))}

      {/* Badge Display */}
      {TokenBalance > 0 && (
        <div style={{ textAlign: 'center', color: '#c97539', marginTop: '20px' }}>
          <strong>Congratulations! You Got A Badge <i className="fas fa-medal" style={{ fontSize: '20px' }} /></strong>
        </div>
      )}
    </Container>
  );
};

export default GameTemplateCard;
