import React from "react";
import ReactDOM from "react-dom";
import EventComponent from "./events/EventComponent";

const App = () => {
  return <EventComponent />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
