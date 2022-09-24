import React, { useId, useState } from "react";
import { Grid, Button, useTheme, Container, Typography } from "@mui/material";
import styles from "./VideoLoader.module.scss";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { VideoLoaderState } from "./VideoLoaderProps";
import VideoLoaderUnloaded from "./VideoLoaderUnloaded";
import VideoLoaderLoaded from "./VideoLoaderLoaded";
const VideoLoader = () => {
  const theme = useTheme();
  const id = useId();
  const labelId = `video-loader-${id}`;

  const [fileName, setFileName] = useState("");
  const [loaderState, setLoaderState] = useState(VideoLoaderState.kUnloaded);
  const onFileLoaded = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    const file = event.target.files[0];
    setFileName(file.name);
    setLoaderState(VideoLoaderState.kLoaded);
  };

  return (
    <Container maxWidth="xs">
      <form className={styles.video_loader}>
        <label htmlFor={labelId}>
          {loaderState == VideoLoaderState.kUnloaded && (
            <>
              <VideoLoaderUnloaded />
              <Button>Обзор</Button>
            </>
          )}

          {loaderState == VideoLoaderState.kLoaded && (
            <>
              <VideoLoaderLoaded fileName={fileName} />
              <Typography>
                Пожалуйста, подождите происходит загрузка ...
              </Typography>
            </>
          )}
        </label>

        <input
          type="file"
          onChange={onFileLoaded}
          id={labelId}
          className={styles.input}
        />
      </form>
    </Container>
  );
};

export default VideoLoader;
