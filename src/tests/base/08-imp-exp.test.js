import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Héroes', () => {
    test('Debe de retornar un heroe por ID', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('Debe de retornar undefine si Héroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    //debe de rtornar un arreglo con los héroes de DC
    //owner
    //toEqual al arreglo filtrado

    test('Debe de retornar un arreglo con los héroes de DC', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);

        const heroeData = heroes.filter(h => h.owner === owner);

        // console.log(heroe);

        expect(heroeData).toEqual(heroe)

    });

    //debe de retornar un arreglo con los héroes de Marvel
    //length = 2 
    //toBe

    test('Debe de retornar un arreglo con los héroes de MARVEL', () => {
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);

        const heroeData = heroes.filter(h => h.owner === owner);

        console.log(heroe);

        expect(heroeData.length).toBe(2);

    });
    
})
