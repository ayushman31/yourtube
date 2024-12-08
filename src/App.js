import { Provider, useSelector } from "react-redux";
import "../src/App.css"
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";
import Premium from "./components/Premium";
import { Buffer } from 'buffer';
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import Login from "./components/Login";

window.Buffer = Buffer;


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: 'watch',
        element: <WatchPage />
      },
      {
        path: 'demo',
        element: <><Demo /><Demo2 /></>
      },
      {
        path: 'premium',
        element: <Premium />
      }
    ]
  },
  {
    path: 'login',
    element: <Login />
  }
]);


function App() {
  const isPremium = useSelector((state) => state.premium.isPremium);
 
  return (
    
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div className={`App min-h-screen overflow-hidden ${isPremium ? 'bg-purple-950' : 'bg-purple-100'}`}>
              <Head />
              <RouterProvider router={appRouter} />
            </div>
          </WalletModalProvider> 
        </WalletProvider>
      </ConnectionProvider>
  );
}


export default App;
