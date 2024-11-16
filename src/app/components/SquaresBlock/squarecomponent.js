import React from "react";
import { useEffect } from "react";

export default function SquareComponent(props) {
  useEffect(() => {
    console.log(props);
  });

  return (
    <div id="square-component" className="bg-slate-600 w-1/2 h-full  relative">
      <div id="img-wrapper" className=" h-full w-full top-0 left-0 absolute ">
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
        className="gap-[16px] absolute pt-[55px] h-1/3 w-full flex flex-col items-center"
        style={{
          top: props.textPosition === "top" ? "0" : "auto",
          bottom: props.textPosition === "top" ? "auto" : "0",
        }}
      >
        <h2
          style={{ color: props.textColor === "dark" ? "#1d1d1f" : "inherit" }}
        >
          {props.title}
        </h2>
        <p
          style={{ color: props.textColor === "dark" ? "#1d1d1f" : "inherit" }}
        >
          {props.text}
        </p>
        <div id="iphone-buttons" className="flex flex-row gap-[8px]">
          <button>Learn more</button>
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
}
