// import Link component from router
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <div className = 'nav'>
            <Link to='/'>
                <div>Crypto Prices</div>
            </Link>
            <Link to='/currencies'>
                <div>Currencies</div>
            </Link>
        </div>
    )
}

export default Nav