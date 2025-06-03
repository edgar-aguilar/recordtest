"use client";

import { useEffect, useRef, useState } from 'react';



export default function CustomHeader() {


  return (
    <>

      <header className="fixed top-0 left-0 w-full h-14 bg-black text-white flex flex-col items-center px-4 z-50 shadow-md pt-2">

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

    </header>

    </>
  );
}
