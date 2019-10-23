import React from 'react'

import Accordion from './basic/Accordion'
export default function UnityVR() {

  const [ expanded, setExpanded ] = React.useState(false);

  return (
    <div>
      <h2>Highlighting an Object with a shader1</h2>
      <Accordion expanded={expanded} setExpanded={setExpanded} id="1" header = 'Create Shader'
      content = 'Create new Shader (Outline Shader) and take code from <a href="https://wiki.unity3d.com/index.php/Silhouette-Outlined_Diffuse">from here</a>'
      ></Accordion>

      <Accordion expanded={expanded} setExpanded={setExpanded} id="2" header = 'Create new Material and attach Shader to it'
      content = 'On new material select "Custom/Outline Shader" or wherever your "Shader" property points to from Outline Shader.shader'
      ></Accordion>

      <Accordion expanded={expanded} setExpanded={setExpanded} id="3" header = 'Control when Shader is displayed'
      content = 'GetComponent&lt;Renderer&gt;().material.SetFloat("_Outline", someFlag ? 0.008f : 0);'
      ></Accordion>
      
    </div>
  );
}