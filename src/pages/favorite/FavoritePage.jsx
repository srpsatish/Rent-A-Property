import React from 'react';
import PropertyItem from '../../components/property-item/PropertyItem';
import './favorite.scss';

const FavoritePage = ({ favProperties, addfn }) => {
  return (
    <div className='fav-container'>
      <div className='title'>Your Favorite Properties</div>
      <div className='fav-list'>
        {favProperties.map(fav => (
          <PropertyItem key={fav.id} property={fav} addfn={addfn} />
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
