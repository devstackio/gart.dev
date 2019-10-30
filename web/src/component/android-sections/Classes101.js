import React from 'react';

import Accordion from 'component/basic/Accordion'

const Classes101 = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <>
      <h3>Classes 101</h3>
      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'instantiation'
      content = 'can omit the "new" keyword'
      code = {`val a = Apple()
        `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="2" 
      header = 'primary constructor'
      content = 'basically a javascript function definition with property types'
      code = {`
      class Person(name: String, weight: Double) {
        val name = name
        var weight = weight
      }

      // declare and initialize properties in primary constructor, single line class definition

      class Person(val name: String, var weight: Double))
        `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="2" 
      header = 'initializer block'
      content = 'always runs during construction, function keyword is "init"'
      code = {`
      class SomeClass {

        init {
          initializeThings()
        }

        private fun initializeThings() {
          ...
        }

      }
        `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="2" 
      header = 'secondary constructor'
      content = 'runs only when used, can have multiple secondary constructors, runs after initializer blocks'
      code = {`
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

export default Classes101;