import React from 'react';

import Accordion from 'component/basic/Accordion'

const Redux101 = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <>
      <h3>Redux 101</h3>
      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'redux/configureStore.js'
      content = 'Create new Shader (Outline Shader) and take code from <a href="https://wiki.unity3d.com/index.php/Silhouette-Outlined_Diffuse">from here</a>'
      code = {`import { createStore, applyMiddleware, compose } from 'redux';
      import rootReducer from './reducers';
      import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
      
      export default function configureStore(initialState) {
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
        return createStore(
          rootReducer, 
          initialState, 
          composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
        );
      }
        `}
      ></Accordion>

      <Accordion expanded={expanded} setExpanded={setExpanded} id="2" header = 'Create Shader'
      content = 'Create new Shader (Outline Shader) and take code from <a href="https://wiki.unity3d.com/index.php/Silhouette-Outlined_Diffuse">from here</a>'
      ></Accordion>
    </>
  )
}

export default Redux101;