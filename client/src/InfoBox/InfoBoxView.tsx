import React from "react";
import { colors } from "../settings";
import "./InfoBox.css";
import { InfoBoxProps } from "./InfoBoxController";



const InfoBoxView: React.FC<InfoBoxProps> = ({header, value}) => (
    <div className = "info-box-container" style={{ backgroundColor: colors.tile, color: colors.text }}>
        <p style={{flex: 1}}>{header}</p>
        <p style={{ flex: 1, display: 'flex', marginTop: 70, fontWeight: 'bold', fontSize: 25}}>{value}</p>
    </div>
)

export default InfoBoxView;