import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import bit from './img/bit.jpg'

const Container = styled.div`
  background-color: #fcfa96;
  padding: 3%;    
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
  display:grid;
  grid-template-areas: "nome nome";                        
  grid-template-columns: 1.7fr 1fr;
  grid-template-rows: 8vw 3vw 5vw 3vw 5vw;
  text-align: center;
  color:black;
`
const Nome = styled.div`
  background-color: #c0d9e0;
  grid-area: nome;
  margin-bottom: 8%;  
`

const DivAgora = styled.div`  
  margin-top: -8%;  
`

const DivInput = styled.div`
  margin-top: -7%;
  input{
    width: 50%;
    padding: 5%;
  }
`

const DivResult = styled.div`
  background-color: #c0d9e0;
`

const MinMax = styled.div`
  background-color: #c0d9e0;    
`

const Porcent = styled.div`
  background-color: #c0d9e0;
`

const ImgBtc = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
  background-color: #c0d9e0;
  background-image: url(${bit});
  background-size: cover;    
`

const ConversorBtcReal = () =>  {
const [btcValor, setBtcValor] = useState([])
const [valorReal, setValorReal] = useState (0)

const comprarBtc = (parseFloat(btcValor.bid).toFixed(2));
const alta = (parseFloat(btcValor.high).toFixed(2));
const baixa = (parseFloat(btcValor.low).toFixed(2));
const venderBtc = (parseFloat(btcValor.ask).toFixed(2));
const variacao = (parseFloat(btcValor.varBid).toFixed(2));
const pctChange = (parseFloat(btcValor.pctChange).toFixed(2));
const resultado = (parseFloat(valorReal * comprarBtc).toFixed(2));





    useEffect(() => {
    axios.get('https://economia.awesomeapi.com.br/json/all/BTC-BRL').then(response => {
    console.log(response.data)
    setBtcValor(response.data.BTC)     
    })
  }, [setBtcValor]);  

    return (
      <Container>
      <Nome>
        <h1 className="nome">BITCOIN</h1>        
      </Nome>
      <DivAgora>
        <h3>Agora: R$ <strong>{comprarBtc}</strong></h3>
      </DivAgora>
      <DivInput>
        <input type="text" placeholder="Digite aqui o valor em Btc" onChange={e => setValorReal(e.target.value)} ></input>
      </DivInput>
      <DivResult>
        <h1>R$ {resultado}</h1>
      </DivResult>
      <MinMax>
        <p>Máx. R$ {alta}</p>
        <p>Mín. R$ {baixa}</p>
      </MinMax>
      <p>vender R$ {venderBtc}</p>
      <p>Variação R$ {variacao}</p>
      <Porcent>
        <p>Porc. da variação  {pctChange}%</p>
      </Porcent>
      <ImgBtc></ImgBtc>
    </Container>
    )
  }

export default ConversorBtcReal;


