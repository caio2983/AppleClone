import React from "react";

export default function SquareComponent(props) {
  return (
    <div id="square-component" className=" w-1/2 h-full  relative">
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
          <div className={props.theme === "dark" ? "theme-dark" : ""}>
            <button
              className={`button button-elevated ${
                props.button1 === "tertiary" && "button-tertiary"
              } ${props.button1 === "neutral" && "button-neutral"}`}
            >
              Learn more
            </button>
          </div>
          <div className={props.theme === "dark" ? "theme-dark" : ""}>
            <button
              className={`button button-elevated ${
                props.button2 === "tertiary" && "button-tertiary"
              }
                ${props.button2 === "tertiary-neutral" && "button-neutral"}
                   ${
                     props.button2 === "tertiary-neutral" &&
                     "button-tertiary-neutral"
                   }
                      ${
                        props.button2 === "tertiary-light" &&
                        "button-tertiary-light"
                      }`}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
