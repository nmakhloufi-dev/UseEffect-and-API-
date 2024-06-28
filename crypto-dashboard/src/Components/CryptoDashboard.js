import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptoList from './CryptoList';

const CryptoDashboard = () => {
    const [cryptos, setCryptos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.coinranking.com/v2/coins', {
                    headers: {
                        'x-rapidapi-key': 'coinranking47b801243fb70f7e7915102516d0be7f22af2f31926c3b59',
                        'x-rapidapi-host': 'api.coinranking.com'
                    }
                });
                setCryptos(response.data.data.coins);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching the data', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return <CryptoList cryptos={cryptos} />;
};

export default CryptoDashboard;
