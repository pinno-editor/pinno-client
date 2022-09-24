import React, { FC } from "react";
import { Video } from "../../common/video";
import styles from "./VideoItem.module.scss"

interface VideoItemProps {
    video: Video;
}

const VideoItem: FC<VideoItemProps> = ({video}) => {
    return (
        <div className={styles.video_item}>
             <img src={video.tile} alt={video.title} />
        </div>)
}
export default VideoItem;