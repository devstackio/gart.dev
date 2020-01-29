import React from 'react';

import Accordion from 'component/basic/Accordion'

const Map101 = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <>
      <h3>.map 101</h3>
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
      header = '<select> with mapped options'
      content = ''
      code = {`<select
      name={name}
      value={value}
      onChange={onChange}
      className="form-control"
    >
      <option value="">{defaultOption}</option>
      {options.map(option => {
        return (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        );
      })}
    </select>`
      }
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="3" 
      header = 'basic jsx map'
      content = ''
      code = {`
      function render() {
        return (
          <ul>
            {this.props.items.map(function(item) {
              return <li key={item.id}>{item.name}</li>
            })}
          </ul>
        );
      }
        `}
      />

      
    </>
  )
}

export default Map101;