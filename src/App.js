import './App.css';
// Import Route and Routes
import { Route, Routes } from 'react-router-dom';
// Import the rest of our components
import Currencies from './pages/Currencies';
import Main from './pages/Main';
import Price from './pages/Price';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/currencies' element={<Currencies />} />
        <Route path='/price' element={<Price />} />
      </Routes>
    </div>
  );
}

export default App;
