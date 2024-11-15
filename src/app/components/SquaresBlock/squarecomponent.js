import React from "react";
import { useEffect } from "react";

export default function SquareComponent(props) {
  useEffect(() => {
    console.log(props);
  });

  return (
    <div id="square-component" className="bg-slate-600 w-1/2 h-full">
      <div id="img-wrapper" className=" h-full w-full top-0 left-0 relative ">
        <figure
          style={{
            backgroundImage: `url(${props.imgs})`,

            backgroundPosition: "center",
          }}
          className=" w-full h-full absolute bg-cover  "
          id="iphone"
        ></figure>
      </div>

      <div
        id="text"
        className="flex flex-col gap-[16px] absolute top-0 pt-[55px] items-center"
      >
        <h2>{props.title}</h2>
        <p>Hello, Apple Intelligence.</p>
        <div id="iphone-buttons" className="flex flex-row gap-[8px]">
          <button>Learn more</button>
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
}
