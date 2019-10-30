import React from 'react'

import Accordion from 'component/basic/Accordion'
import Properties101 from 'component/android-sections/Properties101'
import Classes101 from 'component/android-sections/Classes101'
import Functions101 from 'component/android-sections/Functions101'

const AndroidPage = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <div class="content">
      <h1>Android Development</h1>
      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'Kotlin'
      content = ''
      code = ''
      >
        <Properties101 />
        <Classes101 />
        <Functions101 />
      </Accordion>
    </div>
  )
}

export default AndroidPage;