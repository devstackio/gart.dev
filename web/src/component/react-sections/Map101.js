import React from 'react';

import Accordion from 'component/basic/Accordion'

const Map101 = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <>
      <h3>Map 101</h3>
      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'mapping referenced data in mapStateToProps(state)'
      content = 'courses are mapped with response data normally, with an added "authorName" parameter that stores authorNames by id'
      code = {`function mapStateToProps(state) {
        return {
          courses: 
            state.authors.length === 0
              ? []
              : state.courses.map(course => {
                return {
                  ...course,
                  authorName: state.authors.find(a => a.id === course.authorId).name
                }
          }),
          authors: state.authors
        };
      }
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

export default Map101;