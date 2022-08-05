import React from "react";
import InfoBoxView from "./InfoBoxView";

export interface InfoBoxProps {
    header: string;
    value: string;
}

const InfoBoxController: React.FC<InfoBoxProps> = ({ header, value }) => {
    return <InfoBoxView header={header} value={value} />;
}

export default InfoBoxController;
