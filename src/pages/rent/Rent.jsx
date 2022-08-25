import React, { useState } from 'react';
import Drop from '../../assets/chevron.png';
import FilledButton from '../../components/custom-buttons/FilledButton';
import './rent.scss';

const Rent = () => {
  const [searchInput, setSearchInput] = useState('');
  const [location, setLocation] = useState('New Work, USA');
  const [moveinDate, setMoveinDate] = useState('2022-08-25');
  const [price, setPrice] = useState('$500-$2,500');
  const [propertyType, setPropertyType] = useState('House');
  // useEffect(() => {
  //   console.log(location);
  //   console.log(moveinDate);
  //   console.log(price);
  //   console.log(propertyType);
  // }, [location, moveinDate, price, propertyType]);
  return (
    <div className='rent-container'>
      <div className='rent-head'>
        <div className='title'>Search properties to rent</div>
        <div className='search-bar'>
          <input
            type='text'
            placeholder='SearchwithSearchBar'
            className='search-input'
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
          />
          <img src={Drop} alt='drop-down' className='drop-down' />
        </div>
      </div>
      <div className='filter-section'>
        <div className='filter-item'>
          <label>Location</label>
          <input
            type='text'
            placeholder='Enter Location'
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </div>
        <div className='filter-item'>
          <label>When</label>
          <input
            type='date'
            placeholder='Select Move-in Date'
            value={moveinDate}
            onChange={e => setMoveinDate(e.target.value)}
          />
        </div>
        <div className='filter-item'>
          <label htmlFor='price'>Price</label>
          <select
            name='price'
            id='price'
            value={price}
            onChange={e => setPrice(e.target.value)}
          >
            <option value='$500-$2,500'>$500-$2,500</option>
            <option value='$2,500-$5,000'>$2,500-$5,000</option>
            <option value='$5,000-$10,000'>$5,000-$10,000</option>
            <option value='$10,000-$20,000'>$10,000-$20,000</option>
            <option value='$20,000-$30,000'>$20,000-$30,000</option>
          </select>
        </div>
        <div className='filter-item'>
          <label htmlFor='propertytype'>Property Type</label>
          <select
            name='propertytype'
            id='propertytype'
            value={propertyType}
            onChange={e => setPropertyType(e.target.value)}
          >
            <option value='House'>House</option>
            <option value='Apartment'>Apartment</option>
            <option value='Flat'>Flat</option>
            <option value='Villas'>Villas</option>
            <option value='condos'>condos</option>
            <option value='Townhouse'>Townhouse</option>
            <option value='duplex'>duplex</option>
          </select>
        </div>
        <div className='filter-item'>
          <FilledButton>Search</FilledButton>
        </div>
      </div>
      <div className='preview-section'></div>
    </div>
  );
};

export default Rent;