import { useState } from "react";
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";
import {AddCategory, GifGrid} from './components'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One punch','Dragon ball']);
  
  const onAddCategory  = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }

  return (
    <>
        <h1>GiftExpertApp</h1>
        <AddCategory 
          onNewCategory = {onAddCategory}
        />
        <ol>
          {
          categories.map( (category) => (
             <GifGrid 
              key={category} 
              category={category}
            />
          ))
          }
        </ol>
    </>
  )
};