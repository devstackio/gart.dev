import React from 'react';

import Accordion from 'component/basic/Accordion'

const UrlParams101 = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <>
      <h3>Route 101</h3>
      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'basic : App.js'
      content = ''
      code = {`import React from 'react';
      import { Route, Switch } from 'react-router-dom';
      import Header from './common/Header';
      import HomePage from './home/HomePage';
      import AboutPage from './about/AboutPage';
      import PageNotFound from './PageNotFound';
      
      function App() {
        return (
          <div className="container-fluid">
            <Header />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/about" component={AboutPage} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        )
      }
      
      export default App;
        `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="2" 
      header = 'Url Parameters'
      content = ''
      code = {`<Route path="/course/:slug" component={ManageCoursePage} />
        `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="2" 
      header = 'reading Url Parameters via mapStateToProps'
      content = ''
      code = {`...
      function mapStateToProps(state, ownProps) {
        const slug = ownProps.match.params.slug;
        ...
        `}
      />

      {/* <Accordion expanded={expanded} setExpanded={setExpanded} id="2" 
      header = 'tt1'
      content = ''
      code = {`
        `}
      /> */}

      
    </>
  )
}

export default UrlParams101;