'use client'

import Image from "next/image";
import centerPokeball from "@/public/pokedex.png"
import { useEffect, useState } from "react";

export function LoadingPokeball(){
    const [showPokeball, setShowPokeball] = useState(false);

    useEffect(() => {
        document.body.classList.add("no-scroll");
        const timer = setTimeout(() => {
            setShowPokeball(true);
            document.body.classList.remove("no-scroll");
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return(
    <div className="w-full h-full flex flex-col absolute overflow-hidden z-40">
    <Image src={centerPokeball} alt="pokedex" sizes="100vw" className={`absolute overflow-hidden w-screen h-auto top-0 z-30 ${showPokeball ? "imgPokeball" : ""}`} />
    <div className={`bg-white flex-1 absolute z-20 overflow-hidden  w-screen h-[50vh] bottom-0 ${showPokeball ? "imgPokeballWhite" : ""}`}>
        
    </div>
</div>
    )
}