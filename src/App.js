import React from "react";
import Header from "./components/Header";
import EditarProducto from "./components/EditarProducto";
import {
  BrowserRouter as Tafur,
  Routes,
  Route,
} from "react-router-dom";
import Productos from "./components/Productos";
import NuevoProducto from "./components/NuevoProducto";
function App() {
  return (
    <Tafur>
      <Header />  
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Productos/>} />
          <Route exact path="/nuevo/producto/tafur" element={<NuevoProducto/>} />
          <Route exact path="/editar/tafur/:id" element={<EditarProducto/>} />

          </Routes>
      </div>
    </Tafur>
  );
} 
export default App;
