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
        <div className={`border-t-[#191919] w-full border-b-[#434343]  p-3 inset-shadow-sm inset-shadow-black flex justify-around items-center bg-gradient-to-r from-[#1b1b22] to-[#271f1f]`}>
            <div><PurpleRingLoader power={power}/></div>
            <div></div>
            <div>{power}</div>

            <div className={`flex justify-center items-center gap-8`}>
                <div className={`opacity-40`}><Heart size={27}/></div>
                <div className={`opacity-40`}><SkipBack size={27}/></div>
                <PlayPauseBtn playing={playing} setPlaying={setPlaying} power={power}/>
                <div className={`opacity-40`}><SkipForward size={27}/></div>
                <div className={`opacity-40`}><Playlist size={27}/></div>
            </div>

            <div>{playing.toString()}</div>
            <div></div>
            <div></div>
            <div><PowerToggle setPower={setPower} setPlaying={setPlaying}/></div>
        </div>
    )
}
