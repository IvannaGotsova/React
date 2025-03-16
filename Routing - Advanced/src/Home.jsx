import FirstRouteLink from '../../Routing - Advanced/src/FirstRouteLink'
import SecondRouteLink from '../../Routing - Advanced/src/SecondRouteLink'
import ThirdRouteLink from '../../Routing - Advanced/src/ThirdRouteLink'
import {Routes, Route, NavLink} from 'react-router-dom'

function Home () {
    return (
        <>
          <NavLink to="/firstroutelink">First Route Link</NavLink>
          <br />
          <NavLink to="/secondroutelink">Second Route Link</NavLink>
          <br />
          <NavLink to="/thirdroutelink">Third Route Link</NavLink>
          <br />
          <br />

          <Routes>
            <Route path="/firstroutelink" element={<FirstRouteLink />} />
            <Route path="/secondroutelink" element={<SecondRouteLink />} />
            <Route path="/thirdroutelink" element={<ThirdRouteLink />} />
          </Routes>
        </>
    )
}

export default Home