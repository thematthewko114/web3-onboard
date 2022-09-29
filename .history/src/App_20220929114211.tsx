import React from 'react'
import { init, useConnectWallet } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'
import { ethers } from 'ethers'

// Sign up to get your free API key at https://explorer.blocknative.com/?signup=true
const dappId = '1730eff0-9d50-4382-a3fe-89f0d34a2070'

const injected = injectedModule()

const infuraKey = '<INFURA_KEY>'
const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`

// initialize Onboard
init({
  wallets: [injected],
  chains: [
    {
      id: '0x507',
      token: 'DEV',
      label: 'Moonbase Alpha',
      rpcUrl: "https://moonbase-alpha.public.blastapi.io/"
    }
  ]
})

function App() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()

  // create an ethers provider
  let ethersProvider

  if (wallet) {
    ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any')
  }

  return (
    <div>
      <button disabled={connecting} onClick={() => (wallet ? disconnect : connect())}>
        {connecting ? 'connecting' : wallet ? 'disconnect' : 'connect'}
      </button>
    </div>
  )
}

export default App