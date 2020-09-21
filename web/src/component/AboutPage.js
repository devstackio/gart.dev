import React from 'react'
import Accordion from 'component/basic/Accordion'

const AboutPage = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <div class="content">
      <h1>About</h1>
      <p>
        Collection of notes for use as reference when developing in React, Android (Updated with Kotlin), or Spring.
      </p>

      <h3>github packages (op)</h3>
      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'npm'
      content = ''
      code = {`
create personal access token via github settings
give write:packages, read:packages, repo priviledges
-> store token

### publishing npm package
set package name to "@repo-owner/repo-name"
// make sure repo-name is different from it's github repo name
npm login --scope @repo-owner --registry https://npm.pkg.github.com
npm publish

// can check if package is visible with
npm view @repo-owner/repo-name

// installing
npm i @repo-owner/repo-name
        `}
      />

    </div>
  )
}

export default AboutPage;