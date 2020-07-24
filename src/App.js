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
//import shekel from './components/ConversorShekelReal/img/shekel.png';
import styled from 'styled-components';
import ConversorLibraReal from './components/ConversorLibraReal/ConversorLibraReal';
import ConversorFrancoReal from './components/ConversorFrancoReal/ConversorFrancoReal';
import ConversorPesoReal from './components/ConversorPesoReal/ConversorPesoReal';
//import ConversorShekelReal from './components/ConversorShekelReal/ConversorShekelReal';
import ConversorDolarCadReal from './components/ConversorDolarCadReal/ConversorDolarCadReal';
import ConversorLeneReal from './components/ConversorLeneReal /ConversorLeneReal';
import ConversorDolarRealTurismo from './components/ConversorDolarRealTurismo/ConversorDolarRealTurismo';


const Container = styled.div`
  background-color: #E8E8E0;
  background-size: cover;
  height: 100%;
  width: 100%;
  display: grid;
    grid-template-columns: 0.4fr 3fr 0.4fr ;
    grid-template-rows: 20vh auto 20vh;
    @media screen and (max-width:480px) {
      width: 100vw;     
      display: grid;
      grid-template-areas: '1 2 3 4 5 6 7 8';                         
    grid-template-columns: 1fr ;
    grid-template-rows: 5vh auto;        
  }
`
const Logo = styled.div`
  
  
  @media screen and (max-width:480px) {      
    font-size: 0.7em;
    padding-left: 2%;
                    
  }
`
const Topo = styled.div`
  position: relative;
  text-align: center;
  @media screen and (max-width:480px) {
    font-size: 0.8em;
    height: 15vh;
    width: 100vw;
    padding-bottom: 10%;
    grid-area: 2;    
  }
`
const Ancora = styled.div`
  width: 90vw;
  margin: auto;
  
  img {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
    margin-left: 3px;
    width: 60px;
    height: 35px;        
  } 
  
`
const Section = styled.div`
 
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 2vw;
  column-gap: 2vh;
  @media screen and (max-width:480px) {
      display: grid;
      grid-area: 3;
    grid-template-columns: 1fr ;    
  }
`
const Cards = styled.div`
  width:70vw;
  height: 100vh;
  margin-top: 5%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
        <p>(atualizado a cada 30 segundos)</p>
        <Ancora>          
            <a href="#dolar"><img alt="dolar" src={dolar}/></a>
            <a href="#euro"><img alt="euro" src={euro}/></a>
            <a href="#bit"><img alt="bit" src={bit}/></a>
            <a href="#yuan"><img alt="yuan" src={yuan}/></a>
            <a href="#dolarcad"><img alt="dolarcad" src={dolarcad}/></a>
            <a href="#franco"><img alt="franco" src={franco}/></a>
            <a href="#lene"><img alt="lene" src={lene}/></a>
            <a href="#libras"><img alt="libras" src={libras}/></a>
            <a href="#peso"><img alt="peso" src={peso}/></a>
            {/* <a href="#shekel"><img alt="shekel" src={shekel}/></a>                      */}
        </Ancora>       
      </Topo>
      <Advert1></Advert1>
      <Sidenav></Sidenav>
        <Section>
          <div>
          </div>  
          <Cards>
            <div id="dolar">                
              <ConversorDolarReal/>          
            </div>
            <div id="dolar">                
              <ConversorDolarRealTurismo/>          
            </div>
            <div id="dolarcad">
              <ConversorDolarCadReal/>  
            </div>
            <div id="euro">
              <ConversorEuroReal/>          
            </div>
            <div id="yuan">  
              <ConversorYuanReal/>          
            </div>
            <div id="libras">
              <ConversorLibraReal/>  
            </div> 
            <div id="franco">
              <ConversorFrancoReal/>  
            </div>
            <div id="peso">
              <ConversorPesoReal/>  
            </div>
            {/* <div id="shekel">
              <ConversorShekelReal/>  
            </div> */}
            <div id="lene">
              <ConversorLeneReal/>  
            </div>            
            <div id="bit">
              <ConversorBtcReal/>          
            </div>
          </Cards>
          <div>
          </div> 
        </Section>       
      <Advert2></Advert2>
      <Footer1></Footer1>
      <Footer2></Footer2>
      <Footer3>footer</Footer3>
    </Container>
  );
}

export default App;
