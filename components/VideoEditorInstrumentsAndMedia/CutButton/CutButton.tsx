import React from "react";
import styles from "./CutButton.module.scss";
import ContentCutIcon from '@mui/icons-material/ContentCut';

export interface CutButtonProps{
    onKeyDown: ()=> void;
    onClick: ()=> void;
}

const CutButton: React.FC<CutButtonProps> = ({onClick,onKeyDown})=>{
    return <div className={styles.cut_button} onClick={onClick} onKeyDown={onKeyDown}><ContentCutIcon/></div>
}
export default CutButton;