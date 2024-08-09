import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('One Punch');
    
  const onInputChange = ({target})  => {
    console.log(target.value);
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    // setCategories(categories => [...categories,inputValue]);
    setInputValue('');
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
        <input
        type='taxt'
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={onInputChange}
        />
    </form>
    
  )
}