import React from 'react'

import Properties101 from 'component/android-sections/Properties101'
import Classes101 from 'component/android-sections/Classes101'
import Functions101 from 'component/android-sections/Functions101'

const AndroidPage = () => {
  return (
    <div class="content">
      <h1>Android Development</h1>
      <h2>Kotlin</h2>
      <Properties101 />
      <Classes101 />
      <Functions101 />
      <h2>----------</h2>
    </div>
  )
}

export default AndroidPage;