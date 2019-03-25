import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Header from './components/header/Header'
import Kv from './components/kv/Kv'
import Product from './components/prodcut/Product'
import QA from './components/qa/QA'
import Normalize from 'normalize.css'
import baseCss from './css/App.css'

class App extends Component {
    state = {  }
    render() { 
        return (
            <div className='wrap'>
                <Header></Header>
                <Kv></Kv>
                <Product></Product>
                <QA></QA>
            </div>
        );
    }
}

ReactDOM.render( <App></App>, document.querySelector('#app'))