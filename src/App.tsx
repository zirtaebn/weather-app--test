import './App.css';

import { Switch } from './components/Switch/Switch';
import { Footer } from './components/Footer/Footer';

import { Home } from './pages/Home/Home';
import { Weather } from './pages/Weather/Weather';
import { NextDays } from './pages/Forecast/Forecast';
import { NotFound } from './pages/NotFound/NotFound';


import { ContextProvider } from './contexts/Context'

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (

    <div className='App'>

        <ContextProvider>
          <BrowserRouter>
            <Switch />

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/weather' element={<Weather />} />
              <Route path='/nextdays' element={<NextDays />} />
              <Route path='*' element={<NotFound />} />
            </Routes>

            <Footer />
          </BrowserRouter>
        </ContextProvider>
    </div>
  );
}

export default App;
