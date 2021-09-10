import React from "react";

const Side = (props) => {
  return (
    <div className="side">
      <ul className="drawer-menu">
        <li>
          <a href={props.link} title={props.title}>
            {props.title}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Side;
