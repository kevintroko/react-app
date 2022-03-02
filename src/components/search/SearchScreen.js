import React from 'react';
import queryString from 'query-string';

import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroByName } from '../../selectors/getHeroByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const [formValue, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValue;
  const filteredHeros = getHeroByName(q);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchText);
    navigate(`?q=${searchText}`);
};

  return (
    <>
      <h1>Search Screen</h1>
      <hr />

      <div className='row'>
        {/* Left */}
        <div className='col-5'>
          <h4>Search</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="search hero"
              className='form-control'
              name="searchText"
              autoComplete='off'
              value={searchText}
              onChange={handleInputChange}/>

            <button 
              type="submit"
              className='btn btn-outline-primary mt-2 btn-block'>
              Submit
            </button>
          </form>
        </div>

        {/* Right */}
        <div className='col-7'>
          <h4>Results</h4>
          <hr />

          {
            filteredHeros.map(
              hero => (
                <HeroCard key={hero.id} {...hero}/>
              )
            )
          }
        </div>
      </div>
    </>
  )
}
