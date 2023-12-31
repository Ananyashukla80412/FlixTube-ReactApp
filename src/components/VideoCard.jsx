import React from 'react'

import { Link } from "react-router-dom"

import { Typography , Card , CardContent , CardMedia  } from '@mui/material'

import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl , demoVideoUrl , demoVideoTitle , demoChannelUrl , demoChannelTitle } from '../utils/constants';

const VideoCard = ({video: {id: {videoId} , snippet} }) => {
    // console.log(videoId );
    // console.log(snippet);
    return <>
            <Card sx = {{width : {xs : '100%' , sm : "358px" , md : '320px'  }, boxShadow  : 'none', borderRadius : 0 }} >
                <Link to = {videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <CardMedia 
                        image = {snippet?.thumbnails?.high?.url}
                        alt = {snippet?.title}
                        sx = {{ width : {
                            xs : '100%' , sm : "358px" , md : "320px"
                        } , height : 180 }}
                    />
                </Link>
                    <CardContent sx = {{backgroundColor : '#1e1e1e' , height : '106px'}} >
                        <Link to = {videoId ? `/video/${videoId}` : demoVideoUrl}>
                            <Typography variant = "subtitle1" fontWeight = "bold" color = "#FFF">
                                {snippet?.title || demoVideoTitle}
                            </Typography>
                        </Link>
                        <Link to = {snippet?.channelID ? `/video/${snippet?.channelID}` : demoChannelUrl}>
                            <Typography variant = "subtitle2" fontWeigth = "bold" color = "gray">
                                {snippet?.channelTitle || demoChannelTitle}
                                <CheckCircle sx = {{fontSize : 12 , color : 'gray' , ml : "5px"}}></CheckCircle>
                            </Typography>
                        </Link>
                    </CardContent>


            </Card>
        </>
}

export default VideoCard
