"use client";

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function VideoCard({ title, src, poster, soundEnabled,url }) {
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !soundEnabled;

    const handleCanPlay = () => setLoaded(true);
    video.addEventListener('canplay', handleCanPlay);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      observer.unobserve(video);
    };
  }, [soundEnabled]);

  return (
    <div className="h-[100dvh] w-screen snap-start relative overflow-hidden">

    {/* <div className="h-screen w-screen snap-start relative overflow-hidden"> */}
      <video
        ref={videoRef}
        src={src}
        className={`h-screen w-full object-cover`}
        loop
        playsInline
        preload="auto"
        poster={poster}
      />

      <Link href={`/video/${url}`} className="absolute bottom-5 left-0 p-4 text-white text-lg font-semibold z-10">
        {title}
      </Link>


    </div>
  );
}
