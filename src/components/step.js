import React from "react";
import { Group, Rect, Text } from 'react-konva';

const width = 100;
const Step = ({x, y, name}) => {
    return (
    <Group x={x} y={y}>
        <Rect
            width={width}
            height={50}
            stroke={'black'}
            strokeWidth={2}
            fill={'grey'}>
        </Rect>
        <Text
            width={width}
            text={name}
            padding={20}
            align={'center'}
            />
    </Group>
    );
}

export default Step;