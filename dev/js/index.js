import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter , Route ,Switch} from 'react-router-dom';
import App from './components/app';
import StepA from './components/stepA';
import StepB from './components/stepB';
import StepC from './components/stepC';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div>    
      <Switch>   
        <Route path="/stepb" component={StepB} />
        <Route path="/stepc" component={StepC} />
        <Route path="/"  component={StepA} /> 
      </Switch>
    </div> 

 </BrowserRouter>
 </Provider>
  , document.querySelector('.container'));
