import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';
import { HeroCard } from './HeroCard';

export const HeroScreen = () => {
  const { heroId } = useParams();
  const hero = getHeroById(heroId);

  if (!hero) {
    return <Navigate to='/'/>
  }

  return (
    <div>
      <HeroCard key={hero.id} {...hero}/>
    </div>
  )
}
