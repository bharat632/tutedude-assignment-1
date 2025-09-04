import React, { Component } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

import "./ClassBasedComponent.css";

class ClassBasedComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter : 0
    }
  }

    count = 0;
    increase() { 
      this.count++;
      this.setState({
        counter: this.count
      });
    }

    decrease() {
      if (this.count > 0) {
        this.count--;
        this.setState({
          counter: this.count,
        });
      }
    }

  render() {
    
    return (
      <div class="card">
        <div class="card-body">
          <h3 class="card-title title">Class Based Component</h3>
          <div className="body shadow-lg p-3 mb-5 bg-body rounded">
            <button className="btn counter-btn" onClick={() => this.increase()}>
              <FaPlus style={{ color: "white", fontSize: "60px" }} />
            </button>
            <div className="counter">
              <h4>{ this.state.counter }</h4>
            </div>
            <button className="btn counter-btn" onClick={() => this.decrease()}>
              <FaMinus style={{ color: "white", fontSize: "60px" }} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ClassBasedComponent;
