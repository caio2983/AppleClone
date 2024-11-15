import Image from "next/image";
import React from "react";
import { useEffect } from "react";

export default function IphoneComponent(props) {
  useEffect(() => {
    console.log(props);
  });
  return (
    <div className="h-[85vh] w-full flex-col bg-red-400 flex items-center justify-end overflow-hidden relative">
      <div
        id="img-wrapper-iphone"
        className=" h-full w-full top-0 left-0 relative "
      >
        <figure
          style={{
            backgroundImage: `url(${props.img})`,

            backgroundPosition: "center",
          }}
          className=" w-full h-full absolute bg-cover  "
          id="iphone"
          // src={props.img}
        ></figure>
      </div>
    </div>
  );
}
