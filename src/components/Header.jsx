import React from 'react'
import {Link}from'react-router-dom';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg primary justify-content-between'>Header
    <div className='container'>
        <h1> <Link to ={'/'}className="text-dark">
          CRUD-REACT,REDUX,API & Axios</Link>
        </h1>   
    </div>
    
     <Link to={ "/nuevo/producto/tafur"}
     className='btn btn-danger nuevo-post d-block d-md-inline-block'
     > Agregar producto &#43;</Link>
     
    </nav>
  )
}

export default Header