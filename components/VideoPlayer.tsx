"use client";

import { initialVideoState } from "@/constants";
import {
  getVideoProcessingStatus,
  incrementVideoViews,
} from "@/lib/actions/video";
import { cn, createIframeLink } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const VideoPlayer = ({ videoId, className }: VideoPlayerProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [state, setState] = useState(initialVideoState);

  useEffect(() => {
    const checkProcessingStatus = async () => {
      const status = await getVideoProcessingStatus(videoId);
      setState((prev) => ({
        ...prev,
        isProcessing: !status.isProcessed,
      }));
      return status.isProcessed;
    };
    checkProcessingStatus();

    const intervalId = setInterval(async () => {
      const isProcessed = await checkProcessingStatus();
      if (isProcessed) {
        clearInterval(intervalId);
      }
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [videoId]);

  useEffect(() => {
    if (state.isLoaded && !state.hasIncrementedView && !state.isProcessing) {
      const incrementView = async () => {
        try {
          await incrementVideoViews(videoId);
          setState((prev) => ({ ...prev, hasIncrementedView: true }));
        } catch (error) {
          console.error("Failed to increment view count", error);
        }
      };
      incrementView();
    }
  }, [videoId, state.isLoaded, state.hasIncrementedView, state.isProcessing]);

  return (
    <div className={cn("video-player", className)}>
      {state.isProcessing ? (
        <div>
          <p>Processing video...</p>
        </div>
      ) : (
        <iframe
          ref={iframeRef}
          src={createIframeLink(videoId)}
          loading="lazy"
          title="Video Player"
          style={{ border: 0, zIndex: 50 }}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          onLoad={() => setState((prev) => ({ ...prev, isLoaded: true }))}
        />
      )}
    </div>
  );
};


export default VideoPlayer