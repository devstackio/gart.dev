import React from 'react';
import { Route, Switch } from 'react-router-dom'

import AboutPage from 'component/AboutPage'
import AndroidPage from 'component/AndroidPage'
import Header from 'component/Header'
import NodePage from 'component/NodePage'
import ReactPage from 'component/ReactPage'
import SpringPage from 'component/SpringPage'

class App extends React.Component {
  render() {
    return(
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={AboutPage} />
          <Route exact path="/android" component={AndroidPage} />
          <Route exact path="/node" component={NodePage} />
          <Route exact path="/react" component={ReactPage} />
          <Route exact path="/spring" component={SpringPage} />
        </Switch>
      </>
    )
  }
}

export default App
