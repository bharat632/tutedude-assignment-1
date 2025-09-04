import "./App.css";

import ClassBasedComponent from "./components/ClassBasedComponent/ClassBasedComponent";
import FunctionBasedComponent from "./components/FunctionBasedComponent/FunctionBasedComponent";

function App() {
  return (
    <div className="container-fluid App">
      <div className="container container-section">
        <header>
          <h2 className="heading">Assignment-2 Counter Application</h2>
        </header>
        <ClassBasedComponent />
        <FunctionBasedComponent />
      </div>
    </div>
  );
}

export default App;
