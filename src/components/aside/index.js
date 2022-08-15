import { useState } from 'react'

function Aside ({childToParent}) {

    const [nome, setNome] = useState('Nome')
    const [idade, setIdade] = useState('Idade')
    const [pais, setPais] = useState('Pais')
    const [img, setImg] = useState('Imagem')
    const [obj, setObj] = useState()
    
    return (
        <aside className="aside">
            <form className="aside--form" onChange={() => setObj({name: nome, idade: idade, pais: pais, imagem: img })} >
                <p>NOME:</p>
                <input onChange={(x) => setNome(x.target.value)} placeholder="Digite seu nome"></input>
                <p>IDADE:</p>
                <input onChange={(x) => setIdade(x.target.value)} placeholder="Digite sua idade"></input>
                <p>PAÍS:</p>
                <input onChange={(x) => setPais(x.target.value)} placeholder="Digite seu país"></input>
                <p>IMAGEM URL</p>
                <input onChange={(x) => setImg(x.target.value)} placeholder="URL da imagem"></input>
            </form>

            <button className="aside--btn" onClick={() => childToParent(obj)}>CADASTRAR</button>
        </aside>
    )
}

export default Aside