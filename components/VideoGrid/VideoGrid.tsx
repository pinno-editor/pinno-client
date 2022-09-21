import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import VideoItem from "../VideoItem/VideoItem";
import { Video } from "../../common/video";

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


    return (
        <Container maxWidth="lg">
        <Grid container spacing={1} >
            {videos.map((video: Video, index) => (
                <Grid key={index} item sm={4} xs={4} md={4}>
                    <VideoItem video={video}></VideoItem>
                </Grid>
            ))}
        </Grid>
        </Container>
    )
}
export default VideoGrid;