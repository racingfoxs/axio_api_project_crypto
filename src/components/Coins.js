import React from "react";
import CoinItem from "./CoinItem";
import "./coins.css";
import { Link } from "react-router-dom";
import Coin from "../pages/Coin";
import Page from 'react-page-loading';


const Coins = (props) => {


  return (
    <div className="container">
      <div className="heading">
        <p>#</p>
        <p className="coin-name">Coin</p>
        <p>Price</p>
        <p>24H</p>
        <p className="hide-mobile">Volume</p>
        <p className="hide-mobile">Market Cap</p>
      </div>
     
        {props.coins.map((coins) => {
          return (
            <Link
              to={`/axio_api_project_crypto/coin/${coins.id}`}
              element={<Coin />}
              key={coins.id}
            >
              <Page loader={"spin"} color={"#A9A9A9"} size={10}>
              <CoinItem coins={coins} />
              </Page>
            </Link>
          );
        })}
    </div>
  );
};

export default Coins;
