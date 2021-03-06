import React from "react";

export default class Circle extends React.Component {
  render() {
    const {
      childLeft,
      childRight,
      cx,
      cy,
      level,
      name,
      parent,
      radius,
      stroke
    } = this.props.circle;

    return (
      <g key={Math.random()}>
        <circle
          id={name}
          className={`${name}`}
          data-child-left={childLeft ? childLeft.name : ""}
          data-child-right={childRight ? childRight.name : ""}
          data-parent={parent}
          data-level={level}
          cx={cx}
          cy={cy}
          r={radius}
          stroke={stroke}
          strokeWidth="1"
          fill="none"
        />
        <text 
          x={cx} 
          y={cy} 
          textAnchor="middle" 
          alignmentBaseline="central"
          fontFamily="Raleway"
        >
          {name}
        </text>
      </g>
    );
  }
}
