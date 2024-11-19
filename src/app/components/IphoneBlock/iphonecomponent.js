import React from "react";

export default function IphoneComponent(props) {
  return (
    <div className="h-[85vh] w-full flex-col flex items-center justify-end overflow-hidden relative">
      <div id="img-wrapper" className=" h-full w-full top-0 left-0 relative ">
        <figure
          style={{
            backgroundImage: `url(${props.img})`,

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
          <div className={props.theme === "dark" ? "theme-dark" : ""}>
            <button
              className={`button button-elevated ${
                props.button1 === "tertiary" && "button-tertiary"
              }`}
            >
              Learn more
            </button>
          </div>
          <div className={props.theme === "dark" ? "theme-dark" : ""}>
            <button
              className={`button button-elevated ${
                props.button2 === "tertiary-neutral" &&
                "button-tertiary-neutral"
              } ${props.button2 === "tertiary" && "button-tertiary"}`}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
