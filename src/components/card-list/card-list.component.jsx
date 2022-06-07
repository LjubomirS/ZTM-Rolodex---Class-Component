import CardContainer from './card-container/card-container.component.jsx'
import './card-list.styles.css'


const CardList = ({ bubice })=> (
        <div className='card-list'>
           {bubice.map((bubica)=>{
              
               return(
                    <CardContainer bubica={bubica}/>
                );
                })}
           
        </div>        
        );

export default CardList;