import React from "react";
import { Group } from 'react-konva';
import Step, { createStepLocation } from './step';
import Connection from './connection';

const rowHeight = 100;
const firstRow = rowHeight*0;
const columnWidth = 180;
const uvpArrived = createStepLocation(columnWidth*0, firstRow, "UVP Arrived");
const uvpUnpack = createStepLocation(columnWidth*1, firstRow, "UVP Unpack");
const adiValidation = createStepLocation(columnWidth*2, firstRow, "ADI Validation");
const adiIngest = createStepLocation(columnWidth*3, firstRow, "ADI Ingest");
const adiIngestComplete = createStepLocation(columnWidth*4, firstRow, "ADI Ingest Completed");



const MapWorkflow = ({x, y, infoClick}) => (
    <Group x={x} y={y}>
        <Step location={uvpArrived} infoClick={infoClick}/>
        <Step location={uvpUnpack} infoClick={infoClick}/>
        <Connection leftStep={uvpArrived} rightStep={uvpUnpack} />
        <Step location={adiValidation}/>
        <Connection leftStep={uvpUnpack} rightStep={adiValidation} />
        <Step location={adiIngest}/>
        <Connection leftStep={adiValidation} rightStep={adiIngest} />
        <Step location={adiIngestComplete} infoClick={infoClick}/>
        <Connection leftStep={adiIngest} rightStep={adiIngestComplete} />
    </Group>
);

export default MapWorkflow;