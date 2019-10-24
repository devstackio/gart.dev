import React from 'react';

import Accordion from 'component/basic/Accordion'

const Thunk101 = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <>
      <h3>redux-thunk 101</h3>
      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'redux/configureStore.js'
      content = ''
      code = {`import { createStore, applyMiddleware, compose } from 'redux';
      import rootReducer from './reducers';
      import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
      import thunk from 'redux-thunk';
      
      export default function configureStore(initialState) {
        const composeEnhancers = 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
        
        return createStore(
          rootReducer, 
          initialState, 
          composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
        );
      }
        `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="2" 
      header = 'actions/courseActions.js'
      content = 'define a function that returns a function, thunk automatically attaches dispatch here'
      code = {`export function loadCourses() {
        return function (dispatch) {
      
        }
      }`}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="3" 
      header = 'actions/componentActions.js'
      content = ''
      code = {`import * as types from "./actionTypes";

      export function someAction(someData) {
        return { type: types.SOME_ACTION, someData };
      }
        `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="4" 
      header = 'actions/componentActions.js'
      content = ''
      code = {`export function loadCoursesSuccess(courses) {
        return { type: types.LOAD_COURSES_SUCCESS, courses };
      }
      
      export function loadCourses() {
        return function (dispatch) {
          return courseApi.getCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
          }).catch(error => {
            throw error;
          });
        }
      }
        `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="5" 
      header = 'reducers/courseReducer.js'
      content = ''
      code = {`import * as types from '../actions/actionTypes';

      export default function courseReducer(state = [], action) {
        switch(action.type) {
          case types.CREATE_COURSE:
            return [...state, { ...action.course }]
          case types.LOAD_COURSES_SUCCESS:
            return action.courses; 
          default:
            return state;
        }
      }
        `}
      />

      {/* <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'tt1'
      content = ''
      code = {`
        `}
      /> */}

      
    </>
  )
}

export default Thunk101;