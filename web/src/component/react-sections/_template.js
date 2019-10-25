import React from 'react';

import Accordion from 'component/basic/Accordion'

const Template101 = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <>
      <h3>template 101</h3>
      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'tt1'
      content = ''
      code = {`
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

export default Template101;