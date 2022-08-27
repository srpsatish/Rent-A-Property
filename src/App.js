import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/header/Navbar';
import Buy from './pages/buy/Buy';
import FavoritePage from './pages/favorite/FavoritePage';
import Rent from './pages/rent/Rent';
import Sell from './pages/sell/Sell';

function App() {
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: 'Palm Harbor',
      costpm: '5,095',
      imguri: require('./assets/property1.jpg'),
      address: '2699 Green valley, Highland Lake, FL',
      bed: 3,
      bathroom: 2,
      size: '5x7',
      fav: true,
      populor: true,
    },
    {
      id: 2,
      name: 'Beverly Springfield',
      costpm: '2,700',
      imguri: require('./assets/property2.jpg'),
      address: '2821 Lake Sevilla, Palm Harbor, TX',
      bed: 4,
      bathroom: 2,
      size: '6x7.5',
      fav: false,
      populor: true,
    },
    {
      id: 3,
      name: 'Faulkner Ave',
      costpm: '2,450',
      imguri: require('./assets/property3.jpg'),
      address: '909 Woodland St. Michigan, IN',
      bed: 4,
      bathroom: 3,
      size: '8x10',
      fav: false,
      populor: true,
    },
    {
      id: 4,
      name: 'Beverly Harbor',
      costpm: '20,195',
      imguri: require('./assets/property4.jpg'),
      address: '2699 Green valley, Highland Lake, FL',
      bed: 3,
      bathroom: 2,
      size: '5x7',
      fav: false,
      populor: true,
    },
    {
      id: 5,
      name: 'Springfield Palm',
      costpm: '12,095',
      imguri: require('./assets/property5.jpeg'),
      address: '2821 Lake Sevilla, Palm Harbor, TX',
      bed: 4,
      bathroom: 2,
      size: '7x10',
      fav: true,
      populor: true,
    },
    {
      id: 6,
      name: 'Emaar the palm spring',
      costpm: '12,095',
      imguri: require('./assets/property6.png'),
      address: 'sector-54, Gurgaon, IN',
      bed: 4,
      bathroom: 2,
      size: '7x10',
      fav: false,
      populor: true,
    },
    {
      id: 7,
      name: 'Jambusavari dinne',
      costpm: '12,095',
      imguri: require('./assets/property7.jpg'),
      address: 'Sector-34, Noida, IN',
      bed: 4,
      bathroom: 2,
      size: '7x10',
      fav: true,
      populor: true,
    },
    {
      id: 8,
      name: 'TMR Blossom',
      costpm: '12,095',
      imguri: require('./assets/property2.jpg'),
      address: '2821 Lake Sevilla, Palm Harbor, TX',
      bed: 4,
      bathroom: 2,
      size: '7x10',
      fav: false,
      populor: true,
    },
    {
      id: 9,
      name: 'power Grid Township',
      costpm: '12,095',
      imguri: require('./assets/property1.jpg'),
      address: '2821 Lake Sevilla, Palm Harbor, TX',
      bed: 4,
      bathroom: 2,
      size: '7x10',
      fav: false,
      populor: true,
    },
    {
      id: 10,
      name: 'SRP Blossom',
      costpm: '12,095',
      imguri: require('./assets/property3.jpg'),
      address: '2821 Lake Sevilla, Palm Harbor, TX',
      bed: 4,
      bathroom: 2,
      size: '7x10',
      fav: true,
      populor: true,
    },
  ]);

  const handleFavChange = (id, value) => {
    const newstate = properties.map(obj => {
      if (obj.id === id) {
        return { ...obj, fav: value };
      }
      return obj;
    });
    setProperties(newstate);
  };
  const [favProperties, setFavProperties] = useState([]);
  useEffect(() => {
    const newfav = properties.filter(item => item.fav === true);
    setFavProperties(newfav);
  }, [properties]);

  // useEffect(() => {
  //   console.log(properties);
  // }, [properties]);
  return (
    <div style={{ backgroundColor: '#185abc10' }}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to='/rent' replace />} />
        <Route
          path='/rent'
          element={<Rent properties={properties} addfn={handleFavChange} />}
        />
        <Route path='/buy' element={<Buy />} />
        <Route path='/sell' element={<Sell />} />
        <Route
          path='/favorite'
          element={
            <FavoritePage
              favProperties={favProperties}
              addfn={handleFavChange}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
