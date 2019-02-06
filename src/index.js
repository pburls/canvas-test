import React from "react";
import ReactDOM from "react-dom";
import { Stage, Layer, Rect, Text } from 'react-konva';

const Index = () => (
    <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
            <Text text="Try click on rect" />
        </Layer>
    </Stage>
);

ReactDOM.render(<Index />, document.getElementById("root"));
