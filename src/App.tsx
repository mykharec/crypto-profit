import * as React from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux'

import {store} from './store'
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowDown, faArrowUp, faStroopwafel, faTrash } from '@fortawesome/free-solid-svg-icons'
library.add(faStroopwafel, faTrash, faArrowDown, faArrowUp);

import Login from './components/login/Login'
import Profit from './components/profit/Profit'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
          <Provider store={store}>
              <HashRouter>
                  <div>
                      <Switch>
                          <Route exact path="/" component={Login}/>
                          <Route exact path="/profit" component={Profit}/>
                      </Switch>
                  </div>
              </HashRouter>
          </Provider>
      </div>
    );
  }
}

export default App;



