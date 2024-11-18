import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import React from "react";
import { useRef, useState } from "react";
import LojaHoverComponent from "./HoverComponents/Loja";
import MacHoverComponent from "./HoverComponents/Mac";
import IpadHoverComponent from "./HoverComponents/Ipad";
import IphoneHoverComponent from "./HoverComponents/Iphone";
import WatchHoverComponent from "./HoverComponents/Watch";
import AirPodsHoverComponent from "./HoverComponents/Airpods";
import TVeCasaHoverComponent from "./HoverComponents/TveCasa";
import EntretenimentoHoverComponent from "./HoverComponents/Entretenimento";
import AcessoriosHoverComponent from "./HoverComponents/Acessorios";
import SuporteHoverComponent from "./HoverComponents/Suporte";
import HoverComponent from "./Hover";
import ClickComponent from "./Click";

export default function Header() {
  const [hoverState, setHoverState] = useState(false);
  const [clickState, setClickState] = useState(false);

  const handleHover = (isHovered) => {
    setHoverState(isHovered);
    console.log("hover teste");
  };

  const handleClick = (isActive) => {
    setClickState(isActive);
    console.log("Click Teste");
  };
  return (
    <nav id="globalnav" className="top-0 ">
      <div id="nav-content" className="px-[22px] mx-[256px] h-[44px]">
        <ul
          id="globalnav-ul"
          className="flex flex-row text-black  justify-between h-full items-center gap-2 "
        >
          <li>
            <FaApple className="text-[rgba(0,0,0,0.8)] text-[20px] align-middle leading-[50px]" />
          </li>
          <li>
            <HoverComponent label="Loja" onHover={handleHover}>
              <LojaHoverComponent></LojaHoverComponent>
            </HoverComponent>
          </li>
          <li>
            <HoverComponent label="Mac" onHover={handleHover}>
              <MacHoverComponent></MacHoverComponent>
            </HoverComponent>
          </li>
          <li>
            <HoverComponent label="iPad" onHover={handleHover}>
              <IpadHoverComponent></IpadHoverComponent>
            </HoverComponent>
          </li>
          <li>
            <HoverComponent label="iPhone" onHover={handleHover}>
              <IphoneHoverComponent></IphoneHoverComponent>
            </HoverComponent>
          </li>
          <li>
            <HoverComponent label="Watch" onHover={handleHover}>
              <WatchHoverComponent></WatchHoverComponent>
            </HoverComponent>
          </li>
          <li>
            <HoverComponent label="AirPods" onHover={handleHover}>
              <AirPodsHoverComponent></AirPodsHoverComponent>
            </HoverComponent>
          </li>
          <li>
            <HoverComponent label="TV e Casa" onHover={handleHover}>
              <TVeCasaHoverComponent></TVeCasaHoverComponent>
            </HoverComponent>
          </li>
          <li>
            <HoverComponent label="Entretenimento" onHover={handleHover}>
              <EntretenimentoHoverComponent></EntretenimentoHoverComponent>
            </HoverComponent>
          </li>
          <li>
            <HoverComponent label="Acessórios" onHover={handleHover}>
              <AcessoriosHoverComponent></AcessoriosHoverComponent>
            </HoverComponent>
          </li>
          <li>
            <HoverComponent label="Suporte" onHover={handleHover}>
              <SuporteHoverComponent></SuporteHoverComponent>
            </HoverComponent>
          </li>
          <li>
            <ClickComponent onClick={handleClick}>
              <IoIosSearch className="text-[rgba(0,0,0,0.8)] text-[20px] ]"></IoIosSearch>
            </ClickComponent>
          </li>
          <li>
            <ClickComponent onClick={handleClick}>
              <IoBagOutline className="text-[rgba(0,0,0,0.8)] text-[20px]"></IoBagOutline>
            </ClickComponent>
          </li>
        </ul>
      </div>
      <div
        className={
          hoverState || clickState
            ? "globalnav-curtain"
            : "globalnav-curtain-hidden"
        }
      ></div>
    </nav>
  );
}
