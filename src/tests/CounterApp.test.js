import { render } from '@testing-library/react';
import CounterApp from '../CounterApp';
import React from 'react';
import {shallow} from 'enzyme'

describe('Prueba en <CounterApp/>', () => {
    let wrapper = shallow(<CounterApp/>);

    beforeEach(() => {
        wrapper = shallow(<CounterApp/>);
    });

    test('Debe mostrar el <CounterApp/> correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe mostrar el valor por defecto de 100', () => {
        const wrapper = shallow(<CounterApp value={100}/>)

        const counter = wrapper.find('h2').text().trim();
        // console.log(counter);

        expect(counter).toBe('100');
    })

    test('Debe de incrementar con el botón de +1', () => {
        const btn1 = wrapper.find('button').at(0).simulate('click');
        const counter = wrapper.find('h2').text().trim();

        expect( counter ).toBe('11');

    })

    test('Debe de restar con el botón de -1', () => {
        const btn3 = wrapper.find('button').at(2).simulate('click');
        const counter = wrapper.find('h2').text().trim();

        expect( counter ).toBe('9');

    })

    test('Debe de volver al valor inicial con el Reset', () => {
        const wrapper = shallow(<CounterApp value={105}/>)

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counter = wrapper.find('h2').text().trim();

        expect(counter).toBe('105');
    })
    
    
})
