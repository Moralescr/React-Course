import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas en GifgridItem', () => {

    const title = 'Un título';
    const url = 'https://localhost/algo';
    const wrapper = shallow(<GifGridItem title = {title} url = {url}/>);


    test('Pruebas de mostrar componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })


    test('Debe de tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);  
    })


    test('Debe de tener la imagen igual al del url y alt', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe( url );  
        expect(img.prop('alt')).toBe( title );  
    })

    test('Debe de tener el animate__fadeIn', () => {
        
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
    })
    
});