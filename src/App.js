import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"
import ProductListPage from './ProductListPage';
import ProductDetailPage from './ProductDetailPage';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/products">
            <ProductListPage></ProductListPage>
          </Route>
          <Route path="/products/:productId">
            <ProductDetailPage></ProductDetailPage>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
