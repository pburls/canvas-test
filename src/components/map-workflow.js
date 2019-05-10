import React from "react";
import { Group } from 'react-konva';
import Step, { createStepProps } from './step';
import Connection from './connection';

const rowHeight = 100;
const firstRow = rowHeight*0;
const columnWidth = 180;
const uvpArrived = createStepProps(columnWidth*0, firstRow, "UVP Arrived");
const uvpUnpack = createStepProps(columnWidth*1, firstRow, "UVP Unpack");
const adiValidation = createStepProps(columnWidth*2, firstRow, "ADI Validation");
const adiIngest = createStepProps(columnWidth*3, firstRow, "ADI Ingest");
const adiIngestComplete = createStepProps(columnWidth*4, firstRow, "ADI Ingest Completed");

const MapWorkflow = ({x, y}) => (
    <Group x={x} y={y}>
        <Step step={uvpArrived}/>
        <Step step={uvpUnpack}/>
        <Connection leftStep={uvpArrived} rightStep={uvpUnpack} />
        <Step step={adiValidation}/>
        <Connection leftStep={uvpUnpack} rightStep={adiValidation} />
        <Step step={adiIngest}/>
        <Connection leftStep={adiValidation} rightStep={adiIngest} />
        <Step step={adiIngestComplete}/>
        <Connection leftStep={adiIngest} rightStep={adiIngestComplete} />
    </Group>
);

export default MapWorkflow;