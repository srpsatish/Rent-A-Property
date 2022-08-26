import React from 'react';
import PropertyItem from './../property-item/PropertyItem';
import './propertypreview.scss';

const PropertyPreview = ({ properties, addfn }) => {
  return (
    <div className='property-list'>
      {properties.map(property => (
        <PropertyItem key={property.id} property={property} addfn={addfn} />
      ))}
    </div>
  );
};

export default PropertyPreview;
