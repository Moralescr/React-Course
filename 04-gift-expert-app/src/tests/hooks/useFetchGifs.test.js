import {renderHook} from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en Hook useFetchGifs', () =>{

    test('debe de retornar estado inicial', async() => {

        const { result, waitForNextUpdate } = renderHook( ()=> useFetchGifs('One Punch') );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
        
    })

    test('debe de retornar arreglo de imagenes y loading false', async() => {
        const { result, waitForNextUpdate } = renderHook( ()=> useFetchGifs('One Punch') );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })

})