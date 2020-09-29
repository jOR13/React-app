import React from "react";
import Producto from "./Producto";
import "./carrito.css";
const total = 0;
const Carrito = ({ carrito, agregarProducto }) => (
    
  <div className="carrito">
    <h2>Tu carrito $</h2>
    
    {carrito.length === 0 ? (
      <p>Tu carrito esta vacio </p>
    ) : (
        
      carrito.map((p) => <Producto key={p.id} producto={p} carrito={carrito} agregarProducto={agregarProducto}/>)
    )}
  </div>
);

export default Carrito;
