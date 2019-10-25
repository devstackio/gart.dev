import React from 'react';

import Accordion from 'component/basic/Accordion'

const Redirects101 = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <>
      <h3>redirects 101</h3>
      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'using <Redirect'
      content = ''
      code = {`import { Redirect } from 'react-router-dom';
      
      render() {
        return (
              {this.state.someRedirectFlag && <Redirect to="/somePage" />}

              <button 
              onClick={() => this.setState({ someRedirectFlag: true })}
            >
        `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="2" 
      header = 'using history'
      content = 'history is automatically passed into props if component is loaded via a <Route></Route>'
      code = {`const { history } = props;
      ...
      function handleSave(event) {
        event.preventDefault();
        saveCourse(course)
        .then( () => {
          history.push('/courses');
          // history.pushState was deprecated
        });
      }
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

export default Redirects101;