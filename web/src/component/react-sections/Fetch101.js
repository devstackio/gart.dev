import React from 'react';

import Accordion from 'component/basic/Accordion'

const Fetch101 = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <>
      <h3>fetch 101</h3>
      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'basic'
      content = ''
      code = {`export function getCourses() {
        return fetch("http://localhost:3001/courses/")
          .then(handleResponse)
          .catch(handleError);
      }
        `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="2" 
      header = 'params'
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
      header = 'handleResponse : async / await example'
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

export default Fetch101;