import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import { BrowserRouter as Router, Switch, Route }
from "react-router-dom"
import Footer from './Footer';
import SubHeader from './SubHeader';

function App() {
  return (
    <Router>

      <div className="app">

        <Header />
        <SubHeader />

        <Switch>

            <Route path="/checkout">
              <Checkout />
            </Route>

            <Route path="/">
              <Home />
            </Route>

        </Switch>

        <Footer />


      </div>

    </Router>

  );
}

export default App;
