import React from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from "web3";
import Web3Modal from "web3modal";

function App() {
  const moonbaseAlpha = {
    id: '0x507',
    token: 'DEV',
    label: 'Moonbase Alpha',
    rpcUrl: "https://rpc.api.moonbase.moonbeam.network"
  }
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
