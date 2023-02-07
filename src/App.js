import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coins from "./components/Coins";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Coin from "./pages/Coin";
import Page from 'react-page-loading';


function App() {

  

  const [coins, setCoins] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  
  
  useEffect(() => {
    
      const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${pageNumber}&sparkline=false`;
      axios
        .get(url)
        .then( (response) => {
          setCoins(response.data);
          console.log(response.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
        
  }, [pageNumber]);

  
  return (
    <>
      <Page loader={"spin"} color={"#A9A9A9"} size={10}>
      <Navbar />
      <Routes>
        <Route
          path="/axio_api_project_crypto"
          element={<Coins coins={coins} />}
        />
        <Route path="/axio_api_project_crypto/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
      <div className="container cointainer-btn">
        <div className="cointainer-btn-pad">
          <button className="btn" onClick={ () => setPageNumber(pageNumber - 1)}>
            Previous Page
          </button>
        </div>
        <div className="cointainer-btn-pad">
          <button className="btn" onClick={ () => setPageNumber(pageNumber + 1)}>
            Next Page
          </button>
        </div>
      </div>
      </Page>
    </>
  );
}

export default App;
