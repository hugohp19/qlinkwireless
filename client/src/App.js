import './style/main.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Store from './pages/shop';
import DeviceDetail from './pages/deviceDetail';
import Test from './pages/test';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Store} />
        <Route exact path='/details' component={DeviceDetail} />
        <Route exact path='/test' component={Test} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
