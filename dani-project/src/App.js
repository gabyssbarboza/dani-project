import React from 'react';
import './App.scss';
import Header from './Header';
import Banner from './Banner';
import Numbers from './Numbers';
import Store from './Store';
import Foto1 from './foto1.png';
import Foto2 from './foto2.png';
import Foto3 from './foto3.png';
import Dani from './banner-dani.jpg';
import Cars from './Cars';

function App() {
  return (
    <div className="App">
     <Header  />
    <Banner srcImg={Dani} titulo="Dani#3" subtitle="Sallute the honey badger" />
     <Numbers title="Números" first="7" second="3" third="13" four="3" />
    <Cars />
      <Store title="Store" src1={Foto1} src2={Foto2} src3={Foto3} />
    
    </div>
  );
}

export default App;
