import { Switch } from './components/Switch';
import { Footer } from './components/Footer';

import { Home } from './pages/Home';
import { Weather } from './pages/Weather';
import { NextDays } from './pages/NextDays';



import { ContextProvider } from './contexts/Context'

import { BrowserRouter ,Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (

    <div className='App'>

      <ContextProvider>
        <BrowserRouter>

          <Switch />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/weather' element={<Weather />} />
            <Route path='/weather/nextdays' element={<NextDays />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </ContextProvider>

    
    </div>
  );
}

export default App;
