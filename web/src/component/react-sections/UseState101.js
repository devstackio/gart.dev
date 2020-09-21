import React from 'react';

import Accordion from 'component/basic/Accordion'

const UseState101 = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <>
      <h3>useState 101 ( React Hooks )</h3>
      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'useState'
      content = 'sets "course" param into state with a setter, and a default initial value'
      code = {`
import React, { useState } from 'react';
      
const someComponent = props => {

  const [ course, setCourse ] = useState( "defaultValue" )

}
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

export default UseState101;