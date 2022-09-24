import TitleIcon from '@mui/icons-material/Title';
import React from 'react';
import styles from "./InsertTextButton.module.scss";

interface InsertTextButtonProps{
    onClick: ()=> void;
}

const InsertTextButton: React.FC<InsertTextButtonProps> = ({onClick})=>{
    return <div className={styles.insert_text_button} onClick={onClick}><TitleIcon/></div>
}