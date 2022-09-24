import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import VideoItem from "../VideoItem/VideoItem";
import { Video } from "../../common/video";
<<<<<<< HEAD
import VideoLoader from "../VideoLoader/VideoLoader";
import styles from "./VideoGrid.module.scss";
=======
>>>>>>> 19cd75bae90ec5ef68c38a34f223afc7125b8bba

const fakeData = true;



const VideoGrid = () => {
    const [videos, setVideos] = useState<Array<Video>>([])

    useEffect(() => {
        if (fakeData) {
            setVideos([
                { title: "first", tile: "https://kartinkin.net/uploads/posts/2022-03/1646311456_37-kartinkin-net-p-kartinki-loshadok-44.jpg", content: "link" },
                { title: "first", tile: "https://s1.1zoom.ru/big3/421/USA_Rivers_Scenery_Grand_450593.jpg", content: "link" }
            ]);
        }
    }, [])

<<<<<<< HEAD
    if (videos.length == 0) { return <div className={styles.video_loader_wrapper}><VideoLoader></VideoLoader></div>; }
    return (
        <Container maxWidth="lg">
            <Grid container spacing={1} >
                {videos.map((video: Video, index) => (
                    <Grid key={index} item sm={4} xs={4} md={4}>
                        <VideoItem video={video}></VideoItem>
                    </Grid>
                ))}
            </Grid>
=======

    return (
        <Container maxWidth="lg">
        <Grid container spacing={1} >
            {videos.map((video: Video, index) => (
                <Grid key={index} item sm={4} xs={4} md={4}>
                    <VideoItem video={video}></VideoItem>
                </Grid>
            ))}
        </Grid>
>>>>>>> 19cd75bae90ec5ef68c38a34f223afc7125b8bba
        </Container>
    )
}
export default VideoGrid;