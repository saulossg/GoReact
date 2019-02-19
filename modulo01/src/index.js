import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";

class Button extends Component {
  static defaultProps = {
    children: "Salvar"
  };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  };

  render() {
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
}

Button.defaultProps = {
  children: "Teste"
};

class App extends React.Component {
  state = {
    counter: 0
  };

  handleClick() {
    alert("Botão clicado...");
  }

  handleClick2 = () => {
    // this.setState({ counter: this.state.counter + 1 }, () => {
    //   console.log(this.state.counter);
    // });

    // this.setState(state => ({
    //   counter: state.counter + 1
    // }));
    // this.setState(state => ({
    //   counter: state.counter + 1
    // }));

    this.setState = { counter: this.state.counter + 1 };
    this.setState = { counter: this.state.counter + 1 };
  };
  handleClick2 = () => {
    // this.setState({ counter: this.state.counter + 1 }, () => {
    //   console.log(this.state.counter);
    // });

    //Esse state não é o mesmo state do componente e
    //sim o state da fila.

    this.setState(state => ({
      counter: state.counter + 1
    }));
    this.setState(state => ({
      counter: state.counter + 1
    }));

    // this.setState({ counter: this.state.counter + 1 });
    // this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <Fragment>
        <h1>Hello Rockeseat</h1>
        {/* <Button
          onClick={() => {
            alert("Button 1");
          }}
        />
        <br />
        <Button onClick={this.handleClick}>Enviar</Button>
        <br /> */}
        <Button onClick={this.handleClick2}>Somar</Button>
        <br />
        <h2>{this.state.counter}</h2>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
