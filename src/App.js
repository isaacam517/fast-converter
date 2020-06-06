import React from 'react';
import ConversorDolarReal from './components/ConversorDolarReal/ConversorDolarReal';
import ConversorEuroReal from './components/ConversorEuroReal/ConversorEuroReal';
import ConversorBtcReal from './components/ConversorBtcReal /ConversorBtcReal';
import ConversorYuanReal from './components/ConversorYuanReal /ConversorYuanReal';
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
    grid-template-areas: 'logo' 'topo' 'advert'
                          'sidenav' 'cards' 'advert' 
                          'footer' 'footer' 'footer';

    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 10vh auto 10vh;
    @media screen and (max-width:480px) {
      width: 100vw;     
      display: grid;
      grid-template-areas: '1 2 3 4 5 6 7 8';                         
    grid-template-columns: 1fr ;
    grid-template-rows: 5vh auto;        
  }
`


const Logo = styled.div`
  background-color: #e2843e;
  @media screen and (max-width:480px) {      
    font-size: 0.7em;
    padding-left: 2%;
                    
  }
`

const Topo = styled.div`
  background-color: #e2843e;  
  font-size: 1em;
  text-align: center;
  @media screen and (max-width:480px) {
    font-size: 0.8em;
    height: 10vh;
    width: 100vw;
    grid-area: 2;    
  }
`
const Cards = styled.div`
  background-color: #e2843e;
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
  background-color: #e2843e;
  text-align: center;
  @media screen and (max-width:480px) {
    display: grid;
    grid-area: 4;
    grid-template-columns: 1fr ;    
  }
`

const Advert1 = styled.div`
  text-align: center;
  background-color: #e2843e;
  @media screen and (max-width:480px) {    
      display: grid;
      grid-area: 5 ;
        
  }
`
const Advert2 = styled.div`
  background-color: #e2843e;
  @media screen and (max-width:480px) {
    text-align: center;
    display: grid;
    grid-area: 6 ;
    grid-template-columns: 1fr;    
  }
`

const Footer1 = styled.div`
  text-align: center;
  background-color: #e2843e;
  @media screen and (max-width:480px) {
    display: grid;
    grid-area: 7 ;
    grid-template-columns: 1fr ;    
  }
`
const Footer2 = styled.div`
  text-align: center;
  background-color: #e2843e;
  @media screen and (max-width:480px) {
    display: grid;
    grid-area: 8 ;
    grid-template-columns: 1fr ;    
  }
`
const Footer3 = styled.div`
  text-align: center;
  background-color: #e2843e;
  @media screen and (max-width:480px) {
    display: grid;
    grid-area: 9 ;
    grid-template-columns: 1fr ;    
  }
`

function App() {
  return (
    <Container>
      <Logo>
        <h3>iMartiniano </h3>
      </Logo>
      <Topo>
        <h1>FAST CONVERTER</h1>
      </Topo>
      <Advert1>advert</Advert1>
      <Sidenav>sidenav</Sidenav>
      <Cards>                
        <ConversorDolarReal/>
        <ConversorEuroReal/>
        <ConversorBtcReal/>
        <ConversorYuanReal/>            
      </Cards>
      <Advert2>advert</Advert2>
      <Footer1>footer</Footer1>
      <Footer2>footer</Footer2>
      <Footer3>footer</Footer3>
    </Container>
  );
}

export default App;
