import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../pages/coin.css";
import DOMPurify from "dompurify";

const Coin = () => {
  const Params = useParams();

  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${Params.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="coin-cointainer">
      <div className="content">
        <h1>{coin.name}</h1>
      </div>
      <div className="content">
        <div className="rank">
          <span className="rank-btn">Rank # {coin.market_cap_rank}</span>
        </div>
        <div className="info">
          <div className="coin-heading">
            {coin.image ? <img src={coin.image.small} alt="" /> : null}
            <p>{coin.name}</p>
            {coin.symbol ? <p>{coin.symbol.toUpperCase()}</p> : null}
            
          </div>
          <div className="coin-price">
            {coin.market_data ? (
              <h2>${coin.market_data.current_price.usd.toLocaleString()}</h2>
            ) : null}
          </div>
        </div>
      </div>
      <div className="content">
        <table>
          <thead>
            <tr>
              <th>1H</th>
              <th>24H</th>
              <th>7D</th>
              <th>14D</th>
              <th>30D</th>
              <th>1Y</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >
                {" "}
                {coin.market_data ? (
                  <p>
                    
                    {coin.market_data.price_change_percentage_1h_in_currency.usd.toLocaleString()}%
                  </p>
                ) : null}
              </td>
              <td>
                {" "}
                {coin.market_data ? (
                  <p>
                    
                    {coin.market_data.price_change_percentage_24h_in_currency.usd.toLocaleString()}%
                  </p>
                ) : null}
              </td>
              <td>
                {" "}
                {coin.market_data ? (
                  <p>
                    
                    {coin.market_data.price_change_percentage_7d_in_currency.usd.toLocaleString()}%
                  </p>
                ) : null}
              </td>
              <td>
                {" "}
                {coin.market_data ? (
                  <p>
                    
                    {coin.market_data.price_change_percentage_14d_in_currency.usd.toLocaleString()}%
                  </p>
                ) : null}
              </td>
              <td>
                {" "}
                {coin.market_data ? (
                  <p>
                    
                    {coin.market_data.price_change_percentage_30d_in_currency.usd.toLocaleString()}%
                  </p>
                ) : null}
              </td>
              <td>
                {" "}
                {coin.market_data ? (
                  <p>
                    
                    {coin.market_data.price_change_percentage_1y_in_currency.usd.toLocaleString()}%
                  </p>
                ) : null}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="content">
        <div className="stats">
          <div className="lef">
            <div className="row">
              <h4>24 Hour Low</h4>
              {coin.market_data ? (
                  <p>
                    $
                    {coin.market_data.low_24h.usd.toLocaleString()}
                  </p>
                ) : null}
            </div>
            <div className="row">
              <h4>24 Hour High</h4>
              {coin.market_data ? (
                  <p>
                    $
                    {coin.market_data.high_24h.usd.toLocaleString()}
                  </p>
                ) : null}
            </div>
          </div>
          <div className="right">
            <div className="row">
              <h4>Total Supply</h4>
              {coin.market_data?.max_supply ? (<p>$ {coin.market_data.max_supply.toLocaleString()}</p>) : "No Data"}
            </div>
            <div className="row">
              <h4>Market Cap</h4>
              $ {coin.market_data ? (coin.market_data.market_cap.usd.toLocaleString()) : null}
            </div>
          </div>
        </div>

      </div>
      <div className="content">
        <div className="about">
          <h3 className="desc">About : </h3>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                coin.description ? coin.description.en : ""
              ),
            }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
