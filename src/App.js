import React from 'react';
import { Header } from './components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Products, NewProduct, EditProduct } from './containers';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/products/add" component={NewProduct} />
          <Route exact path="/products/edit/:id" component={EditProduct} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
