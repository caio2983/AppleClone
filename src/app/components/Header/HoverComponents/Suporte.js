import React from "react";

export default function SuporteHoverComponent() {
  return (
    <div className="w-full h-full flex ml-[256px] flyout-content">
      <div className="flex flex-col pr-[88px]">
        <h2 className="submenu-header">Explorar suporte</h2>
        <ul className="nav-list">
          <li className="nav-list-item">
            <a className="nav-submenu-link">Comprar os Lançamentos</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">Iphone</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">Mac</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">Ipad</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">Apple Watch</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">AirPods</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col pr-[44px]">
        <h2 className="submenu-header">Ajuda</h2>
        <ul className="nav-list">
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Comunidade</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Verificar cobertura</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Reparos</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Fale com a gente</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col pr-[44px]">
        <h2 className="submenu-header">Tópicos úteis</h2>
        <ul className="nav-list">
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Comprar produtos AppleCare</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Conta Apple e senha</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Cobrança e assinaturas</a>
          </li>

          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Acessibilidade</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
