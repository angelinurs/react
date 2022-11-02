import React from 'react';
import './css/Apple.css';

function Header() {
  return (
    <div id="header" className="Header">
        <ul id="nav">
            <li id="ac-gn-item ac-gn-apple">
            <a id="apple" href="http://localhost:3000">Apple</a>
            </li>
            <li id="ac-gn-item-menu ac-gn-store">
            <a id="store" href="http://localhost:3000">스토어</a>
            </li>
            <li id="ac-gn-item-menu ac-gn-mac">
            <a id="mac" href="http://localhost:3000">Mac</a>
            </li>
            <li id="ac-gn-item-menu ac-gn-ipad">
            <a id="ipad" href="http://localhost:3000">iPad</a>
            </li>
            <li id="ac-gn-item-menu ac-gn-download">
            <a id="download" href="http://localhost:3000">액세서리</a>
            </li>
            <li id="ac-gn-item-menu ac-gn-support">
            <a id="support" href="http://localhost:3000">고객지원</a>
            </li>
        </ul>
    </div>
  );
}

export default Header;
