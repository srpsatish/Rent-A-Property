import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/header/Navbar';
import Buy from './pages/buy/Buy';
import FavoritePage from './pages/favorite/FavoritePage';
import HomePage from './pages/home/HomePage';
import Rent from './pages/rent/Rent';
import Sell from './pages/sell/Sell';

function App() {
  return (
    <div style={{ backgroundColor: '#185abc10' }}>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/rent' element={<Rent />} />
        <Route path='/buy' element={<Buy />} />
        <Route path='/sell' element={<Sell />} />
        <Route path='/favorite' element={<FavoritePage />} />
      </Routes>
    </div>
  );
}

export default App;
