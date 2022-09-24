import { Typography, useTheme } from "@mui/material";
import styles from "./VideoLoader.module.scss";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

const VideoLoaderUnloaded = () => {
  const theme = useTheme();
  return (
    <div
      className={styles.drag_and_drop_area}
      style={{ borderColor: theme.palette.primary.main }}
    >
      <div className={styles.drag_and_drop_icon}>
        <FileUploadOutlinedIcon color="primary" fontSize="large" />
      </div>
      <Typography variant="body1" component="h1">
        Перетащите ваш файл или кликните здесь для загрузки
      </Typography>
    </div>
  );
};

export default VideoLoaderUnloaded;
