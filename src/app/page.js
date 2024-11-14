import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="flex flex-col w-[100vw] max-w-[100vw]">
      <Header></Header>
      <div className="h-[85vh] w-auto flex-col bg-red-400 py-[55px] flex items-center justify-end overflow-hidden relative">
        <div
          id="img-wrapper"
          className=" w-full  h-full top-0 left-0 absolute bg-slate-700"
        >
          <video
            src="apple_vid_holiday.mp4"
            className="scale-[1.55] absolute top-[100px]"
            autoPlay
            loop
            muted
          ></video>
          {/* 
          <img
            src="apple_holiday.jpg"
            className="  scale-[1.55] absolute top-[100px]   "
          ></img> */}
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
    </div>
  );
}
