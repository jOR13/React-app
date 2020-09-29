import React, { Fragment, useState } from "react";

import Header from "./components/Header";
import Producto from "./components/Producto";
import Footer from "./components/Footer";
import Carrito from "./components/Carrito";



function App() {
  //Crear listado de productos
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: "Camisa", precio: 250 },
    { id: 2, nombre: "Pantalon", precio: 500 },
    { id: 3, nombre: "Tennis", precio: 1550 },
    { id: 4, nombre: "Cachucha", precio: 150 },
  ]);

  //state para carrito de compras
  const [ carrito, agregarProducto ] = useState([]);

  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header name="React JS" />

      <h1>Lista de productos</h1>
      {productos.map((p) => (
        <Producto 
          key={p.id}        
          producto={p}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))}

        <Carrito 
          carrito={carrito}
          agregarProducto={agregarProducto}
        />

      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
