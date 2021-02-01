import './style/main.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navBar';
import Store from './pages/shop';
import DeviceDetail from './pages/deviceDetail';
import TopBar from './components/topBar';
import Footer from './components/footer';
import './style/components/homeTemplate/homeTemplate.scss';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Navbar />
      <div className='shopPage-container'>
        <h2>Shop</h2>
        <Switch>
          <Route exact path='/' component={Store} />
          <Route exact path='/details/:id' component={DeviceDetail} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
