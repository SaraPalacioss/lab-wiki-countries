import React from 'react';
import Countries from '../countries.json';
import { Link, Route, Switch, Redirect } from 'react-router-dom';

const CountriesList = (props) => {
  console.log(Countries)
  return (
    <div>
      {Countries.map((name) => {
        return (
          <ul class="list-group smooth-scroll list-unstyled">
            <li class="list-group-item list-group-item-action">
              <Link to="/country-details/:id">
                {name.flag} {name.name.common}
              </Link>

              <Switch>
              <Route path="/country-details/:id"/>            
                </Switch>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default CountriesList;
