import React from "react";

const Producto = ({ producto, carrito, agregarProducto, productos, resultado }) => {
  const { nombre, precio, id } = producto;

  //agregar pro al carrito
  const seleccionarProducto = (id) => {
    const producto = productos.filter((p) => p.id === id);
    agregarProducto([...carrito, ...producto]);
  };

  //eliminar produto
  const eliminarProducto = id => {
    const productos = carrito.filter((p) => p.id !== id);
    
    //colocar productos en el state
    agregarProducto(productos)
  }


  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>${producto.precio}</p>

      {productos ? (
        <button type="button" onClick={() => seleccionarProducto(producto.id)}>
          Comprar
        </button>
      ) : (
        <button type="button" onClick={() => eliminarProducto(id)}>
          Eliminar
        </button>
      )}
    </div>
  );
};

export default Producto;
