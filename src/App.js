import { Component } from 'react';
import CardList from "./components/card-list/card-list.component.jsx"
import SearchBox from "./components/search-box/search-box.component.jsx"

import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      bubice:[],
      searchBar:'',
    };
    
  }

componentDidMount(){
 
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then((users)=>this.setState(()=>{
    return {bubice: users}
  }
  ))
}

searchChange = (event)=>{
  const searchBar = event.target.value.toLocaleLowerCase();
            
  this.setState(()=>{
    return { searchBar }
  })
}

  render(){
    

    const { bubice, searchBar } = this.state;
    const { searchChange } = this;

    const filteredBubice = bubice.filter((bubica)=>{
      return bubica.name.toLocaleLowerCase().includes(searchBar);
    });

    return (
      <div className="App">

        <h1 className="titleStyle">Bubice Rolodex</h1>
        
        <SearchBox 
        onChangeHandler={ searchChange } 
        placeholder='search bubice'
        className='bubice-search-box' 
        />
        <CardList bubice= {filteredBubice} />
      </div>
    );
  }
}

export default App;
