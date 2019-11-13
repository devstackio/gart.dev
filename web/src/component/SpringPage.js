import React from 'react'

import Accordion from 'component/basic/Accordion'
import ConfigServer101 from 'component/spring-sections/cloud/ConfigServer101'

const SpringPage = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <div class="content">
      <h1>Spring Development</h1>

      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'Spring Cloud'
      content = ''
      code = ''
      >
        <ConfigServer101 />
        
      </Accordion>
    </div>
  )
}

export default SpringPage;