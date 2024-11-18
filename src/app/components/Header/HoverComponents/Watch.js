import React from "react";

export default function WatchHoverComponent() {
  return (
    <div className="w-full h-full flex ml-[256px] flyout-content">
      <div className="flex flex-col pr-[88px]">
        <h2 className="submenu-header">Comprar</h2>
        <ul className="nav-list">
          <li className="nav-list-item">
            <a className="nav-submenu-link">Comprar os Lançamentos</a>
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
          <li className="nav-list-item">
            <a className="nav-submenu-link">Acessórios</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col pr-[44px]">
        <h2 className="submenu-header">Links rápidos</h2>
        <ul className="nav-list">
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Comprar presentes de Natal</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Encontre uma loja</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Status do pedido</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Financiamento</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col pr-[44px]">
        <h2 className="submenu-header">Comprar nas lojas especiais</h2>
        <ul className="nav-list">
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Educação</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Negócios</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
