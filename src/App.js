import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ConversorDolarReal from './components/ConversorDolarReal/ConversorDolarReal';
import ConversorEuroReal from './components/ConversorEuroReal/ConversorEuroReal';
import ConversorBtcReal from './components/ConversorBtcReal /ConversorBtcReal';
import ConversorYuanReal from './components/ConversorYuanReal /ConversorYuanReal';
import dolar from './components/ConversorDolarReal/img/dolar.png';
import euro from './components/ConversorEuroReal/img/euro.png';
import yuan from './components/ConversorYuanReal /img/yuan.jpg';
import bit from './components/ConversorBtcReal /img/bit.png';
import dolarcad from './components/ConversorDolarCadReal/img/dolarcad.png';
import franco from './components/ConversorFrancoReal/img/franco.png';
import lene from './components/ConversorLeneReal /img/lene.png'
import libras from './components/ConversorLibraReal/img/libras.png';
import peso from './components/ConversorPesoReal/img/peso.png';
import ltc from './components/ConversorLtcReal /img/ltc.png';
import rpe from './components/ConversorRpeReal /img/rpe.png';
//import shekel from './components/ConversorShekelReal/img/shekel.png';
import styled from 'styled-components';
import ConversorLibraReal from './components/ConversorLibraReal/ConversorLibraReal';
import ConversorFrancoReal from './components/ConversorFrancoReal/ConversorFrancoReal';
import ConversorPesoReal from './components/ConversorPesoReal/ConversorPesoReal';
//import ConversorShekelReal from './components/ConversorShekelReal/ConversorShekelReal';
import ConversorDolarCadReal from './components/ConversorDolarCadReal/ConversorDolarCadReal';
import ConversorLeneReal from './components/ConversorLeneReal /ConversorLeneReal';
import ConversorDolarRealTurismo from './components/ConversorDolarRealTurismo/ConversorDolarRealTurismo';
import ConversorLtcReal from './components/ConversorLtcReal /ConversorLtcReal';
import ConversorRpeReal from './components/ConversorRpeReal /ConversorRpeReal';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Container = styled.div`
  background-color: #d2dbd6;
  background-size: cover;  
    
    @media screen and (max-width:480px) {
      width: 100vw;     
      display: grid;
      grid-template-areas: '1 2 3 4 5 6 7 8';                         
    grid-template-columns: 1fr ;
    grid-template-rows: 5vh auto;        
  }
`
const Header = styled.div`
  text-align: center;  
  @media screen and (max-width:480px) {      
    font-size: 0.7em;
    padding-left: 2%;                    
  }
`
const Nav = styled.div`
  margin: 2%;
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
  margin: auto;  
  width: 90vw;  
  
  img {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
    margin-left: 3px;
    width: 60px;
    height: 35px;        
  } 
  
`
const Section = styled.div`
  
justify-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 2vw;
  column-gap: 4vh;
  @media screen and (max-width:480px) {
      display: grid;
      grid-area: 3;
    grid-template-columns: 1fr ;    
  }
`
const Cards = styled.div`
  width:70vw;  
  margin-top: 3%;    
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
   row-gap: 4vw;
  column-gap: 4vh;
  @media screen and (max-width:480px) {
      display: grid;
      grid-area: 3;
    grid-template-columns: 1fr ;    
  }
`
const Footer3 = styled.div`
  margin-top: 2%;
  text-align: center;
  @media screen and (max-width:480px) {
    display: grid;
    grid-area: 9 ;
    grid-template-columns: 1fr ;    
  }
`

function App() {
  const classes = useStyles();
  
  return (
    <Container>
      <Header id="inicio" className={classes.root}>
        <AppBar position="static">
          <Toolbar>            
            <Typography variant="h4" className={classes.title}>
              Fast Converter
            </Typography>                   
          </Toolbar>
        </AppBar>
      </Header>    
      <Nav>     
        <Ancora>          
          <a href="#dolar"><img alt="dolar" src={dolar}/></a>
          <a href="#dolarcad"><img alt="dolarcad" src={dolarcad}/></a>
          <a href="#euro"><img alt="euro" src={euro}/></a>
          <a href="#yuan"><img alt="yuan" src={yuan}/></a>
          <a href="#libras"><img alt="libras" src={libras}/></a>
          <a href="#franco"><img alt="franco" src={franco}/></a>
          <a href="#peso"><img alt="peso" src={peso}/></a>
          <a href="#lene"><img alt="lene" src={lene}/></a>
          <a href="#bit"><img alt="bit" src={bit}/></a>
          <a href="#ltc"><img alt="ltc" src={ltc}/></a>
          <a href="#rpe"><img alt="rpe" src={rpe}/></a>
          {/* <a href="#shekel"><img alt="shekel" src={shekel}/></a>                      */}
        </Ancora>       
      </Nav>      
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
          <div id="ltc">
            <ConversorLtcReal/>          
          </div>
          <div id="rpe">
            <ConversorRpeReal/>          
          </div>
        </Cards>
        <div>
        </div> 
      </Section>     
      <Footer3 className={classes.root}>
        <AppBar position="static">
          <Toolbar>            
            <Typography variant="h6" className={classes.title}>              
              <Button color="inherit" href="#inicio">Voltar para o início</Button>
            </Typography>                   
          </Toolbar>
        <p>Copyright © 2020 Isaac A. Martiniano. Todos os direitos reservados.</p>
        </AppBar>
      </Footer3>   
    </Container>
  );
}

export default App;
