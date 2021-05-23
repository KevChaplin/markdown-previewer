import React from 'react';

function HelpBox(props) {
  return (
    <div id="help-box" style={props.show ? {display: "block"} : {display: "none"}}>
      <p># h1<br />
      ## h2<br />
      ### h3<br />
      *emphasis*<br />
      **bold**<br />
      ***bold & emphasis***<br />
      <br />
      - list item 1<br />
      - list item 2<br />
      1. numbered item<br />
      (tab) 1. sub-list item<br />
      <br />
      > quote<br />
      > multi-line quotes<br />
      <br />
      insert images:<br />
      ![example name](/example.png)<br />
      insert link:<br />
      [example.com](https://www.example.com/)<br />
      <br />
      for in-line code use backticks `&lt;div&gt;&lt;/div&gt;`<br />
      for multi-line code use triple backticks<br />
      ```<br />
      &lt;div&gt;<br />
      &lt;/div&gt;<br />
      ```<br />
      <br />
      for more information click
      <a  href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
          target="_blank" rel='noreferrer'> here.</a>
      </p>
    </div>
  );
}

export default HelpBox
