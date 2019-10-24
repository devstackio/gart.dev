import React from 'react';

import Accordion from 'component/basic/Accordion'

const UseEffect101 = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <>
      <h3>UseEffect 101</h3>
      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'componentDidMount'
      content = 'the empty array passed to useEffect is the lifecycles it will run in, empty is equivalent to onComponentDidMount'
      code = {`import React, { useEffect } from 'react';
      
      function ManageCoursePage(props) {
        useEffect( () => {
          // some code
        }, [])
        `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="2" 
      header = 'tt1'
      content = ''
      code = {`export function saveCourse(course) {
        return fetch(baseUrl + (course.id || ""), {
          method: course.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
          headers: { "content-type": "application/json" },
          body: JSON.stringify(course)
        })
          .then(handleResponse)
          .catch(handleError);
      }`
      }
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="3" 
      header = 'tt1'
      content = ''
      code = {`export async function handleResponse(response) {
        if (response.ok) return response.json();
        if (response.status === 400) {
          // So, a server-side validation error occurred.
          // Server side validation returns a string error message, so parse as text instead of json.
          const error = await response.text();
          throw new Error(error);
        }
        throw new Error("Network response was not ok.");
      }
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

export default UseEffect101;