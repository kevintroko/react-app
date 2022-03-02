import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {
  const navigate = useNavigate();
  
  const { heroId } = useParams();
  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if (!hero) {
    return <Navigate to='/'/>
  }

  const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero;
  
  const handleReturn = () => {
      navigate(-1);
  };


  const imagePath = `/assets/${id}.jpg`;

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          src={imagePath}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"/>
      </div>

      <div className='col-8'>
        <h3>{superhero}</h3>
        <ul className='list-group list-group'>
          <li className='list-group-item'>
            <b>Alter hero: </b> {alter_ego}
          </li>
          <li className='list-group-item'>
            <b>Publisher: </b> {publisher}
          </li>
          <li className='list-group-item'>
            <b>First Appearance: </b> {first_appearance}
          </li>
          <li className='list-group-item'>
            <b>Characters: </b> {characters}
          </li>
          <button
            className='btn btn-outline-info mt-2'
            onClick={handleReturn}>
            Return
          </button>
        </ul>
      </div>
    </div>
  )
}
