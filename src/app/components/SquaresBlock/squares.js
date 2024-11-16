import React from "react";
import SquareComponent from "./squarecomponent";

export default function SquaresBlock() {
  const squares = [
    [
      {
        imgs: ["/promo/ipadAir/ipadAir_bg.jpg"],
        textPosition: "top",
        title: "",
        text: "Two sizes. Faster chip. Does it all.",
        textColor: "dark",
      },
      {
        imgs: ["/promo/airPods/airPods_bg.jpg"],
        textPosition: "bottom",
        title: "",
        text: "Hearing Test, Hearing Aid, and Hearing Protection features in a free software update",
        textColor: "",
      },
    ],
    [
      {
        imgs: ["/promo/watch/watch_bg.jpg"],
        textPosition: "top",
        title: "",
        text: "Thinstant classic.",
        textColor: "dark",
      },
      {
        imgs: ["/promo/macBook/macBook_bg.jpg"],
        textPosition: "top",
        title: "",
        text: "A work of smart.",
        textColor: "",
      },
    ],
    [
      {
        imgs: ["/promo/tradeIn/tradeIn_bg.jpg"],
        textPosition: "top",
        title: "",
        text: "Get $180–$650 in credit when you trade in iPhone 12 or higher.",
        textColor: "dark",
      },
      {
        imgs: ["/promo/appleCard/appleCard_bg.jpg"],
        textPosition: "top",
        title: "",
        text: "Get up to 3% Daily Cash back with every purchase.",
        textColor: "dark",
      },
    ],
  ];

  return (
    <div className="relative">
      {squares.map((squarePair, index0) => (
        <div className="squares-section" key={index0}>
          {squarePair.map((square, index) => (
            <SquareComponent {...square} key={index} />
          ))}
        </div>
      ))}
    </div>
  );
}
