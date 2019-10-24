import React from 'react';

import Accordion from 'component/basic/Accordion'

const Redux101 = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <>
      <h3>Redux 101</h3>
      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'redux/configureStore.js'
      content = {`redux-immutable-state-invariant will throw error if trying to modify state in reducer, intended for dev use only
      composeEnhancers are for adding redux developer tools`}
      code = {`import { createStore, applyMiddleware, compose } from 'redux';
      import rootReducer from './reducers';
      import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
      
      export default function configureStore(initialState) {
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        return createStore(
          rootReducer, 
          initialState, 
          composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
        );
      }
        `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="2" 
      header = 'actions/actionTypes.js'
      content = ''
      code = {`export const SOME_ACTION = "SOME_ACTION";`}
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
      header = 'reducers/someReducer.js'
      content = ''
      code = {`import * as types from '../actions/actionTypes';

      export default function someReducer(state = [], action) {
        switch(action.type) {
          case types.SOME_ACTION:
            return [
              ...state, { ...action.course }
            ]
          default:
            return state;
        }
      }
        `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="5" 
      header = 'reducers/index.js'
      content = ''
      code = {`import { combineReducers } from 'redux';
      import courses from './courseReducer';
      
      const rootReducer = combineReducers({
        courses
      });
      
      export default rootReducer;
        `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="6" 
      header = 'root/index.js'
      content = ''
      code = {`import configureStore from './redux/configureStore';
import { Provider as ReduxProvider } from 'react-redux';

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Router>
      <App />
    </Router>
  </ReduxProvider>, 
  document.getElementById("app"));
        `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="7" 
      header = 'SomeComponent.js'
      content = ''
      code = {`import React from 'react';
      import { connect } from 'react-redux';
      import { bindActionCreators } from 'redux';
      import * as componentActions from '../../redux/actions/componentActions';
      
      class SomeComponent extends React.Component {
        constructor(props) {
          super(props);
      
          this.state = {
            course: {
              title: ""
            }
          }
      
        }
      
        handleChange = event => {
          const course = { ...this.state.course, title: event.target.value};
          this.setState({ course });
        };
      
        handleSubmit = event => {
          event.preventDefault();
          this.props.actions.someAction(this.state.course);
        }
        render() {
          return (
            <form onSubmit={this.handleSubmit}>
              <h2>Courses</h2>
              <h3>Add Course</h3>
              <input 
                type="text" 
                onChange={this.handleChange} 
                value={this.state.course.title} />
              <input type="submit" value="Save" />
              { this.props.courses.map(course => (
                <div key={course.title}>{course.title}</div>
              ))}
            </form>
          )
        }
      }
      
      CoursesPage.propTypes = {
        actions: PropTypes.object.isRequired,
        courses: PropTypes.array.isRequired
      }
      
      function mapStateToProps(state) {
        return {
          courses: state.courses
        };
      }
      
      function mapDispatchToProps(dispatch) {
        return {
          actions: bindActionCreators(componentActions, dispatch)
        }
      }
      
      export default connect(mapStateToProps, mapDispatchToProps)(SomeComponent);
        `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'when adding a new Reducer : reducers/index.js'
      content = ''
      code = {`import { combineReducers } from 'redux';
      import courses from './courseReducer';
      import authors from './authorReducer';
      
      const rootReducer = combineReducers({
        courses,
        authors
      });
      
      export default rootReducer;
        `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'multiple actions for mapDispatchToProps'
      content = ''
      code = {`function mapDispatchToProps(dispatch) {
        return {
          actions: {
            loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
            loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
          }
        }
      }
        `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'defining an initialState : reducers/initialState.js'
      content = 'centralized place for developers to see initial state'
      code = {`export default {
        courses: [],
        authors: []
      }

      // in reducers/someReducer.js ::
      import initialState from './initialState';

      export default function authorReducer(state = initialState.authors, action) {
        ...
        `}
      />

      {/* <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'redux/configureStore.js'
      content = 'redux-immutable-state-invariant will throw error if trying to modify state in reducer, intended for dev use only'
      code = {`
        `}
      /> */}

      
    </>
  )
}

export default Redux101;