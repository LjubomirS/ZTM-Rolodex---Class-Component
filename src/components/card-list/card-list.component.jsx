import { Component } from 'react';
import CardContainer from './card-container/card-container.component.jsx'
import './card-list.styles.css'


class CardList extends Component {

    render() {
        console.log('render');
        const { bubice } = this.props;

        return (
        <div className='card-list'>
           {bubice.map((bubica)=>{
              
               return(
                    <CardContainer bubica={bubica}/>
                );
                })}
           
        </div>        
        )
    }
}

export default CardList;