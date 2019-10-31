import React from 'react';

import Accordion from 'component/basic/Accordion'

const ErrorHandling101 = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <>
      <h3>Error Handling 101</h3>
      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'try catch'
      content = ''
      code = {`try {
        ...
    } catch (e:Exception) {
        e.printStackTrace()
    }
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

export default ErrorHandling101;