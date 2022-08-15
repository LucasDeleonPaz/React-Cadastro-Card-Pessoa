function CreateCard( {name, imagem, idade, pais, children} ) {
    return (
        <div className="card">
            <img className="card--person" src={imagem} ></img>
            <div className='card--text'>
                <p>{name}</p>
                <p>{idade}</p>
                <p>{pais}</p>                
            </div>
        </div>
    )
}

export default CreateCard