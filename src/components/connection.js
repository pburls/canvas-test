import React from "react";
import { Arrow } from 'react-konva';

const Connection = ({x1, y1, x2, y2}) => (
    <Arrow x={x1} y={y1} points={[0, 0, x2-x1, y2-y1]} stroke={'black'} strokeWidth={3} />
);

export default Connection;