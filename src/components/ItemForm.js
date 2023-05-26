import React, {useState} from "react";
import { v4 as uuid } from "uuid";



function ItemForm({onItemFormSubmit}) {
  const [name, setName] = useState("");
  function submitName(e){
    setName(e.target.value);
  }

  const [category, setCategory] = useState("Produce");
  function submitCategory(e){
    setCategory(e.target.value);
  }

  const newItem = {
    id: uuid(),
    name: name,
    category: category,
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onItemFormSubmit(newItem);

  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={submitName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={submitCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
