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
    const autoLogin = async () => {
      if (web3Modal.cachedProvider) {
        await web3Modal.connect();
        login()
      }
    }
    autoLogin()
  }, [])
  const login = () => {
    const init = async() => {
      const provider = await web3Modal.connect();
      setProvider(provider)
    }
    init()

  }

  const logout = () => {
    web3Modal.clearCachedProvider();
    setProvider(null)
  }
  
  const web3 = new Web3(provider);
  return (
    <div className="App">
      <header className="App-header">
        {
          provider?(
            <button onClick={()=>logout()}>Logout</button>
          )
          :(
            <button onClick={()=>login()}>Login</button>
          )
        }
      </header>
    </div>
  );
}

export default App;
