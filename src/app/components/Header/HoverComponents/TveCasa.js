import React from "react";

export default function TVeCasaHoverComponent() {
  return (
    <div className="w-full h-full flex ml-[256px] flyout-content">
      <div className="flex flex-col pr-[88px]">
        <h2 className="submenu-header">Explorar TV e Casa</h2>
        <ul className="nav-list">
          <li className="nav-list-item">
            <a className="nav-submenu-link">Explorar TV e Casa</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">Apple TV 4K</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col pr-[44px]">
        <h2 className="submenu-header">Comprar TV e Casa</h2>
        <ul className="nav-list">
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Comprar Apple TV 4K</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Comprar Siri Remote</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Acessórios para TV e Casa</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col pr-[44px]">
        <h2 className="submenu-header">Mais para TV e Casa</h2>
        <ul className="nav-list">
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Suporte para Apple TV</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Produtos AppleCare</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">App Apple TV</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Apple TV+</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">App Casa</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Apple Music</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Siri</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">AirPlay</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
