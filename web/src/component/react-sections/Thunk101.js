import React from 'react';

import Accordion from 'component/basic/Accordion'

const Thunk101 = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <>
      <h3>Thunk 101</h3>
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

      <Accordion expanded={expanded} setExpanded={setExpanded} id="6" 
      header = 'tt1'
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
      header = 'tt1'
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

      {/* <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'redux/configureStore.js'
      content = 'redux-immutable-state-invariant will throw error if trying to modify state in reducer, intended for dev use only'
      code = {`
        `}
      /> */}

      
    </>
  )
}

export default Thunk101;