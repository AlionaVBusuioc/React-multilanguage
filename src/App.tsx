import React, {FC, useContext} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.scss';
import About from "./pages/About";
import Page404 from "./pages/404";
import {LangContext} from "./context/lang";

const App: FC = () => {
  const {dispatch: {translate}} = useContext(LangContext);
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/about" exact>
       <About translate={translate}/>
      </Route>
      <Route path="*">
       <Page404 translate={translate}/>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
