// import Link
import { Link } from 'react-router-dom';

 const currencies = [
		{ name: 'Bitcoin', symbol: 'BTC' },
		{ name: 'Litecoin', symbol: 'LTC' },
		{ name: 'Ethereum', symbol: 'ETH' },
		{ name: 'Ethereum Classic', symbol: 'ETC' },
		{ name: 'Stellar Lumens', symbol: 'XLM' },
		{ name: 'Dash', symbol: 'DASH' },
		{ name: 'Ripple', symbol: 'XRP' },
		{ name: 'Zcash', symbol: 'ZEC' },
 ];


const Currencies = (props) => {
    return (
        <div className='currencies'>
            {currencies.map((coin, index) => {
                // object destructure name and symbol
                const { name, symbol } = coin
                return (
                    <Link to={`/price/${symbol}`}>
                        <h2>{name}</h2>
                    </Link>
                )
            })}
        </div>
    );
}

export default Currencies;