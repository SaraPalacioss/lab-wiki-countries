import React from 'react';
import Countries from '../countries.json';


const CountriesList = () => {
console.log(Countries)
    {Countries.map((name) => {
        return (
            <div>
                <ul class="list-group">
                <li class="list-group-item">{name.common}</li>
                
              </ul>
            </div>
          );
    })}
};

export default CountriesList;
