/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';
describe('GifExpertApp', () => {
  const setup = () => {
    render(<GifExpertApp />);
    return {
      input: screen.getByRole('textbox'),
      form: screen.getByRole('form'),
    };
  };
  test('debe mostrar las categorías iniciales', () => {
    render(<GifExpertApp />);
    expect(screen.getByText('One punch')).not.toBeNull();
    expect(screen.getByText('Dragon ball')).not.toBeNull();
  });

  test('debe agregar una nueva categoría', () => {
    const { input, form } = setup();
    const inputValue = 'Naruto'
    fireEvent.input( input, {target:{value: inputValue}} );
    fireEvent.submit(form);
    expect( input.value ).toBe('');
    const addedCategory = screen.queryByText(inputValue);
    expect(addedCategory).not.toBeNull();
  });

  test('no debe agregar una categoría duplicada', () => {
    const { input, form } = setup();
    const inputValue = 'One punch'
    fireEvent.input( input, {target:{value: inputValue}} );
    fireEvent.submit(form);
    const categories = screen.getAllByText('One punch');
    expect(categories).toHaveLength(1);
  });
});
