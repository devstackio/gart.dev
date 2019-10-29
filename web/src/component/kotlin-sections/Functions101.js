import React from 'react';

import Accordion from 'component/basic/Accordion'

const Functions101 = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <>
      <h3>Functions 101</h3>
      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'basic'
      content = 'default return type is Unit (basically Void) can be omitted'
      code = {`
      class Person( val name:String, var weight: Double) {
        // someParam gets a default value of true
        fun doSomething(someParam: Boolean = true) {
          weight += if (someParam) 2.0 else 4.0
        }
        fun someWeightCalc(weightToLose: Double) :Double {
          return weight - weightToLose
        }
      }
        `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="2" 
      header = 'passing parameters by name'
      content = 'can be passed in any order'
      code = {`
      val p1 = Person("gart", 175.0)

      val p2 = Person(weight = 175.0, name = "gart")
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

export default Functions101;