import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { default as Web3} from 'web3';
import contractArtifact from './build/contracts/CounterEvents.json'
import { default as contract } from 'truffle-contract'

import {Col} from 'react-bootstrap';

import BarraNav from './components/BarraNav'
import About from './components/About'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


var web3 = web3;
while(web3 === 'undefined'){}
if (typeof web3 !== 'undefined') {
  console.log("TUUU PUUTAAA MADRE");
  web3 = new Web3(web3.currentProvider);
} else {
  //  Especificamos el provider 
  // empleando chrome con MetaMask el provider es injectado automaticamente
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"))
} 

var account = web3.eth.accounts[0];



class App extends Component {

  constructor(props){
    super(props);

    this.state = ({
      contrato: null,
      cuenta: 0,
      event: null, 
    });

    this.incrementClick = this.incrementClick.bind(this);
  }

  async componentWillMount() {
    var theContract = contract(contractArtifact);

    theContract.setProvider(web3.currentProvider);

    // CONTRATO   
    var contrato = await theContract.deployed(); // ESTO YA ME GUARDA EL CONTRATO
    //console.log("Contrato =", contrato);

    var cuenta = await contrato.count();
    // ccount es e atributo uint256 del smart contract
    console.log("CUENTA =", cuenta);

    // EVENTO 
    var event = contrato.Increment();
    //console.log(event);   

    // LANZAMOS WATCH
    event.watch((err, event) => {
      //console.log(event);
      if (err){
        console.log(err);
      } else {
        console.log("This is the event!");
        //console.log(event);
        console.log("Count was incremented by: " + event.args.who);

        var cuenta = event.args.amount;

        console.log("The counter has been updated up to: " + cuenta);


        //return event.args.amount;
        // AQUI DEBERÍA IR LA ACTUALIZACION DEL ESTADO, de la variable cuenta que mostraria el dom
        // cada vez que se detecta un evento- es decir que se ha pulsado incrementar
        // se jejuta este trozo , es decir las lineas de codigo dentro del watch
        //  pero no puedo ni llamar a funciones de la clase App ni devilver un resultado

              this.setState({
          cuenta: cuenta.valueOf(),
        }); 
      }
    });
    console.log("event watch has been started");

    this.setState({
      contrato: contrato,
      event: event,
      cuenta: cuenta.valueOf(),
    }); 
  }

  /*
  * metodo que incrementa el countador 
  */
  incrementClick() {

    console.log("PULSADO BOTON INCR");
    console.log(web3);

    this.state.contrato.increment({from: account, gas:200000})
    .then(res => {
      console.log(">>>>>>>>>>>> +1 succes");
    })
        .catch(err => {
      console.log("ERROR", err);
        }); 
        
  }

  /*
  * Invocado inmediatamente antes de que un componente se desmonte del DOM
  */

  componentWillUnmount(){
    // TEAR DOWN WATCH
    this.state.event.stopWatching();
    console.log("watch has been tore down");
  }



  render() {    
    return(
      <div>
        <BarraNav />
        <div>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
          <Col md={2}></Col>
          <Col md={6}>
            <div>              
              <h1>Home Page</h1>
              <h1> Page under construction </h1>
              <h4> El contado está a : {this.state.cuenta} </h4>
              <button onClick={this.incrementClick}>Increment</button>  
            </div>
          </Col>
        </div>
      </div>
    );
  }
}

export default App;