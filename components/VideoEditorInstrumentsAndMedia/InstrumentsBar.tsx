import React from "react";
import { Container, Grid } from "@mui/material";
import CutButton from "./CutButton/CutButton";

const InstrumentsBar = ()=>{
    return <Grid container>
        <Grid><CutButton/></Grid>
        <Grid></Grid>
        <Grid></Grid>
    </Grid>
}
export default InstrumentsBar;