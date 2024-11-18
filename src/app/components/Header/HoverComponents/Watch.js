import React from "react";

export default function WatchHoverComponent() {
  return (
    <div className="w-full h-full flex ml-[256px] flyout-content">
      <div className="flex flex-col pr-[88px]">
        <h2 className="submenu-header">Explorar Apple Watch</h2>
        <ul className="nav-list">
          <li className="nav-list-item">
            <a className="nav-submenu-link">
              Explorar todos os modelos de Apple Watch
            </a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">Apple Watch Series 10</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">Apple Watch Ultra 2</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">Apple Watch SE</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">Apple Watch Nike</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col pr-[44px]">
        <h2 className="submenu-header">Comprar Apple Watch</h2>
        <ul className="nav-list">
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Comprar Apple Watch</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Pulseiras para o Apple Watch</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Acessórios para o Apple Watch</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Financiamento</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col pr-[44px]">
        <h2 className="submenu-header">Mais para o Apple Watch</h2>
        <ul className="nav-list">
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Suporte para o Apple Watch</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">watchOS 11</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Apps da Apple</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Apple Fitness+</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
