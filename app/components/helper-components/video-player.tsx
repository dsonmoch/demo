"use client";
import Lottie from "lottie-react";

type VideoPlayerProp = {
    videoUrl: object
}

export default function VideoPlayer({ videoUrl }: VideoPlayerProp) {
    return (
        <Lottie width={200} height={200} animationData={videoUrl} loop autoplay />
    )
}