"use client"
import React from 'react';
import PurpleRingLoader from "@/components/PurpleRingLoader";
import PowerToggle from "@/components/PowerToggle";
import {Heart, Playlist, SkipBack, SkipForward} from "phosphor-react";
import PlayPauseBtn from "@/components/PlayPauseBtn";

export default function ReignStreamerPro() {
    const [power, setPower] = React.useState(false);
    const [playing, setPlaying] = React.useState(false);
    return (
        <div
            className={`border-t-[#191919] w-full border-b-[#434343]  px-6 py-4 inset-shadow-sm inset-shadow-black flex justify-between items-center bg-gradient-to-r from-[#0f0f17] to-[#100b0b]`}>
            {/*<div><PurpleRingLoader power={power}/></div>*/}
            {/*<div className={`p-3 flex border opacity-70 border-r-green-900 justify-center border-b-green-900 bg-gradient-to-tr border-t-0 from-green-700/11  inset-shadow-black inset-5 shadow-lg to-green-600/20 rounded w-44 text-center`}>*/}
            {/*    <div className={`text-white text-center`}>REIGN PRO</div>*/}
            {/*</div>*/}
            <div className="lcd-screen">
                <div className="lcd-content no-line-break w-full ml-10 silkscreen-regular">
                    August 11, 2023
                </div>
            </div>
            <div className={`flex justify-center items-center gap-4`}>
                {/*<div className={`opacity-40`}><Heart size={27}/></div>*/}
                <div className={`opacity-[0.05]`}><SkipBack size={45}/></div>
                <PlayPauseBtn playing={playing} setPlaying={setPlaying} power={power}/>
                <div className={`opacity-[0.05]`}><SkipForward size={45}/></div>
                {/*<div className={`opacity-40`}><Playlist size={27}/></div>*/}
            </div>

            {/*<div>{playing.toString()}</div>*/}
            <div></div>
            <div></div>
            <div><PowerToggle setPower={setPower} setPlaying={setPlaying}/></div>
        </div>
    )
}
