import React from "react";

export default function AcessoriosHoverComponent() {
  return (
    <div className="w-full h-full flex ml-[256px] flyout-content">
      <div className="flex flex-col pr-[88px]">
        <h2 className="submenu-header">Comprar acessórios</h2>
        <ul className="nav-list">
          <li className="nav-list-item">
            <a className="nav-submenu-link">Ver todos acessórios</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">Mac</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">Ipad</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">Iphone</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">Apple Watch</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col pr-[44px]">
        <h2 className="submenu-header">Explorar acessórios</h2>
        <ul className="nav-list">
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Criados pela Apple</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Beats bt Dr. Dre</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">AirTag</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
