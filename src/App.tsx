import './App.css';

import { Home } from './pages/Home/Home';
import { Weather } from './pages/Weather/Weather';
import { Forecast } from './pages/Forecast/Forecast';
import { NotFound } from './pages/NotFound/NotFound';
import { IntlContextProvider } from './contexts/IntlContext'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <div className='App'>

        <IntlContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/weather' element={<Weather />} />
              <Route path='/forecast' element={<Forecast />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </IntlContextProvider>
    </div>
  );
}

export default App;
