import React from "react";
import styles from "./InsertPhotoButton.module.scss";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { on } from "events";

interface InsertPhotoButtonProps{
    onClick: ()=>void;
}

const InsertPhotoButton: React.FC<InsertPhotoButtonProps> = ({onClick})=>{
    return <div className={styles.insert_photo_button} onClick={onClick}><AddPhotoAlternateIcon/></div>
}