import React from "react";
import IphoneComponent from "./iphonecomponent";

export default function IphoneBlock() {
  return (
    <div id="iphone-blocks" className="flex flex-col gap-[16px] w-full">
      <IphoneComponent
        img="iphone_pro16.jpg"
        title="iPhone 16 Pro"
        theme="dark"
        button1="primary"
        button2="tertiary"
      ></IphoneComponent>
      <IphoneComponent
        img="iphone_pro.jpg"
        title="iPhone 16"
        theme="dark"
        button1="neutral"
        button2="tertiary-neutral"
      ></IphoneComponent>
    </div>
  );
}
