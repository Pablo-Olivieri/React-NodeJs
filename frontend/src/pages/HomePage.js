import React from 'react';

import '../styles/HomePage.css'


const HomePage = (props) =>{
    return (
      <main className='holder'>
        <div className='homeimg'>
          <img src="images/home/programmer.jpeg" width= "900" alt="imagen"/>
        </div>
         
              <div className ='columnas'>
              <div className ='bienvenidos left'>
            <h2>Bienvenidos</h2>
            <p> Desde hace dos décadas en Developers SA nos dedicamos al diseño, desarrollo e implementación de soluciones innovadoras orientadas a la mejora de la experiencia de clientes, logrando que los múltiples canales físicos y virtuales dispuestos para la interacción actúen de manera coordinada, dinámica e innovadora.
            </p>
            </div>
            <div className = 'testimonios right'>
                <h2>Testimonios</h2>
                <div className='testimonio'>
                    <span className='cita'>Simplemente excelente</span>
                    <p></p>
                    <span className='autor'>Juan M. Velasco - Refrigerios.com</span>
                    </div>
                    </div>
                    </div>
                    </main>


    );
}
export default HomePage;
