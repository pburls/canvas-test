import React from "react";
import ReactDOM from "react-dom";
import { Stage, Layer } from 'react-konva';
import MapWorkflow from './components/map-workflow';

const Index = () => (
    <Stage width={1000} height={200}>
        <Layer>
            <MapWorkflow x={0} y={0} />
        </Layer>
    </Stage>
);

ReactDOM.render(<Index />, document.getElementById("root"));
