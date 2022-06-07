import './card-container.styles.css'

const CardContainer = ({bubica})=>{
    const { id, name, email } = bubica;
    return (
        <div className='card-container'>
            <img alt={`bubica ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} key={id}/>
                <h2>{name}</h2>
                <p>{email}</p>
        </div>
    )
}

export default CardContainer