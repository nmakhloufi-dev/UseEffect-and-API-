// src/components/CryptoList.js
import React from 'react';

const CryptoList = ({ cryptos }) => {
    return (
        <div>
            <h1>Crypto Dashboard</h1>
            <ul>
                {cryptos.map(crypto => (
                    <li key={crypto.uuid}>
                        {crypto.name} - ${parseFloat(crypto.price).toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CryptoList;
