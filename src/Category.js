import { useState } from "react";
const Category = (props) => {
  const categorys = ['Language', 'Car Brand', 'Country'];
  const [choosenCategory, setChoosenCategory] = useState();
  const [bool,setBool] = useState(false);
  const handleClick = (e, data) => {
    setChoosenCategory(data);
    setBool(true);
    handleData(e);
  }
  const handleData = (e) => {e.preventDefault(); props.onSubmit({choosenCategory:choosenCategory,bool:bool})}
  return (
    <div className='category-container'>
      <div className='category-title'>Choose a category</div>
      <div className='category-item-container'>
        {categorys.map((category, key) => {
          return <button key={key} onClick={(e) => handleClick(e,category)} className='category-item'>{category}</button>
        })}</div>
    </div>
  )
}
export default Category;