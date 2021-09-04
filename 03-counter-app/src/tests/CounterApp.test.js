import React from 'react';
import {shallow} from 'enzyme';

import {CounterApp} from '../CounterApp';

describe('Pruebas <CounterApp />', () => {

    let wrapper = shallow( <CounterApp /> );

    // Execute after each test
    beforeEach( () =>  {

        wrapper = shallow( <CounterApp /> );
    });
    
    // snapshot
    test('debe de mostrar <CounterApp /> correctamente', () => {
       
        expect( wrapper ).toMatchSnapshot();

    });

    // default value
    test('debe de mostrar el valor por defecto de 100 ', () => {
        
        const wrapper = shallow( <CounterApp numero={ 100 } /> );

        const counterText = wrapper.find('h2').text().trim();
   
        expect( counterText ).toBe('100');

    });

    // counter ++
    test('Debe de incrementar con el botón de +1', () => {
        
        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('11');
    });

    // counter --
    test('Debe de decrementar con el botón de -1', () => {
        
        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('9');
    });

    //Reset
    test('Debe de resetear el valor del counter', () => {
        
        const wrapper = shallow( <CounterApp numero={ 105 } /> );

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('105');
    
    });
    
});
