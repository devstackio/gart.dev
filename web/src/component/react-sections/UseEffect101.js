import React from 'react';

import Accordion from 'component/basic/Accordion'

const UseEffect101 = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <>
      <h3>useEffect 101 ( React Hooks )</h3>
      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'componentDidMount'
      content = 'the empty array passed to useEffect is the lifecycles it will run in, empty is equivalent to onComponentDidMount,
      we can pass i.e. "props.someParam" so that this will get called anytime props.someParam is modified'
      code = {`import React, { useEffect } from 'react';
      
      function ManageCoursePage(props) {
        useEffect( () => {
          // some code
        }, [])
        `}
      />

      {/* <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'tt1'
      content = ''
      code = {`
        `}
      /> */}

      
    </>
  )
}

export default UseEffect101;