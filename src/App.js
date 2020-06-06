import React from 'react';
import ConversorDolarReal from './components/ConversorDolarReal/ConversorDolarReal';
import ConversorEuroReal from './components/ConversorEuroReal/ConversorEuroReal';
import ConversorBtcReal from './components/ConversorBtcReal /ConversorBtcReal';
import ConversorYuanReal from './components/ConversorYuanReal /ConversorYuanReal';
import dolar from './components/ConversorDolarReal/img/dolar.png';
import euro from './components/ConversorEuroReal/img/euro.png';
import yuan from './components/ConversorYuanReal /img/yuan.jpg';
import bit from './components/ConversorBtcReal /img/bit.jpg';
import dolarcad from './components/ConversorDolarCadReal/img/dolarcad.png';
import franco from './components/ConversorFrancoReal/img/franco.png';
import lene from './components/ConversorLeneReal /img/lene.png'
import libras from './components/ConversorLibraReal/img/libras.png';
import peso from './components/ConversorPesoReal/img/peso.png';
import shekel from './components/ConversorShekelReal/img/shekel.png';

import styled from 'styled-components';

const Container = styled.div`
  background-color: #D4A3F1;
  display: grid;
    grid-template-areas: 'logo' 'topo' 'advert'
                          'sidenav' 'cards' 'advert' 
                          'footer' 'footer' 'footer';

    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 20vh auto 10vh;
    @media screen and (max-width:480px) {
      width: 100vw;     
      display: grid;
      grid-template-areas: '1 2 3 4 5 6 7 8';                         
    grid-template-columns: 1fr ;
    grid-template-rows: 5vh auto;        
  }
`
const Logo = styled.div`
  
  padding-left: 35%;
  @media screen and (max-width:480px) {      
    font-size: 0.7em;
    padding-left: 2%;
                    
  }
`
const Topo = styled.div`
   
  text-align: center;
  @media screen and (max-width:480px) {
    font-size: 0.8em;
    height: 35vh;
    width: 100vw;
    padding-bottom: 10%;
    grid-area: 2;    
  }
`
const Ancora = styled.div`
  width: 90vw;
  margin: auto;
  
  img {
    margin-left: 3px;
    width: 60px;
    height: 35px;        
  } 
  
`
const Cards = styled.div`
 
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2vw;
  column-gap: 2vh;
  @media screen and (max-width:480px) {
      display: grid;
      grid-area: 3;
    grid-template-columns: 1fr ;    
  }
`
const Sidenav = styled.div`
  
  text-align: center;
  @media screen and (max-width:480px) {
    display: grid;
    grid-area: 4;
    grid-template-columns: 1fr ;    
  }
`
const Advert1 = styled.div`
  text-align: center;
  
  @media screen and (max-width:480px) {    
      display: grid;
      grid-area: 5 ;
        
  }
`
const Advert2 = styled.div`
  
  @media screen and (max-width:480px) {
    text-align: center;
    display: grid;
    grid-area: 6 ;
    grid-template-columns: 1fr;    
  }
`
const Footer1 = styled.div`
  text-align: center;
  
  @media screen and (max-width:480px) {
    display: grid;
    grid-area: 7 ;
    grid-template-columns: 1fr ;    
  }
`
const Footer2 = styled.div`
  text-align: center;
  
  @media screen and (max-width:480px) {
    display: grid;
    grid-area: 8 ;
    grid-template-columns: 1fr ;    
  }
`
const Footer3 = styled.div`
  text-align: center;
  
  @media screen and (max-width:480px) {
    display: grid;
    grid-area: 9 ;
    grid-template-columns: 1fr ;    
  }
`

function App() {
  
  return (
    <Container>
      <Logo >
      <div id="inicio"></div>
        <h3>iMartiniano</h3>        
      </Logo>
      <Topo>
        <h1>FAST CONVERTER</h1>
        <Ancora>          
            <a href="#dolar"><img src={dolar}/></a>
            <a href="#euro"><img src={euro}/></a>
            <a href="#bit"><img src={bit}/></a>
            <a href="#yuan"><img src={yuan}/></a>
            <a href="#"><img src={dolarcad}/></a>
            <a href="#"><img src={franco}/></a>
            <a href="#"><img src={lene}/></a>
            <a href="#"><img src={libras}/></a>
            <a href="#"><img src={peso}/></a>
            <a href="#"><img src={shekel}/></a>                     
        </Ancora>       
      </Topo>
      <Advert1></Advert1>
      <Sidenav></Sidenav>
      <Cards>
        <div id="dolar">                
          <ConversorDolarReal/>          
        </div>
        <div id="euro">
          <ConversorEuroReal/>          
        </div>
        <div id="bit">
          <ConversorBtcReal/>          
        </div>
        <div id="yuan">  
          <ConversorYuanReal/>          
        </div>         
      </Cards>
      <Advert2></Advert2>
      <Footer1></Footer1>
      <Footer2></Footer2>
      <Footer3>footer</Footer3>
    </Container>
  );
}

export default App;
