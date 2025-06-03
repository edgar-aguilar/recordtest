"use client";

import { useEffect, useRef, useState } from 'react';
import CustomHeader from '@/_lib/CustomHeader';

import videoData from '../../data/videos.json';

// import VideoCard from '../components/VideoCard';
import VideoCard from '@/components/VideoCard';

// const mockData = [
//   {
//     id: 1,
//     title: '🏆 ¡Maradona estaría orgulloso! El Nápoles conquista su cuarto Scudetto',
//     src: '/videos/video_1.mp4',
//     poster: "https://s3.sportstatics.com/relevo/www/multimedia/202505/23/media/cortadas/image[6]-kt5C--606x1080@Relevo.jpg"
//   },
//   {
//     id: 2,
//     title: 'Rafa Mir se cuela en la fiesta de Antony para firmar las tablas',
//     src: '/videos/video_2.mp4',
//     poster: "https://s3.sportstatics.com/relevo/www/multimedia/202505/23/media/cortadas/imageML4K0DU9-U10477401792U0B-U20072561450JBJ-606x1080@Relevo-Relevo.jpg"
//   },
//   {
//     id: 3,
//     title: "El beticismo se despide del Villamarín y de 'Antonio de Triana' soñando despierto con la Conference",
//     src: '/videos/video_3.mp4',
//     poster: "https://s2.sportstatics.com/relevo/www/multimedia/202505/23/media/cortadas/antonio-de-triana-U05553581853Dxg-606x1080@Relevo.png"
//   }
// ];


export default function Home() {
  const [soundEnabled, setSoundEnabled] = useState(false);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  return (
    <>

      <CustomHeader></CustomHeader>

{/* <header className="fixed top-0 left-0 w-full h-14 bg-black text-white flex flex-col items-center px-4 z-50 shadow-md pt-2">

<img src="../logos/record-w.svg" alt="Récord" className="h-6 w-full" />
<nav className="flex-1 overflow-x-auto whitespace-nowrap no-scrollbar w-full">
<div className="flex space-x-6 text-sm font-medium">
  <a href="#" className="hover:underline inline-block">Futbol</a>
  <a href="#" className="hover:underline inline-block">Estadísticas</a>
  <a href="#" className="hover:underline inline-block">Selección Mexicana</a>
  <a href="#" className="hover:underline inline-block">Empresas</a>
  <a href="#" className="hover:underline inline-block">Internacional</a>
  <a href="#" className="hover:underline inline-block">Ligas</a>
  <a href="#" className="hover:underline inline-block">Champions</a>
  <a href="#" className="hover:underline inline-block">América</a>
  <a href="#" className="hover:underline inline-block">Chivas</a>
  <a href="#" className="hover:underline inline-block">Cruz Azul</a>
</div>
</nav>

</header> */}


      <div className="fixed top-16 right-5 z-50">
        <button
          onClick={toggleSound}
          className="bg-black/70 text-white text-sm px-4 py-2 rounded shadow-lg"
        >
          {soundEnabled ? '🔊 Sonido activado' : '🔇 Sonido desactivado'}
        </button>
      </div>

      <div className="w-full h-[100dvh] overflow-y-scroll snap-y snap-mandatory">

        {videoData.map((video, index) => (
          <VideoCard
            key={video.id}
            title={video.title}
            src={video.src}
            poster={video.poster}
            soundEnabled={soundEnabled}
            url={ video.slug }
          />
        ))}
      </div>
      {/* <div className="min-h-10 snap-start" /> */}

    </>
  );
}
