import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h4>How React works?</h4>
      <p>
        React has virtual DOM that can manipulate the browser DOM. Maintaining
        tree structure which checks the previous state and compare with the
        current state. Its much faster than the Browser DOM manupulation. React
        does not uses plain html but it has a feature which is called
        JSX(javaScript XML) which can compile the react codes into pure
        javaScript code. Basically React is used widely becasue of its
        uniDirectional dataflow for which the exception handelling gets easier.
      </p>
      <h4>Props vs States</h4>
      <p>
        Properties (Props) are sent from one component to another as data, which
        cannot be done by state. However props are immutable, which means it
        cannot be edited after sending to another component, while state can be
        modified. So Basically props are read only but States are both read and
        write.
      </p>
    </div>
  );
};

export default Footer;
