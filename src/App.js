import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './Store/store';
import Navbar from './components/Navbar';
import UserDetails from './components/UserDetails';
import SortAsc from './components/SortAsc';
import SortDesc from './components/SortDesc';
import ContactList from './components/ContactList';
import SingleUser from './components/SingleUser';
import FavoriteList from './components/FavoriteList';
import { BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <div className="App">
      <Navbar/>
      <Switch>
      <Route path = '/' exact component={ContactList}/>
      <Route path = '/asc' exact component={SortAsc}/>
      <Route path = '/desc' exact component={SortDesc}/>
      <Route path = '/single' exact component={SingleUser}/>
      <Route path = '/fav' exact component={FavoriteList}/>
      <Route path = '/:id' exact component={UserDetails}/>
      </Switch>   
      </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
