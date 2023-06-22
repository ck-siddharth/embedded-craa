import React, { Component } from 'react';

class EmbedComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        "001": [
          "Heading 1",
          "Heading 2",
          "Heading 3",
          "Heading 4",
          "Heading 5"
        ],
        "002": [
          "Title 1",
          "Title 2",
          "Title 3",
          "Title 4",
          "Title 5"
        ]
      }
    };
  }

  generateEmbeddedCode = () => {
    const { data } = this.state;
    const { dataId } = this.props;
    const headings = data[dataId];

    if (!headings) return null;

    const embeddedCode = `<div id="headings" data-id="${dataId}"></div>
<script src="https://ck-siddharth.github.io/embedded-craa/static/js/main.4e7fe7bc.js" data-id="${dataId}"></script>`;

    return embeddedCode;
  };

  render() {
    const { dataId } = this.props;
    const headings = this.state.data[dataId];

    if (!headings) return null;

    return (
      <>
        <div id="headings" data-id={dataId}></div>
        <ul>
          {headings.map((heading, index) => (
            <li key={index}>{heading}</li>
          ))}
        </ul>
        {this.generateEmbeddedCode()}
      </>
    );
  }
}

export default EmbedComponent;
