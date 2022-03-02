import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher = 'Marvel Comics'}) => {
    const heros = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (  
        <div className='row row-cols-1 row-cols-md-3 animate__animated animate__fadeIn'>
            <ul className='mt-4'>
                {
                    heros.map(hero => (
                       <HeroCard 
                        key={hero.id} 
                        {...hero}/>
                    ))
                }
            </ul>
        </div>
    )
}
