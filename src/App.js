import { useState } from 'react';
import './App.css';
import Category from './Category';
import Hulk from './Game';
function App() {
  const [chosenCategory,setChosenCategory] = useState({bool:false});
  const getData = (data) => {
    setChosenCategory(data); 
  }
  return (
    <div className="App">
      <div className='container'>
          { chosenCategory.bool  ? <Hulk Cat={chosenCategory.choosenCategory} /> : <Category onSubmit={getData} /> }
      </div>
    </div>
  );
}
export default App;
