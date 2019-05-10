import React from "react";
import ReactDOM from "react-dom";
import { Stage, Layer, Rect, Text, Arrow } from 'react-konva';
import Step, { createStepProps } from './components/step';
import Connection from './components/connection';

const rowHeight = 100;
const firstRow = rowHeight*0;
const columnWidth = 180;
const uvpArrived = createStepProps(columnWidth*0, firstRow, "UVP Arrived");
const uvpUnpack = createStepProps(columnWidth*1, firstRow, "UVP Unpack");
const adiValidation = createStepProps(columnWidth*2, firstRow, "ADI Validation");
const adiIngest = createStepProps(columnWidth*3, firstRow, "ADI Ingest");
const adiIngestComplete = createStepProps(columnWidth*4, firstRow, "ADI Ingest Completed");

const Index = () => (
    <Stage width={1000} height={200}>
        <Layer>
            <Step step={uvpArrived}/>
            <Step step={uvpUnpack}/>
            <Connection leftStep={uvpArrived} rightStep={uvpUnpack} />
            <Step step={adiValidation}/>
            <Connection leftStep={uvpUnpack} rightStep={adiValidation} />
            <Step step={adiIngest}/>
            <Connection leftStep={adiValidation} rightStep={adiIngest} />
            <Step step={adiIngestComplete}/>
            <Connection leftStep={adiIngest} rightStep={adiIngestComplete} />
        </Layer>
    </Stage>
);

ReactDOM.render(<Index />, document.getElementById("root"));
