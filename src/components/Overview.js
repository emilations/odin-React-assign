import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Cook the bear", "Turn off the light"],
    };
  }
  render() {
    return (
      <div>
        <ul>
          {/* {(console.log(this.state.list))} */}
          <li>eww</li>
        </ul>
        <input type="text" />
        <button>Submit</button>
      </div>
    );
  }
}

export default Input;
