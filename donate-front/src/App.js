import * as React from 'react';
import Rotas from './router';
import './scss/App.scss';
import Navbar from './pages/helpers/Navbar';
import Footer from './pages/helpers/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>Hello World!</h1>
      <Rotas></Rotas>
      <Footer></Footer>
    </div>
  );
}

export default App;