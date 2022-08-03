import React from "react";
import Header from "./components/Header";
import Productos from "./components/Productos";
import NuevoProducto from "./components/NuevoProducto";
import EditarProducto from "./components/EditarProducto";
import { BrowserRouter as Tafur, Routes, Route } from "react-router-dom";
//redux
import { Provider } from "react-redux";
import configureStore from "./Store";

function App() {

  const store = configureStore();
  return (
    
    <Tafur>
      <Provider store={store}>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Productos />} />
            <Route
              exact
              path="/nuevo/producto/tafur"
              element={<NuevoProducto />}
            />
            <Route
              exact
              path="/editar/tafur/:id"
              element={<EditarProducto />}
            />
          </Routes>
        </div>
      </Provider>
    </Tafur>
  );
}
export default App;
