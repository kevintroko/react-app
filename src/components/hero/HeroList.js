import React from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroByPublisher';

export const HeroList = ({publisher = 'Marvel Comics'}) => {
    console.log(publisher);

    const heores = getHeroesByPublisher(publisher);

    return (  
        <>
            <ul>
                {
                    heores.map(hero => (
                        <li key={hero.id}>
                            { hero.superhero }
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
