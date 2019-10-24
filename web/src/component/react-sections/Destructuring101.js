import React from 'react';

import Accordion from 'component/basic/Accordion'

const Destructuring101 = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <>
      <h3>destructuring 101</h3>
      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'basic'
      content = 'some = props.some; nested = props.nested; params = props.params'
      code = {`const { some, nested, params } = props;
        `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="2" 
      header = 'rest parameters (...)'
      content = 'any other params will get set into whatever follows the rest parameter i.e. in this case back into "props" '
      code = {`function someFunction({ some, nested, params, ...props }) {
        ...`
      }
      />


      {/* <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'tt1'
      content = 'redux-immutable-state-invariant will throw error if trying to modify state in reducer, intended for dev use only'
      code = {`
        `}
      /> */}

      
    </>
  )
}

export default Destructuring101;