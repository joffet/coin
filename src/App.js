import "./App.css";
import { useEffect, useState, useRef } from "react";
import { displayNumber } from "./shared";

function App() {
  const [coinData, setCoinData] = useState([]);
  const intervalId = useRef();

  const filterCoinData = (data = []) => {
    const filteredData = [];

    data.forEach((rawRow) => {
      const filteredRow = [];
      const keys = Object.keys(rawRow);
      keys.forEach((key) => {
        if (["name", "symbol"].includes(key)) {
          filteredRow[key] = rawRow[key];
        } else if (key === "circulating_supply") {
          filteredRow[key] = displayNumber(rawRow[key]);
        } else if (key === "quote" && !!rawRow.quote.USD) {
          const data = rawRow.quote.USD;
          filteredRow["price"] = displayNumber(data.price);
          filteredRow["market_cap"] = displayNumber(data.market_cap);
          filteredRow["percent_change_24h"] = displayNumber(
            data.percent_change_24h
          );
        }
      });
      filteredData.push(filteredRow);
    });
    return filteredData;
  };

  useEffect(() => {
    const getApi = async () => {
      console.log("getting");
      const response = await fetch("http://localhost:4000/get");
      const responseObj = await response.json();
      console.log("setting");
      setCoinData(responseObj.data);
    };
    getApi();
    intervalId.current = setInterval(getApi, 60000);
  }, []);

  const getChangeClass = (string) => {
    const num = parseInt(string);
    if (num > 0) return "bubble pos-change";
    return "bubble neg-change";
  };

  const getArrowClass = (string) => {
    const num = parseInt(string);
    if (num > 0) return "arrow-up";
    return "arrow-down";
  };

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Market Cap</th>
            <th scope="col">Circulating Supply</th>
            <th scope="col">Change % (24h)</th>
          </tr>
        </thead>
        <tbody>
          {coinData?.length > 0 &&
            filterCoinData(coinData).map((row, i) => (
              <tr key={i}>
                <td>
                  <div className="row-header">
                    <div style={{ fontWeight: "bold" }}>{row.name}</div>
                    <div style={{ fontSize: 6 }}>{row.symbol}</div>
                  </div>
                </td>
                <td>${row.price}</td>
                <td>${row.market_cap}</td>
                <td>{row.circulating_supply}</td>
                <td>
                  <div className={getChangeClass(row.percent_change_24h)}>
                    <div className={getArrowClass(row.percent_change_24h)} />
                    {row.percent_change_24h.replace("-", "")}
                  </div>
                </td>
              </tr>
            ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
