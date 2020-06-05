import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ConversorRealDolar.css';

const ConversorRealDolar = () =>  {

const [dolarValor, setDolarValor] = useState([])
const [valorReal, setValorReal] = useState (0)

const dolar = (parseFloat(dolarValor.high).toFixed(2));

const resultado = (parseFloat(valorReal / dolar).toFixed(2));

const real = (parseFloat(1 / dolar).toFixed(2));

    useEffect(() => {
    axios.get('https://economia.awesomeapi.com.br/json/all/USD-BRL').then(response => {
    console.log(response.data)
    setDolarValor(response.data.USD)     
    })
  }, [setDolarValor]);  

    return (
      <div className="conversor">
        <h1>Real >>> Dólar</h1>
        <p>R$<strong>1.00</strong>Hoje: US$<strong>{real}</strong></p>
        <input type="text" placeholder="Digite aqui o valor em Real" onChange={e => setValorReal(e.target.value)} ></input>        
        <p>Total em Dólar </p>
        <h2>US$ {resultado}</h2>        
      </div>
    )
  }

export default ConversorRealDolar;


