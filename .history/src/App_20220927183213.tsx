import React from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from "web3";
import Web3Modal from "web3modal";

function App() {
  const providerOptions = {
    /* See Provider Options Section */
  };
  const [provider, setProvider] = React.useState(null)
  
  const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions // required
  });
  React.useEffect(()=> {
    const init = async() => {
      const provider = await web3Modal.connect();
      setProvider(provider)
    }
    init()
  }, [])
  
  const web3 = new Web3(provider);
  return (
    <div className="App">
      <header className="App-header">
        <button>Click Me</button>
      </header>
    </div>
  );
}

export default App;
