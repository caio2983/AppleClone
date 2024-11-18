import React from "react";

export default function EntretenimentoHoverComponent() {
  return (
    <div className="w-full h-full flex ml-[256px] flyout-content">
      <div className="flex flex-col pr-[88px]">
        <h2 className="submenu-header">Explorar Entretenimento</h2>
        <ul className="nav-list">
          <li className="nav-list-item">
            <a className="nav-submenu-link">Explorar Entretenimento</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">Apple One</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">Apple TV+</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">Apple Music</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">Apple One Arcade</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col pr-[44px]">
        <h2 className="submenu-header">Suporte</h2>
        <ul className="nav-list">
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Suporte para Apple TV+</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Suporte para Apple Music</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
