"use client";

import { Star, ThumbsDown, ThumbsUp } from "lucide-react";
import { useState } from "react";

export const StarContainer = ({ heading, description }: { heading: string, description: string }) => {

    const [starFill, setStarFill] = useState(0);
    const [clicked, setClicked] = useState(false);

    return (
        <div className="flex flex-col gap-1 ">
            <h3 className="font-bold text-xl">
                {heading}
            </h3>
            <p className="text-sm text-zinc-400">
                {description}
            </p>
            <span className="flex gap-2 cursor-pointer">
                {
                    [...Array(5)].map((ele, index) => (
                        <Star
                            fill={index < starFill ? "yellow" : "silver"}
                            color="none"
                            size={"30"}
                            key={index}
                            onMouseEnter={() => !clicked ? setStarFill(index + 1) : ""}
                            onMouseLeave={() => !clicked ? setStarFill(0) : ""}
                            onClick={() => {
                                setClicked(true);
                                setStarFill(index + 1);
                            }}
                        />
                    ))
                }
                {
                    clicked && <button
                        className="text-sm text-zinc-400"
                        onClick={() => { setClicked(false); setStarFill(0) }}
                    >
                        Reset
                    </button>
                }
            </span>
        </div>
    );
}


export const ThumbsContainer = () => {
    const [thumb, setThumb] = useState("");
    const [click, setClicked] = useState(false);
    return (
        <div className="flex flex-col gap-1">
            <h3 className="font-bold text-xl">
                Would You Recommend Me ?
            </h3>
            <p className="text-sm text-zinc-400">
                Would you recommend hiring me in your team?
            </p>
            <span className="flex gap-x-4 justify-start items-center cursor-pointer">
                <ThumbsDown color="none" size={"35"}
                    fill={thumb !== "" && thumb === "down" ? "rgb(244 63 94)" : "silver"}
                    onMouseEnter={() => !click ? setThumb("down") : ""}
                    onMouseLeave={() => !click ? setThumb("") : ""}
                    onClick={() => {setThumb("down");setClicked(true)}}
                />
                <ThumbsUp color="none" size={"35"}   
                    fill={thumb !== "" && thumb === "up" ? "rgb(16 185 129)" : "silver"}
                    onMouseEnter={() => !click ? setThumb("up") : ""}
                    onMouseLeave={() => !click ? setThumb("") : ""}
                    onClick={() => {setThumb("up");setClicked(true)}}
                />
            </span>
        </div>
    )
}

export const PraiseContainer = () => {
    const [click, setClicked] = useState("");
    return (
        <div className="flex flex-col gap-1">
            <h3 className="font-bold text-xl">
                Praise
            </h3>
            <p className="text-sm text-zinc-400">
                How do find my dev skills ?
            </p>
            <p className="flex gap-x-2 mt-2">
                <button 
                    className={`text-md px-5 py-1 rounded-xl hover:border-2 bg-rose-500/80 text-white border-rose-700 ${click !== "" && click === "bad" ? "border-2" : ""}`}
                    onClick={()=>setClicked("bad")}
                    >Bad</button>
                <button 
                    className={`text-md px-5 py-1 rounded-xl hover:border-2 bg-yellow-300/80 text-black border-yellow-500 ${click !== "" && click === "avg" ? "border-2" : ""}`}
                    onClick={()=>setClicked("avg")}
                    >Average</button>
                <button 
                    className={`text-md px-5 py-1 rounded-xl hover:border-2 bg-emerald-500/80 text-white border-emerald-700 ${click !== "" && click === "good" ? "border-2" : ""}`}
                    onClick={()=>setClicked("good")}
                    >Good</button>
            </p>
        </div>
    )
}

export const CommentContainer = () => {
    return (
        <div className="flex flex-col gap-1 w-full">
            <h3 className="font-bold text-xl">
                Comments
            </h3>
            <p className="text-sm text-zinc-400">
                Spill the beans! Any more thoughts or comments?
            </p>
            <textarea className="w-full h-10 border-2">

            </textarea>
        </div>
    )
}