import React from 'react'

import Accordion from './basic/Accordion'
export default function UnityVR() {

  return (
    <div>
      <h2>Highlighting an Object with a shader1</h2>
      <Accordion header = 'Create Shader'
      content = 'Create new Shader (Outline Shader) and take code from <a href="https://wiki.unity3d.com/index.php/Silhouette-Outlined_Diffuse">from here</a>'
      ></Accordion>

      <Accordion header = 'Create new Material and attach Shader to it'
      content = 'On new material select "Custom/Outline Shader" or wherever your "Shader" property points to from Outline Shader.shader'
      ></Accordion>

      <Accordion header = 'Control when Shader is displayed'
      content = 'GetComponent&lt;Renderer&gt;().material.SetFloat("_Outline", someFlag ? 0.008f : 0);'
      ></Accordion>
      
    </div>
  );
}