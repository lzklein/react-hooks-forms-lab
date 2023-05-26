import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items , setItems}) {

  const onItemFormSubmit = (newItem) => {
    return setItems([...items, newItem])
  }
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  const [search, setSearchItem] = useState ("");
  function onSearchChange(e){
    setSearchItem(e.target.value)
  }

  const categoryDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  const itemsToDisplay = categoryDisplay.filter((item) => {
    if (search === "") return true;
    return item.name.toLowerCase().includes(search.toLowerCase())
  })


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
