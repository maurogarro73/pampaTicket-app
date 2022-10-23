import React from 'react';
import CartWidget from './CartWidget';

export default function Navbar() {
  return (
    <>
      <header>
        <nav>
          <div>
            <ul>
              <li>
                <a href="_">Inicio</a>
              </li>
              <li>
                <a href="_">Productos</a>
              </li>
              <li>
                <a href="_">Nosotros</a>
              </li>
            </ul>
          </div>
          <CartWidget />
        </nav>
      </header>
    </>
  );
}
