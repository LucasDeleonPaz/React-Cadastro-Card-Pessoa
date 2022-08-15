import CreateCard from './cards/index.js';

function CardArea({list}) {
    
    return (
        <div className='container--card'>
            {list.map((elem, index) => {                
                return <CreateCard  key={index} name={elem.name} imagem={elem.imagem} idade={elem.idade} pais={elem.pais}> <h1>oi</h1> </CreateCard>
            })}
        </div>
    )
}

export default CardArea
