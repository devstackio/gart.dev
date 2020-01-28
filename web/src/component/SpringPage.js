import React from 'react'

import Accordion from 'component/basic/Accordion'
import JPACrud101 from 'component/spring-sections/cloud/JPACrud101'

const SpringPage = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <div class="content">
      <h1>Spring Development</h1>

      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'Spring boot : JPA CRUD with postgresql'
      content = ''
      code = ''
      >
        <JPACrud101 />
        
      </Accordion>
    </div>
  )
}

export default SpringPage;