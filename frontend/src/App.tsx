import { useState } from 'react';
import { mint } from './Web3Service'

function App() {

  const [message, setMessage] = useState("");

  function OnConnectMetamaskClick() {
    setMessage("Requesting your tokens... Wait...");
    mint()
      .then((tx) => setMessage(`Your tokens were sent. Tr: ${tx}`))
      .catch(err => setMessage(err.message))
  }

  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="mb-auto">
        <div>
          <h3 className="float-md-start mb-0">EsfCoin Faucet</h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <a className="nav-link fw-bold py-1 px-0 active" aria-current="page" href="#">Home</a>
            <a className="nav-link fw-bold py-1 px-0" href="#">About</a>
          </nav>
        </div>
      </header>

      <main className="px-3">
        <h1>Get your ESFCoins</h1>
        <p className="lead">Once a day, earn 1.000 coins for free just connecting your MetaMask below.</p>
        <p className="lead">
          <a href="#" onClick={OnConnectMetamaskClick} className="btn btn-lg btn-light fw-bold border-white bg-white">
            <img src="/assets/metamask.svg" width={48} /> Connect MetaMask</a>
        </p>
        <p className='lead'>
          {message}
        </p>
      </main>

      <footer className="mt-auto text-white-50">
        <p>Built by <a href="https://github.com/EduardoSilva09" className="text-white">Eduardo</a>.</p>
      </footer>
    </div>
  );
}

export default App;