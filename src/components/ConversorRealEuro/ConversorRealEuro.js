import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ConversorRealEuro.css';

const ConversorRealEuro = () =>  {

const [euroValor, setEuroValor] = useState([])
const [valorReal, setValorReal] = useState (0)

const euro = (parseFloat(euroValor.high).toFixed(2));

const resultado = (parseFloat(valorReal / euro).toFixed(2));

const real = (parseFloat(1 / euro).toFixed(2));

    useEffect(() => {
    axios.get('https://economia.awesomeapi.com.br/json/all/EUR-BRL').then(response => {
   
    setEuroValor(response.data.EUR)     
    })
  }, [setEuroValor]);  

     return (
      <div className="conversor">
        <h1>Real  Euro</h1>
        <p>R$<strong>1.00</strong>  Hoje: R$ <strong>{real}</strong></p>
        <input type="text" placeholder="Digite aqui o valor em Real" onChange={e => setValorReal(e.target.value)} ></input>
        
      <p>Total em Euro </p>
      <h2>&euro; {resultado}</h2>        
      </div>
    )
  }

export default ConversorRealEuro;


