import React from 'react';
import Menu from './components/Menu'
import dadosIniciais from '../../my-app/src/data/dados_iniciais.json';
import BannerMain from '../../my-app/src/components/BannerMain';
import Carousel from '../../my-app/src/components/Carousel';
import Footer from '../../my-app/src/components/Footer';

function app() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"A guitarra é um instrumento musical pertencente à família das cordas, cujo som é sempre amplificado eletronicamente. É um Instrumento de cordas, ou seja, o som é produzido manualmente pela vibração das cordas como na guitarra acústica, porém é transformado em sinal elétrico devido a ação de captadores magnéticos (na maioria dos modelos)."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />      

      <Footer />
    </div>
  );
}

export default app;
