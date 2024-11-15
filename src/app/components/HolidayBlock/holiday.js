import Image from "next/image";
import React from "react";

export default function HolidayBlock() {
  return (
    <div className="h-[85vh] w-auto flex-col bg-red-400 py-[55px] flex items-center justify-end overflow-hidden relative">
      <div
        id="img-wrapper"
        className=" w-full  h-full top-0 left-0 absolute bg-slate-700"
      >
        <video
          src="apple_vid_holiday.mp4"
          className="scale-[1.55] absolute top-[100px]"
          autoPlay
          loop={false}
          muted
          disablePictureInPicture
          role="video"
        ></video>
      </div>

      <div
        id="content-wrapper"
        className="flex flex-col items-center text-black justify-self-end z-10 relative bottom-[80px] gap-[8px] "
      >
        <h2 className="headline">Gift magic.</h2>
        <p>Make their holiday wish come true.</p>
        <button>Shop Gifts</button>
      </div>
    </div>
  );
}
