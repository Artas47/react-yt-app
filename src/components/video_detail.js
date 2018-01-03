import React from 'react';
import './App.css';

const VideoDetail = ({video}) => {

    if(!video){
        return <div> Loading ... </div>;
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    console.log(video);
    

    return(
        <div className='video-detail col-md-8'>
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe className='embed-responsive-item' src={url}> </iframe>
            </div>
            <div className='details'>
                <div> TITLE: {video.snippet.title} </div>
                <div> DESCRIPTION: {video.snippet.description}</div>
            </div>
        </div>

    )

};

export default VideoDetail;