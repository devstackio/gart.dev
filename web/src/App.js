import React from 'react';
import {Route} from 'react-router-dom'

import Home from './component/Home'
import About from './component/About'
import Navigation from './component/Navigation'

class App extends React.Component {
  render() {
    return(
      <div>
        <Navigation />
        <Route exact={true} path={'/'} component={Home} />
        <Route exact={true} path={'/about'} component={About} />
      </div>
    )
  }
}

export default App
