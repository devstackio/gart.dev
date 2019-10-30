import React from 'react';

import Accordion from 'component/basic/Accordion'

const ObjectAndData101 = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <>
      <h3>Object and Data declarations</h3>
      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'object'
      content = 'use object declaration when a Singleton is needed, automatically instantiates one instance as a Singleton throughout application'
      code = {`object DataManager {
        ...
        `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'data'
      content = 'use data declaration when standard methods are needed i.e. equals() / hashCode(), toString(), and copy() are automatically acquired'
      code = {`data class NoteInfo(var course:CourseInfo, var title: String)
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

export default ObjectAndData101;