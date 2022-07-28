import * as React from "react";

import ReactSpeedometer, {
    CustomSegmentLabelPosition
} from "react-d3-speedometer";

export default function ReactSpeedometerCompoent() {

    const customSegmentLabels = [
        {
            text: "Very Bad",
            position: "INSIDE",
            color: "#555"
        },
        {
            text: "Bad",
            // position: "INSIDE",
            color: "#555"
        },
        {
            text: "Ok",
            // position: "INSIDE",
            color: "#555",
            fontSize: "19px"
        },
        {
            text: "Good",
            // position: "INSIDE",
            color: "#555"
        },
        {
            text: "Very Good",
            // position: "INSIDE",
            color: "#555"
        }
    ];



    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <ReactSpeedometer
                value={333}
                width={500}
                needleHeightRatio={0.7}
                needleTransition="easeElastic"
                customSegmentLabels={customSegmentLabels}
                ringWidth={47}
            />


        </div>
    );
}
