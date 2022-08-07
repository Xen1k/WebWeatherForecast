import React from "react";
import InfoBoxView from "./InfoBoxView";

export interface InfoBoxProps {
    header: string;
    value: string;
    style?: React.CSSProperties;
}

const InfoBoxController: React.FC<InfoBoxProps> = ({ header, value, style }) => {
    return <InfoBoxView header={header} value={value} style={style} />;
}

export default InfoBoxController;
