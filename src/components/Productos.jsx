
 import React, { Fragment } from 'react'
 
 const Productos = () => {
   return (
      <Fragment>
        <h2 className='text-center my-5'>listado de productos</h2>
        <table className='table table-striped'>
          <thead className='bg-primary table-dark'>
            <tr>
              <th scope='col'>nombre</th>
              <th scope='col'>precio</th>
              <th scope='col'>Acciones</th>
            </tr>
          </thead>
          <tbody>


          </tbody>
        </table>
      </Fragment>
   )
 }
 
 export default Productos