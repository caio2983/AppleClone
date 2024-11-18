import React from "react";

export default function EntretenimentoHoverComponent() {
  return (
    <div className="w-full h-full flex ml-[256px] flyout-content">
      <div className="flex flex-col pr-[88px]">
        <h2 className="submenu-header">Explorar iPad</h2>
        <ul className="nav-list">
          <li className="nav-list-item">
            <a className="nav-submenu-link">
              Explorar todos os modelos de iPad
            </a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">iPad Pro</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">iPad Air</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">iPad</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">iPad Mini</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">Apple pencil</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">Teclado</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col pr-[44px]">
        <h2 className="submenu-header">Comprar iPad</h2>
        <ul className="nav-list">
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Comprar iPad</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Acessórios para o iPad</a>
          </li>

          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Financiamento</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col pr-[44px]">
        <h2 className="submenu-header">Mais para o iPad</h2>
        <ul className="nav-list">
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Suportes para o </a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Educação</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Educação</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Educação</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Educação</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Educação</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Educação</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
