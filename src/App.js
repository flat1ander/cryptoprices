import './App.css';
// Import Route and Routes
import { Route, Routes } from 'react-router-dom';
// Import the rest of our components
import Currencies from './pages/Currencies';
import Main from './pages/Main';
import Price from './pages/Price';
import Nav from './Components/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/currencies' element={<Currencies />} />
        <Route path='/price/:symbol' element={<Price />} />
        {/* {{symbol: 'BTC'}} */}
      </Routes>
    </div>
  );
}

export default App;
