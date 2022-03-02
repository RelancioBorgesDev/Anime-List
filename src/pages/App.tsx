import React from 'react';
import Header from '../components/Header';
import WallpaperPrincipal from '../components/WallpaperPrincipal';

import app from './app.module.scss'

import image from '../assets/shingeki.jpg'
import Animes from '../components/Slider/Animes';

function App() {
  return (
   <div className={app.app}>
    <Header/>
    <div className={app.imagem}>
        <WallpaperPrincipal imagem={image} descricao="Wallpaper Nova Temporada de Shingeki no Kyojin"/>
    </div>

      <div className={app.lista_animes}>
        <h2>Todos os Animes!</h2>
        <hr />
        <Animes/>
      </div>

      <div className="favoritos">
        
      </div>
      
   </div>
  );
}

export default App;
