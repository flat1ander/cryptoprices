// Import useparams hook from react-router-dom
import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react';
import React from 'react';

const Price = (props) => {
    const apiKey = 'FFD61A9A-FD94-4EA7-83A1-171720E3C0C0'
    // grab the currency symbol from the URL params
    const params = useParams()
    const symbol = params.symbol
    // Using the other two variables to create our URL
    const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

    //state to hold the coin data
    const [coin, setCoin] = React.useState('null');

    //make the api call
    const getCoin = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setCoin(data);
    }

    //call the function when the component mounts for the first time
    useEffect(() => {
        getCoin();
    }, []) // means it's an empty dependency array, so it will only run once

    // loaded function for when data is fetched
    const loaded = () => {
        return(
        <div>
            <h1>
                {coin.asset_id_base}/{coin.asset_id_quote}
            </h1>
            <h2>{coin.rate}</h2>
        </div>
        );
    };

    // function for when data doesn't exist
    const loading = () => {
        return <h2>Loading...</h2>
    }

    return coin ? loaded() : loading()
}


export default Price