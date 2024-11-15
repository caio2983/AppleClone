import React from "react";
import SquareComponent from "./squarecomponent";

export default function SquaresBlock() {
  const squares = [
    [
      {
        imgs: ["/promo/ipadAir/ipadAir_bg.jpg"],
        textPosition: "",
        title: "",
        text: "",
        textColor: "",
      },
      {
        imgs: [],
        textPosition: "",
        title: "",
        text: "",
        textColor: "",
      },
    ],
    [
      {
        imgs: [],
        textPosition: "",
        title: "",
        text: "",
        textColor: "",
      },
      {
        imgs: [],
        textPosition: "",
        title: "",
        text: "",
        textColor: "",
      },
    ],
  ];

  return (
    <>
      {squares.map((squarePair, index0) => (
        <div className="squares-section" key={index0}>
          {squarePair.map((square, index) => (
            <SquareComponent {...square} key={index} />
          ))}
        </div>
      ))}
    </>
  );
}
