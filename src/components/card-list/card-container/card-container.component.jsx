import { Component } from 'react'
import './card-container.styles.css'

class CardContainer extends Component {
    render(){
        const { name,email,id } = this.props.bubica;
        return( <div className='card-container'>
        <img alt={`bubica ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} key={id}/>

        <h2>{name}</h2>
        <p>{email}</p>
    </div>
        )
    }
}

export default CardContainer