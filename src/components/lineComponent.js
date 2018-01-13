import React from "react";
import { RADIUS } from "../data/constants";

export default class Line extends React.Component {
  render() {
    const { pcx, pcy, lcx, lcy, rcy, rcx } = this.props.line;

    const parentAngleL = Math.atan2(lcy - pcy, lcx - pcx);
    const parentAngleR = Math.atan2(rcy - pcy, rcx - pcx);

    const childAngleL = Math.atan2(pcy - lcy, pcx - lcx);
    const childAngleR = Math.atan2(pcy - rcy, pcx - rcx);

    const pxL = Math.cos(parentAngleL) * RADIUS + pcx;
    const pxR = Math.cos(parentAngleR) * RADIUS + pcx;

    const lx = Math.cos(childAngleL) * RADIUS + lcx;
    const rx = Math.cos(childAngleR) * RADIUS + rcx;

    const pyL = Math.sin(parentAngleL) * RADIUS + pcy;
    const pyR = Math.sin(parentAngleR) * RADIUS + pcy;

    const ly = Math.sin(childAngleL) * RADIUS + lcy;
    const ry = Math.sin(childAngleR) * RADIUS + rcy;
    console.log("theres the line", pxL, pxR, lx, rx, pyL, pyR, ly, ry);
    const leftLine = `M${pxL} ${pyL} L${lx} ${ly}`;
    const rightLine = `M${pxR} ${pyR} L${rx} ${ry}`;
    return (
      <g>
        <path d={leftLine} stroke="black" />;
        <path d={rightLine} stroke="black" />;
      </g>
    );
  }
}
