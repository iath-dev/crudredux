import React from 'react';
import { Header } from './components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Products, NewProduct, EditProduct } from './containers';
import { Provider } from 'react-redux'
import { Store } from './redux';

function App() {
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <Header />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/products/add" component={NewProduct} />
            <Route exact path="/products/edit/:id" component={EditProduct} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
