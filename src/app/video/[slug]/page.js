import CustomHeader from '@/_lib/CustomHeader';
import videoData from '@/data/videos.json';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return videoData.map((video) => ({
    slug: video.slug,
  }));
}

export default function VideoPage({ params }) {
  const video = videoData.find((v) => v.slug === params.slug);

  if (!video) return notFound();

  return (
    <>
    <CustomHeader></CustomHeader>
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-black text-white">
      <head>
        <title>{video.title}</title>
      </head>
      <h1 className="text-2xl font-bold mb-4 text-left">{video.title}</h1>
      <iframe
        src={video.src}
        allow="autoplay; fullscreen"
        allowFullScreen
        className="w-full max-w-2xl h-[300px] md:h-[500px]"
      >
      </iframe>
      <p className="mt-4 max-w-xl text-justify text-sm text-gray-300">{video.description}</p>
      </main>
      </>
  );
}
