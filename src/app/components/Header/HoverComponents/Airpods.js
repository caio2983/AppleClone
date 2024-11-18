import React from "react";

export default function AirpodsHoverComponent() {
  return (
    <div className="w-full h-full flex ml-[256px] flyout-content">
      <div className="flex flex-col pr-[88px]">
        <h2 className="submenu-header">Explorar AirPods</h2>
        <ul className="nav-list">
          <li className="nav-list-item">
            <a className="nav-submenu-link">
              Explorar todos os modelos de AirPods
            </a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">AirPods 4</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">AirPods Pro 2</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">AirPods Max</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col pr-[44px]">
        <h2 className="submenu-header">Comprar AirPods</h2>
        <ul className="nav-list">
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Comprar AirPods</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Acessórios para AirPods</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col pr-[44px]">
        <h2 className="submenu-header">Mais para os AirPods</h2>
        <ul className="nav-list">
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Suporte para AirPods</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Apple Music</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
