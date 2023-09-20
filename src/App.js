import { Routes, Route } from 'react-router-dom'

import Navigation from './routes/navigation/navigation.routes';
import Home from './routes/home/home.routes';
import Authentication from './routes/authentication/authentication.routes';

const App = () => {    
    return (   
      <div className='bg-gray-700 min-h-screen'>
        <Routes>
          <Route path='/' element={<Navigation />}>            
            <Route index element={<Home />} />
            <Route path='/auth' element={<Authentication />} />            
          </Route>
        </Routes>        
      </div>   
    )
  }


export default App;
