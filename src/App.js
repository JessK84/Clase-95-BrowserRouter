import React from 'react';
import Header from './components/Header/Header';
import Index from './components/AllPages/Index/Index';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.scss';
import Page1 from './components/AllPages/Page1/Page1';
import Page2 from './components/AllPages/Page2/Page2';


const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/">
              <Index />
            </Route>
            <Route exact path="/cactus" component={Page1} />
            <Route exact path="/orquideas" component={Page2} />
          </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
