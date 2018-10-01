import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import {Switch, Route} from "react-router-dom";

import './App.css';


import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
library.add(faStroopwafel, faTrash)

import Login from './components/login/Login'
import Profit from './components/profit/Profit'


class App extends React.Component {
  public render() {
    return (
      <div className="App">
         <Switch>
           <Route exact path="/" component={Login}/>
           <Route exact path="/profit" component={Profit}/>
         </Switch>
      </div>
    );
  }
}

export default App;
