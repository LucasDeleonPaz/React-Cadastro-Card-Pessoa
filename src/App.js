import './App.css';
import './components/card/cards/cards.css'
import './components/header/header2.css'
import './components/aside/aside.css'
import './components/card/container.css'
import { useState } from 'react'
import CardArea from './components/card/index.js';
import Header from './components/header/index.js';
import Aside from './components/aside';

function App() {
    const [data, setData] = useState([
    
    {
        name: 'Lucas',
        idade: '30 Anos',
        pais: 'Brasil',
        imagem: 'https://arita.com.br/wp-content/uploads/2020/08/pessoa-expansiva-principais-caracteristicas-desta-personalidade.jpg'
    },

    {
        name: 'Vovó Juju',
        idade: '70 Anos',
        pais: 'Brasil',
        imagem: 'https://pbs.twimg.com/profile_images/651915043131535360/w-dXx3AV_400x400.png'
    },

    {
        name: 'Diabolin',
        idade: '570 Anos',
        pais: 'Reino de Dar-Shan',
        imagem: 'https://bloginterocitro.files.wordpress.com/2013/09/2.jpg'
    },

]);

  const childToParent = (childdata) => {
    setData([...data, childdata]);
  }



  return (
    <div className="App">
        <div className="App-header">
          <Header/>
          <Aside childToParent={childToParent}/>
          <CardArea list={data}/>

        </div>
    </div>
  );
}

export default App;


/*  return (
    <div className="App">
        <div className="App-header">
          {ok ? <h1>teste</h1> : <h1>Não ok</h1>}
          <button onClick={()=> setOk(!ok)}>SET </button>
          <Header/>
          <Aside childToParent={childToParent}/>
          <CardArea list={data}/>

        </div>
    </div>
  );*/