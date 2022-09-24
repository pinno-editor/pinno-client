import React, { FC } from "react";
import { Typography, useTheme } from "@mui/material";
import styles from "./VideoLoader.module.scss";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

interface VideoLoaderLoadedProps {
  fileName: string;
}

const VideoLoaderLoaded: FC<VideoLoaderLoadedProps> = ({ fileName }) => {
  const theme = useTheme();
  return (
    <div
      className={styles.drag_and_drop_area}
      style={{ borderColor: theme.palette.success.main }}
    >
      <div className={styles.drag_and_drop_icon}>
        <CheckCircleRoundedIcon color="success" fontSize="large" />
      </div>
      <Typography variant="body1" component="h1">
        Ваш файл загружен!
        <br />
        {fileName}
      </Typography>
    </div>
  );
};

export default VideoLoaderLoaded;
