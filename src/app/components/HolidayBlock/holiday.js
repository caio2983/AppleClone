import React from "react";

export default function HolidayBlock() {
  return (
    <div
      id="hero"
      className="h-[80vh] w-auto flex-col pt-[55px] flex items-center justify-end overflow-hidden relative z-10"
    >
      <div id="img-wrapper" className=" w-full  top-0 left-0 absolute">
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
        className="flex flex-col items-center text-black justify-self-end z-10 absolute bottom-[80px] gap-[32px] "
      >
        <div className="flex flex-col items-center gap-[8px] mt-[20px]">
          <h2 className="headline">Gift magic.</h2>
          <p>Make their holiday wish come true.</p>
          <div className="mt-[20px]">
            <button className="button button-elevated">Shop Gifts</button>
          </div>
        </div>
      </div>
    </div>
  );
}
