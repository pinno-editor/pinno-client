import React from "react";
import { Container, Grid, ButtonGroup } from "@mui/material";
import VideoEditorButton from "./VideoEditorButton/VideoEditorButton";
import ContentCutIcon from '@mui/icons-material/ContentCut';
import TitleIcon from '@mui/icons-material/Title';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const InstrumentsBar = ()=>{
    return <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <VideoEditorButton> <ContentCutIcon/> </VideoEditorButton>
        <VideoEditorButton> <AddPhotoAlternateIcon/> </VideoEditorButton>
        <VideoEditorButton> <TitleIcon/> </VideoEditorButton>
    </ButtonGroup>
}
export default InstrumentsBar;