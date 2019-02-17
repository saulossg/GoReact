import React, { Component, Fragment } from "react";
import { render } from "react-dom";

class Button extends Component {
  render() {
    return (
      <a href="" onClick={this.props.onClick}>
        {this.props.children}
      </a>
    );
  }
}

class App extends React.Component {
  handleClick() {
    alert("Botão clicado...");
  }

  render() {
    return (
      <Fragment>
        <h1>Hello Rockeseat</h1>
        <Button onClick={this.handleClick}>Enviar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
