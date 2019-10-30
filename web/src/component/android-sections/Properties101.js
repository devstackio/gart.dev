import React from 'react';

import Accordion from 'component/basic/Accordion'

const Properties101 = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <>
      <h3>Properties 101</h3>
      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'assigning properties'
      content = ''
      code = {`
      val name: String = "immutable property defined by val"
      val nameTwo = "immutable property with type inferred"

      var mutable: String = "mutable prop"
      var mutableTwo = "mutable with String inferred"
        `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="2" 
      header = 'custom getter and setter'
      content = ''
      code = {`
      var first = "John"
      var last = "Wick"
      var fullName: String
      get() = first + " " + last
      set(value) {
        // can modify this param (fullName) or others using value param
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

export default Properties101;