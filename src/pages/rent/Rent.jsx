import React, { useEffect, useState } from 'react';
import Drop from '../../assets/chevron.png';
import FilledButton from '../../components/custom-buttons/FilledButton';
import PropertyPreview from './../../components/property-preview/PropertyPreview';
import './rent.scss';

const Rent = ({ properties, addfn }) => {
  const [searchInput, setSearchInput] = useState('');
  const [location, setLocation] = useState('IN');
  const [moveinDate, setMoveinDate] = useState('2022-08-25');
  const [price, setPrice] = useState('500-2,500');
  const [propertyType, setPropertyType] = useState('House');

  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    const newProperty = properties.filter(property => {
      const regex = new RegExp(`${searchInput}`, 'gi');
      return (
        property.name.match(regex) ||
        property.costpm.match(regex) ||
        property.address.match(regex)
      );
    });
    setFilteredProperties(newProperty);
  }, [searchInput, properties]);

  const handleSearch = () => {
    // const prices = price.split('-');
    // const lprice = prices[0].split(',').join('');
    // const hprice = prices[1].split(',').join('');
    const newProp = properties.filter(property => {
      const regex = new RegExp(`${location}`, 'gi');
      return property.name.match(regex) || property.address.match(regex);
    });
    // const newProp1 = newProp.filter(
    //   prop =>
    //     prop.costpm.split(',').join('') > lprice &&
    //     prop.costpm.split(',').join('') < hprice
    // );
    setFilteredProperties(newProp);
  };
  useEffect(() => {
    console.log(filteredProperties);
  }, [filteredProperties]);
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
          <label htmlFor='price'>Price(in $)</label>
          <select
            name='price'
            id='price'
            value={price}
            onChange={e => setPrice(e.target.value)}
          >
            <option value='500-2,500'>500-2,500</option>
            <option value='2,500-5,000'>2,500-5,000</option>
            <option value='5,000-10,000'>5,000-10,000</option>
            <option value='10,000-20,000'>10,000-20,000</option>
            <option value='20,000-30,000'>20,000-30,000</option>
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
          <FilledButton onClick={() => handleSearch()}>Search</FilledButton>
        </div>
      </div>
      <div className='preview-section'>
        <PropertyPreview properties={filteredProperties} addfn={addfn} />
      </div>
    </div>
  );
};

export default Rent;
