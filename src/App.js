import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter} from 'react-router-dom'
import routes from './routes'
import Header from './components/Header/Header'
import {Provider} from 'react-redux'
import store from './ducks/store'

class App extends Component {
  render() {
    return (
      
    <Provider store={store}>
    
      <HashRouter>
        <div>
                <nav>
                  <Header/>
                </nav>
          
                <div >
                  {routes}
                </div>



        </div>

      </HashRouter>
    
    
    </Provider>



   
      
      
    );
  }
}

export default App;
