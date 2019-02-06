import React from "react";
import ReactDOM from "react-dom";
import { Stage, Layer, Rect, Text, Arrow } from 'react-konva';

const Index = () => (
    <Stage width={400} height={200}>
        <Layer>
            <Text text="Try click on rect" />
            <Rect
                x={20}
                y={20}
                width={50}
                height={50}
                fill={'green'}
            />
            <Rect
                x={120}
                y={20}
                width={50}
                height={50}
                fill={'green'}
            />
            <Arrow x={70} y={45} points={[0, 0, 50, 0]} stroke={'black'} strokeWidth={4} />
        </Layer>
    </Stage>
);

ReactDOM.render(<Index />, document.getElementById("root"));
