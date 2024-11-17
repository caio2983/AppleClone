import React from "react";
import IphoneComponent from "./iphonecomponent";

export default function IphoneBlock() {
  return (
    <div id="iphone-blocks" className="flex flex-col gap-[16px] w-full">
      <IphoneComponent
        img="iphone_pro16.jpg"
        title="iPhone 16 Pro"
        button_color="blue"
      ></IphoneComponent>
      <IphoneComponent
        img="iphone_pro.jpg"
        title="iPhone 16"
        button_collor="white"
      ></IphoneComponent>
    </div>
  );
}
