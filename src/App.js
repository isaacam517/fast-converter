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
    grid-template-rows: 10vw auto 10vw;
`

const Cards = styled.div`
background-color: #e2843e;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2vw;
  column-gap: 2vh;
`

const Logo = styled.div`
  background-color: #e2843e;
`

const Topo = styled.div`
  background-color: #e2843e;
  font-size: 2em;
  text-align: center;
`

const Sidenav = styled.div`
  background-color: #e2843e;
`

const Advert = styled.div`
  background-color: #e2843e;
`

const Footer = styled.div`
  background-color: #e2843e;
`


function App() {
  return (
    <Container>
      <Logo className="logo">
        <h3>iMartiniano </h3>
      </Logo>
      <Topo className="topo">
        <h1>CONVERTA FAST</h1>
      </Topo>
      <Advert className="advert">advert</Advert>
      <Sidenav className="sidenav">sidenav</Sidenav>
      <Cards>                
        <ConversorDolarReal className="item"/>
        <ConversorEuroReal className="item"/>
        <ConversorBtcReal className="item"/>
        <ConversorYuanReal className="item"/>            
      </Cards>
      <Advert className="advert">advert</Advert>
      <Footer className="footer">footer</Footer>
      <Footer className="footer">footer</Footer>
      <Footer className="footer">footer</Footer>
    </Container>
  );
}

export default App;
