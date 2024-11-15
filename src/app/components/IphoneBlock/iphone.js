import Image from "next/image";
import React from "react";
import IphoneComponent from "./iphonecomponent";

export default function IphoneBlock() {
  return (
    <div id="iphone-blocks" className="flex flex-col gap-[16px] w-full">
      <IphoneComponent img="iphone_pro16.jpg"></IphoneComponent>
      <IphoneComponent></IphoneComponent>
    </div>
  );
}
