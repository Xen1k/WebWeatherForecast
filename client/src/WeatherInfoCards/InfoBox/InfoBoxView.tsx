import React from "react";
import { colors } from "../../settings";
import "./InfoBox.css";
import { InfoBoxProps } from "./InfoBoxController";



const InfoBoxView: React.FC<InfoBoxProps> = ({ header, value, style }) => (
    <div className="info-box-container" style={{ backgroundColor: colors.tile, color: colors.text, ...style }}>
        <p style={{ flex: 1, fontSize: 18 }}>{header}</p>
        <p className="value-text">{value}</p>
    </div >
)

export default InfoBoxView;