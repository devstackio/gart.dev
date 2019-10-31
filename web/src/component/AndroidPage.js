import React from 'react'

import Accordion from 'component/basic/Accordion'
import Properties101 from 'component/android-sections/kotlin/Properties101'
import Classes101 from 'component/android-sections/kotlin/Classes101'
import Functions101 from 'component/android-sections/kotlin/Functions101'
import ObjectAndData101 from 'component/android-sections/kotlin/ObjectAndData101'
import ActivitiesAndIntents101 from 'component/android-sections/general/ActivitiesAndIntents101'
import ErrorHandling101 from 'component/android-sections/kotlin/ErrorHandling101'

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
        <ObjectAndData101 />
        <ErrorHandling101 />
      </Accordion>

      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'general'
      content = ''
      code = ''
      >
        <ActivitiesAndIntents101 />
      </Accordion>
    </div>
  )
}

export default AndroidPage;