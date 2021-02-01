import './style/main.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navBar';
import Store from './pages/shop';
import DeviceDetail from './pages/deviceDetail';
import Test from './pages/test';
import './style/components/homeTemplate/homeTemplate.scss';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='shopPage-container'>
      <h2>Shop</h2>
        <Switch>
          <Route exact path='/' component={Store} />
          <Route exact path='/details/:id' component={DeviceDetail} />
          <Route exact path='/test' component={Test} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
