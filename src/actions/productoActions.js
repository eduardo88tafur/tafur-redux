import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  
} from "../reducer/types";
import ClienteAxios from "../config/axios";
import Swal from "sweetalert2";



export function crearNuevoProductoAction(producto) {

  return async(dispatch) => {
    dispatch(agregarProducto());
    try {
         await ClienteAxios.post('/productos',producto);
      dispatch(agregarProductoExito(producto));
      Swal.fire(
        'bien hecho Tafur',
        'el producto se agrego correctamente',
        'success'
      )
    } catch (error) {
        console.log(error);
      dispatch(agregarProductoError(true));
      Swal. fire({
        icon:'error',
        tittle:'hubo error',
        text:'ups... algo salio mal'
      })
    }
  };
}
const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
});
const agregarProductoExito = producto => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto
});
const agregarProductoError = estado => ({
    type:AGREGAR_PRODUCTO_ERROR,
    payload:estado
});
