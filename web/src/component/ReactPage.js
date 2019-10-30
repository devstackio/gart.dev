import React from 'react'

import Destructuring101 from 'component/react-sections/Destructuring101'
import Fetch101 from 'component/react-sections/Fetch101'
import Map101 from 'component/react-sections/Map101'
import Redirects101 from 'component/react-sections/Redirects101'
import Redux101 from 'component/react-sections/Redux101'
import Route101 from 'component/react-sections/Route101'
import Thunk101 from 'component/react-sections/Thunk101'
import UseEffect101 from 'component/react-sections/UseEffect101'
import UseState101 from 'component/react-sections/UseState101'

const ReactPage = () => {

  return (
    <div class="content">
      <h1>React</h1>
      <Destructuring101 />
      <Fetch101 />
      <Map101 />
      <Redirects101 />
      <Redux101 />
      <Route101 />
      <Thunk101 />
      <UseEffect101 />
      <UseState101 />
    </div>
  )
}

export default ReactPage;