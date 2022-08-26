import React from 'react';
import Bathtub from '../../assets/bathtub.png';
import Bed from '../../assets/bed.png';
import Favfilled from '../../assets/fav-filled.png';
import Favoutline from '../../assets/fav-outline.png';
import Size from '../../assets/size.png';
import './propertyitem.scss';

const PropertyItem = ({ property, addfn }) => {
  return (
    <div className='property-container'>
      <img className='card-img' src={property.imguri} alt={property.id} />
      <div className='content'>
        <div className='cost'>
          <div>
            <span className='costpm'>{property.costpm}</span>
            <span className='month'>/month</span>
          </div>
          {property.fav ? (
            <img
              onClick={() => addfn(property.id, false)}
              className='fav-outline'
              src={Favfilled}
              alt='outlined'
            />
          ) : (
            <img
              onClick={() => addfn(property.id, true)}
              className='fav-outline'
              src={Favoutline}
              alt='outlined'
            />
          )}
        </div>
        <div className='prop-name'>{property.name}</div>
        <div className='address'>{property.address}</div>
        <div className='footer'>
          <span className='footer-item'>
            <img className='footer-icon' src={Bed} alt='bed' />
            {property.bed} Beds
          </span>
          <span className='footer-item'>
            <img className='footer-icon' src={Bathtub} alt='bathroom' />
            {property.bathroom} Bathrooms
          </span>
          <span className='footer-item'>
            <img className='footer-icon' src={Size} alt='size' />
            {property.size} m<sup>2</sup>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyItem;
