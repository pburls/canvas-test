import React from "react";
import { Group, Rect, Text } from 'react-konva';

export const width = 100;
export const height = 50;
export const createStepProps = (x, y, name) => {
    return {
        left_x: x,
        top_y: y,
        middle_y: y+(height/2),
        right_x: x+width,
        name
    };
}

const onInfoClick = () => {
    console.log('info clicked');
};

const Step = ({step}) => {
    return (
    <Group x={step.left_x} y={step.top_y}>
        <Rect
            width={width}
            height={height}
            stroke={'black'}
            strokeWidth={2}
            fill={'grey'}>
        </Rect>
        <Text
            width={width}
            text={step.name}
            padding={5}
            align={'center'}
        />
        <Text
            fontFamily="FontAwesome"
            text={'\uf05a'}
            fill="black"
            onMouseDown={onInfoClick}
            onMouseEnter={() => {
                document.body.style.cursor = "pointer";
            }}
            onMouseLeave={() => {
                document.body.style.cursor = "default";
            }}
        />
    </Group>
    );
}

export default Step;