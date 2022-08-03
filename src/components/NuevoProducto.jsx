import React, { useState } from "react";
import { crearNuevoProductoAction } from "../actions/productoActions";
import { useDispatch, useSelector } from "react-redux";

const NuevoProducto = ({ histoy }) => {
  const [nombre, guardarNombre] = useState("");
  const [precio, guardarPrecio] = useState(0);
  const dispatch = useDispatch();
  const cargando = useSelector((state) => state.productos.loading);
  const error = useSelector((state) => state.productos.error);
  const agregarProducto = (producto) =>
    dispatch(crearNuevoProductoAction(producto));
  const submitNuevoProducto = (e) => {
    e.preventDefault();
    if (nombre.trim() === "" || precio <= 0) {
      return;
    }
    agregarProducto({
      nombre,
      precio,
    });
   // histoy.push('/');
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card-body">
          <h2 className="text-center mb-4 font-weight-bold">
            agregar nuevo producto
          </h2>
          <form onSubmit={submitNuevoProducto}>
            <div className="form-group">
              <label>nombre del producto</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre del producto"
                name="nombre"
                value={nombre}
                onChange={(e) => guardarNombre(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>precio del producto</label>
              <input
                type="number"
                className="form-control"
                placeholder="precio"
                name="precio"
                value={precio}
                onChange={(e) => guardarPrecio(Number(e.target.value))}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary font-weight-bold text-uppercase
            d-block w-100"
            >
              Agregar
            </button>
          </form>
          {cargando ? <p>cargando...</p> : null}
          {error ? (
            <p className="alert red text-center">algo salio mal</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
