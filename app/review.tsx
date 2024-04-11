"use client";
import { X } from "lucide-react";
import { CommentContainer, PraiseContainer, StarContainer, ThumbsContainer } from "./components";
import { useState } from "react";


const Review = () => {
  const [boxVisible, setBoxVisible] = useState(false);
  return (
    <div className="h-full rounded-2xl shadow-2xl py-6 px-8 flex flex-col justify-center items-start gap-4 mt-8 bg-white relative border-2 ">
      {
        !boxVisible ? 
          <button className="" onClick={()=>setBoxVisible(true)}>Open Review Box</button>
        :
        <>
          <X className="absolute top-5 right-4 text-zinc-400 cursor-pointer"
            onClick={()=>setBoxVisible(false)}
          />
          <StarContainer
            heading="Safety"
            description="Rate my ability to keep your project safe from bugs and errors!"
          />
          <StarContainer
            heading="Communication"
            description="What's your take on my engagement skills?"
          />

          <ThumbsContainer />
          <PraiseContainer />
          <CommentContainer />

          <button className="w-full bg-indigo-600 rounded-xl text-white p-2 hover:brightness-90"
            onClick={()=>setBoxVisible(false)}
          >
            Submit
          </button>
        </>
      }
    </div>
  )
}

export default Review;


