import React from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher = 'Marvel Comics'}) => {
    console.log(publisher);

    const heores = getHeroesByPublisher(publisher);

    return (  
        <div className='row row-cols-1 row-cols-md-3'>
            <ul className='mt-4'>
                {
                    heores.map(hero => (
                       <HeroCard key={hero.id} {...hero}/>
                    ))
                }
            </ul>
        </div>
    )
}
