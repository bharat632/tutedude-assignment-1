import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

import "./FunctionBasedComponent.css";

function FunctionBasedComponent(props) {

    const [ counter, updateCounter ] = useState(0);
    function increase(){
        updateCounter(count => count+1);
    }

    function decrease(){
        if(counter > 0){
            updateCounter(count => count-1);
        }
    }
  return (
    <div class="card">
      <div class="card-body">
        <h3 class="card-title title">Function Based Component</h3>
        <div className="body shadow-lg p-3 mb-5 bg-body rounded">   
          <button className="btn counter-btn" onClick={ () => increase() }>
            <FaPlus style={{ color: "white", fontSize: "60px" }} />
          </button>
          <div className="counter">
            <h4>{ counter }</h4>
          </div>
          <button className="btn counter-btn" onClick={ () => decrease() }>
            <FaMinus style={{ color: "white", fontSize: "60px" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FunctionBasedComponent;
