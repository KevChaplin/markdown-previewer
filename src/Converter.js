import React from 'react';
import ReactMarkdown from 'react-markdown';
import breaks from 'remark-breaks';
import HelpBox from './HelpBox';
import helpIcon from './assets/info-icon.png';

class Converter extends React.Component {
  constructor() {
    super()
    this.state ={
      inputText: defaultText,
      displayHelp: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value,
    })
  }

  handleClick() {
    this.setState({
      displayHelp: !this.state.displayHelp
    })
  }

  render() {

    const btnStyle = {
      backgroundImage: `url(${helpIcon})`,
      backgroundColor: this.state.displayHelp ? '#ffeb99' : 'white'
    }

    return (
      <div id="converter">
        <button id="help-btn" onClick={this.handleClick} style={btnStyle}></button>
        <HelpBox show={this.state.displayHelp}/>
        <textarea
          id="editor"
          className="window"
          value={this.state.inputText}
          onChange={this.handleChange}>
        </textarea>
        <div
          id="preview"
          className="window">
          <ReactMarkdown plugins={[breaks]}>{this.state.inputText}</ReactMarkdown>
          //react-markdown used for converting input text to Markdown
          //remark-breaks used to detect line-breaks
        </div>
      </div>
    )
  }
}

const defaultText = `# Wow big writing!
## Not so big writing
### and a little bit smaller big writing
#### I wonder how far this goes...

and some regular writing
with line breaks

use **angry** or *slanty* (techincal terms)
and ***craaaazy***

what about lists of things?
- like this?
- and this?
  - or perhaps this one?
    1. let's number them too
    2. sweet

> *A clever and witty quote perhaps*
>
> by someone more clevererer than me

And we need some imagey goodness

![Fluffywuffy, the Dragon](/dragon.png)

Check out our dragon's favourite website,
[FluffyDragons.com](https://www.fluffydragons.com/)

Chuck in some inline code \`<html></html>\`

Or go into h@ck3r m0de!

\`\`\`
  <div>
    <p>Hello World!</p>
  </div>
\`\`\`
`;

export default Converter
