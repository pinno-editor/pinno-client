import { StayPrimaryLandscapeSharp } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import styles from "./VideoEditorButton.module.scss"

interface VideoEditorButtonProps{
    onClick?: ()=>void;
    children: React.ReactNode;
}

const VideoEditorButton: React.FC<VideoEditorButtonProps> = ({onClick, children})=>{
    return <Button className={styles.video_editor_button} onClick={onClick}>{children}</Button>
}
export default VideoEditorButton;