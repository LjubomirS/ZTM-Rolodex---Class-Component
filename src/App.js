import { useState, useEffect } from 'react';

import CardList from "./components/card-list/card-list.component.jsx"
import SearchBox from "./components/search-box/search-box.component.jsx"
import './App.css';


const App = ()=>{
  
  const [searchField, setSearchField]= useState('');
  const [bubice, setBubice]= useState([]);
  const [filteredBubice, setFilteredBubice] = useState(bubice);

  console.log('render');
  
  useEffect(()=>{
    console.log('effect fired');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=> setBubice(users));
  }, []);

  useEffect(()=>{
    const newFilteredBubice = bubice.filter((bubica)=>{
      return bubica.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredBubice(newFilteredBubice)
  }, [bubice, searchField]);
  
  const onSearchChange = (event)=>{
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
    }

  return(
    <div className="App">

        <h1 className="titleStyle">Bubice Rolodex</h1>
        
        <SearchBox 
        onChangeHandler={ onSearchChange } 
        placeholder='search bubice'
        className='bubice-search-box' 
        />

        <CardList bubice= {filteredBubice} />

      </div>
  )
}

export default App;
