import React from "react";
import ReactDOM from "react-dom";
import { Stage, Layer } from 'react-konva';
import MapWorkflow from './components/map-workflow';

const InfoModal = ({info}) => (
    <div>
        <p>Step Information</p>
        <p>{info}</p>
    </div>
);

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: null
        };

        this.showInfoModal = this.showInfoModal.bind(this);
    }

    showInfoModal(info) {
        this.setState({
            info
        });
    }

    render() {
        return (
            <div>
                <Stage width={1000} height={200}>
                    <Layer>
                        <MapWorkflow x={0} y={0} infoClick={this.showInfoModal} />
                    </Layer>
                </Stage>
                <InfoModal info={this.state.info} />
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById("root"));
