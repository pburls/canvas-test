import React from "react";
import ReactDOM from "react-dom";
import { Stage, Layer, Rect, Text, Arrow } from 'react-konva';
import Step from './components/step';
import Connection from './components/connection';

const FirstStep = () => (<Step x={20} y={100} name="first step" />);
const SecondStep = () => (<Step x={220} y={100} name="second step" />);

const Index = () => (
    <Stage width={400} height={200}>
        <Layer>
            <FirstStep/>
            <SecondStep/>
            <Connection x1={120} y1={125} x2={220} y2={125} />
        </Layer>
    </Stage>
);

ReactDOM.render(<Index />, document.getElementById("root"));
