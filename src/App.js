import { Routes, Route } from 'react-router-dom'

import Navigation from './routes/navigation/navigation.routes';
import Home from './routes/home/home.routes';
import Profile from './routes/profile/profile.routes';
import Directory from './routes/directory/directory.routes';
import Authentication from './routes/authentication/authentication.routes';
import Canyon from './routes/canyon/canyon.routes';
import PageNotFound from './routes/404/404.routes'

const App = () => {    
    return (   
      <div className='bg-gray-700 min-h-screen'>
        <Routes>
          <Route path='/' element={<Navigation />}>            
            <Route index element={<Home />} />
            <Route path='/canyons'>
              <Route index element={<Directory />} />
              <Route path=':id/:canyonId' element={<Canyon />} />                        
            </Route>                        
            <Route path='/auth' element={<Authentication />} />      
            <Route path='/profile' element={<Profile />} />    
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>        
      </div>   
    )
  }


export default App;
