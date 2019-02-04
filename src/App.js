import React, { Component } from 'react';
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
        <div className='App'>
                <nav className='App-header'>
                  <Header/>
                </nav>
          
                <div className='routes' > 
                  {routes}
                </div>



        </div>

      </HashRouter>
    
    
    </Provider>



   
      
      
    );
  }
}

export default App;
