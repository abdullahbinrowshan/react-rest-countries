import React from 'react';
import "./Country.css"

const Country = ({country}) => {
    const {region, area, name, population, flags} = country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>Name: {name.common} </h2>
            <p>Population: {population} </p>
            <p>Region: {region} </p>
            <p><small>Area: {area} </small></p>
        </div>
    );
};

export default Country;