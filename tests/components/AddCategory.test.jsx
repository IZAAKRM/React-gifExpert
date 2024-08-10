/* eslint-disable no-undef */
import { fireEvent, render,screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas em <AddCategory/>', () => {
  test('debe de cambiar el valor de la caja de texto', () => {
    render(<AddCategory onNewCategory={()=>{}}/>)

    const input = screen.getByRole('textbox');
    fireEvent.input( input, {target:{value: 'Saitama'}} );

    expect(input.value).toBe('Saitama');
    // screen.debug();
  });

  test('debe de cambiar el valor de la caja de texto', () => {
    const inputValue = 'Saitama'
    const onNewCategory = jest.fn();
    //TODO: ??
    render(<AddCategory onNewCategory={onNewCategory}/>)

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input, {target:{value: inputValue}} );
    fireEvent.submit(form);
    expect( input.value ).toBe('');
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    // screen.debug();

  });

  test('No debe de llamar el onNewCategory si el input està vacio', () => {
    const inputValue = ''
    const onNewCategory = jest.fn();
    //TODO: ??
    render(<AddCategory onNewCategory={onNewCategory}/>)

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input, {target:{value: inputValue}} );
    fireEvent.submit(form);
    expect( input.value ).toBe('');
    expect(onNewCategory).not.toHaveBeenCalled();
  });


});


