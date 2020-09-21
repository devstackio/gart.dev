import React from 'react';

import Accordion from 'component/basic/Accordion'

const UseEffect101 = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <>
      <h3>useEffect 101 ( React Hooks )</h3>
      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'useEffect'
      content = 'the empty array passed to useEffect will re-render whenever any parameter inside gets updated'
      code = {`import React, { useEffect } from 'react';
      
const ManageCoursePage = props => {

  useEffect( () => {
    // some code
  }, [])

}
        `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="2" 
      header = 'useEffect run once'
      content = 'quick way to make sure useEffect runs only once as an init method'
      code = {`
const useEffectOnce = (func) => useEffect( func, [] )

  useEffectOnce( () => {
    //will only run once
  })

}
        `}
      />

      {/* <Accordion expanded={expanded} setExpanded={setExpanded} id="3" 
      header = 'tt1'
      content = ''
      code = {`
        `}
      /> */}

      
    </>
  )
}

export default UseEffect101;