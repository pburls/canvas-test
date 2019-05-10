import React from "react";
import { Arrow } from 'react-konva';

const Connection = ({leftStep, rightStep}) => (
    <Arrow x={leftStep.right_x} y={leftStep.middle_y} points={[0, 0, rightStep.left_x-leftStep.right_x, rightStep.middle_y-leftStep.middle_y]} stroke={'black'} fill={'black'} strokeWidth={2} />
);

export default Connection;