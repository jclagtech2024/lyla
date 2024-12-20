import React from "react";
import './video-tag.scss';

interface VideoPlayerProps {
    height?: string | number; // CSS value (e.g., '100px' or numeric for pixels)
    width?: string | number;  // CSS value
    preload?: "auto";
    autoplay?: boolean;
    loop?: boolean;
    muted?: boolean;
    poster?: string;          // URL of poster image
    videoSrc: string;         // URL of video source
    videoType: string;        // MIME type of the video (e.g., 'video/mp4')
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
    height = "auto",
    width = "auto",
    preload = "metadata",
    autoplay = false,
    loop = false,
    muted = false,
    poster,
    videoSrc,
    videoType,
}) => {
    return (

        <video
            style={{ height, width }}
            preload={preload}
            autoPlay={autoplay}
            loop={loop}
            muted={muted}
            poster={poster}
            controls
        >
            <source src={videoSrc} type={videoType} />
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoPlayer;
