import React from 'react';

import Accordion from 'component/basic/Accordion'

const Promises101 = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <>
      <h3>Promises 101</h3>
      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'basic'
      content = ''
      code = {`const getData = new Promise((resolve, reject) => {
        someFunctionThatTakesAWhile() => {
          let someData = []
          resolve(someData)
        })
      })
    
      getData.then((data) => {
        // do something with data
      })
        `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'chain'
      content = ''
      code = {`const getData = new Promise((resolve, reject) => {
        someFunctionThatTakesAWhile() => {
          let someData = []
          console.log('runs first...')
          resolve(someData)
        })
      })
      .then(() => {
        console.log('runs second...')
      })
    
      getData.then(() => {
        console.log('runs last...')
      })
        `}
      />

      

      
    </>
  )
}

export default Promises101;