
import './App.css';

import Header from './components/header'
import Footer from './components/footer'
import Home from './containers/home'
import Detail from './containers/detail'

import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exac path="/" element={<Home />}/>
        <Route exac path="/detail/:id" element={<Detail />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
