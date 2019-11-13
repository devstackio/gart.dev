import React from 'react';

import Accordion from 'component/basic/Accordion'

const ConfigServer101 = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <>
      <h3>ConfigServer 101</h3>
      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'git hosted via application.yml'
      content = 'search-paths are directories from root containing abc-def.properties files i.e. spring-cloudconfig-demo/station1/s1rates-dev.properties could be accessed after running springboot app via http://localhost:8888/s1rates-dev/default'
      code = {`---
      server:
        port: 8888
      spring:
        cloud:
          config:
            server:
              git:
                uri: https://github.com/devstackio/spring-cloudconfig-demo
                search-paths:
                - station1
                - station2
                #username: uname
                #password: pass
        `}
      />

      {/* <Accordion expanded={expanded} setExpanded={setExpanded} id="2" 
      header = 'tt1'
      content = ''
      code = {`
        `}
      /> */}

      
    </>
  )
}

export default ConfigServer101;