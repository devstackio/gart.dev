import React from 'react';

import Accordion from 'component/basic/Accordion'

const ClickHandlers101 = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <>
      <h3>Click Handlers 101</h3>
      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'OnClick listener : launch activity'
      content = 'add button or view etc via design view and assign id "someUiComponent"'
      code = {`
      someUiComponent.setOnClickListener { _ ->
        startActivity(Intent(this, ArticleDetailActivity::class.java))
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

export default ClickHandlers101;