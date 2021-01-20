import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import React from 'react';
import {shallow} from 'enzyme'

describe('Pruebas en <Primera App/>', () => {
    // test('Debe de mostrar el mensaje "Hola, soy Goku"', () => {
    //     const saludo = "Hola, soy Goku";
    //     const {getByText} = render(<PrimeraApp saludo={saludo}/>)

    //     expect(getByText(saludo)).toBeInTheDocument();
    // })

    test('Debe de mostrar <PrimeraApp/> correctamente', () => {
        const saludo = 'Hola, soy Goku'
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);

        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, soy Goku'
        const subtitulo = 'Soy un subtítulo'
        const wrapper = shallow(
                <PrimeraApp 
                    saludo={saludo}
                    subtitulo={subtitulo}/>
        );

        const textoParrafo = wrapper.find('p').text();
        // console.log(textoParrafo);

        expect(textoParrafo).toBe(subtitulo);
    })
})
