import React from 'react';
import {shallow} from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas en componente GifExpertApp', () => {

    test('Deberia de mostrar el contenido', () => {

        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
        
    })

    test('deberia de mostrar una lista de categorias', () => {
        
        const categories = ['One Punch', 'Naruto'];
        const wrapper = shallow(<GifExpertApp defaultCategories = { categories }/>);

        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe(categories.length);
    })

})