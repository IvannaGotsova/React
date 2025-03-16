import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
  
import './App.css'
import FirstRouteLink from './FirstRouteLink';
import SecondRouteLink from './SecondRouteLink';
import ThirdRouteLink from './ThirdRouteLink';
import FourthRouteLink from './FourthRouteLink';
import FifthRouteLink from './FifthRouteLink';
import FirstRouteButton from './FirstRouteButton';
import SecondRouteButton from './SecondRouteButton';
import ThirdRouteButton from './ThirdRouteButton';
import Default from './Default';

function App() {

  return (
    <>

      <div>
        <Link to='/firstroutelink'> First Route Link </ Link>
        <br />
        <Link to='/secondroutelink'> Second Rute Link </ Link>
        <br />
        <Link to='/thirdroutelink'> Third Route Link </ Link>
        <br />
        <Link to='/fourthroutelink'> Fourth Route Link </ Link>
        <br />
        <Link to='/fifthroutelink'> Fifth Route Link </ Link>
      </div>
      <br />
      <div>
        <Link to="/firstroutebutton"><button type="button">First</button></Link>
        <br />
        <Link to="/secondroutebutton"><button type="button">Second</button></Link>
        <br />
        <Link to="/thirdroutebutton"><button type="button">Third</button></Link>
      </div>
      <div>
        
      </div>

      <Routes>
        <Route path='/firstroutelink' element={<FirstRouteLink/>}/>
        <Route path='/secondroutelink' element={<SecondRouteLink/>}/>
        <Route path='/thirdroutelink' element={<ThirdRouteLink/>}/>
        <Route path='/fourthroutelink' element={<FourthRouteLink/>}/>
        <Route path='/fifthroutelink' element={<FifthRouteLink/>}/>
      </Routes>
      <Routes>
        <Route path='/firstroutebutton' element={<FirstRouteButton/>}/>
        <Route path='/secondroutebutton' element={<SecondRouteButton/>}/>
        <Route path='/thirdroutebutton' element={<ThirdRouteButton/>}/>
      </Routes>
      <Routes>
        <Route path="*" element={<Default />} />
      </Routes>
    </>
  )
}

export default App
