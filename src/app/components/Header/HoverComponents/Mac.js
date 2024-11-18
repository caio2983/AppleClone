import React from "react";

export default function MacHoverComponent() {
  return (
    <div className="w-full h-full flex ml-[256px] flyout-content">
      <div className="flex flex-col pr-[88px]">
        <h2 className="submenu-header">Explorar Mac</h2>
        <ul className="nav-list">
          <li className="nav-list-item">
            <a className="nav-submenu-link">Explorar todos os modelos de Mac</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">MacBook Air</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">MacBook Pro</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">iMac</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">Mac mini</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">Mac Studio</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">Mac Pro</a>
          </li>
          <li className="nav-list-item">
            <a className="nav-submenu-link">Monitores</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col pr-[44px]">
        <h2 className="submenu-header">Comprar Mac</h2>
        <ul className="nav-list">
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Comprar Mac</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Acessórios para Mac</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Financiamento</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col pr-[44px]">
        <h2 className="submenu-header">Mais para o Mac</h2>
        <ul className="nav-list">
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Suporte para o Mac</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Produtos AppleCare</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">macOS Sequoia</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Apple intelligence</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Apps da Apple</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Continuidade</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">iCloud+</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Mac nos Negócios</a>
          </li>
          <li className="nav-list-item-smaller">
            <a className="nav-submenu-link">Educação</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
