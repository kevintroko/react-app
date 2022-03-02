import { heroes } from '../data/heroes';

export const getHeroById = ( id = '') => {
    console.log('get');
    return heroes.find(hero => hero.id === id);
}
