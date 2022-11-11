import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Cook the bear", "Turn off the light"],
      current: "",
    };
    this.addInputValue = this.addInputValue.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  addInputValue() {
    let newArray = [...this.state.list]
    newArray.push(this.state.current)
    console.log(newArray)
    this.setState({
      list: [...newArray],
    })
  }

  updateInputValue(evt) {
    const val = evt.target.value;
    this.setState({
      current: val,
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.list.map((elem) => {
            return <li>{elem}</li>;
          })}
        </ul>
        <input type="text" onChange={this.updateInputValue}></input>
        <button onClick={this.addInputValue}>Submit</button>
      </div>
    );
  }
}

export default Input;
