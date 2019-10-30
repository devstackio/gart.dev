import React from 'react';

import Accordion from 'component/basic/Accordion'

const ActivitiesAndIntents101 = () => {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <>
      <h3>Activities and Intents 101</h3>
      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'starting a new Activity'
      content = 'Activities are created via Intents, an Intent usually accepts a context (this) and an Activity to load'
      code = {`class MainActivity : AppCompatActivity() {
        ...
        val activityIntent = Intent(this, MainActivity::class.java)
            startActivity(activityIntent)
        `}
      />

      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" 
      header = 'passing data into an Activity'
      content = 'data is passed via key value pairs through an Intents "putExtra" method"'
      code = {`
      val activityIntent = Intent(this, MainActivity::class.java)
      activityIntent.putExtra("someKey", "someValue")
      startActivity(activityIntent)
      ...

      // we can access the passed "someKey" extra via the receiving Activity's inhereted "intent" parameter
      // i.e. inside receiving Activity's onCreate method :
      ...
      var receivedValue = intent.getIntExtra("someKey", "defaultValueIfNotFound")
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

export default ActivitiesAndIntents101;