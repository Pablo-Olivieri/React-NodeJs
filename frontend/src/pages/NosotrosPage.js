import "../styles/Nosotros.css";

import React from "react";

const NosotrosPage = (props) => {
  return (
    <section className="holder">
      <div className="historia">
        <h2>Historia</h2>
        <p>
          {" "}
          Somos una consultora conformada por Analistas Universitarios de
          Sistemas (UTN). Desde hace más de 20 años nos dedicamos al Diseño Web
          Profesional, Marketing Digital y al Desarrollo de aplicaciones de
          Business Intelligence. Nos encontramos en la ciudad de Buenos Aires
          dispuestos a trabajar con clientes de todo el mundo. Nuestros
          profesionales cuentan con una marcada trayectoria y experiencia en
          distintas empresas en el área de Desarrollo de Sistemas y Programación
          Web. Brindamos a nuestros clientes una atención personalizada y un
          asesoramiento integral para que puedan llevar a cabo sus proyectos
          tecnológicos de la forma más adecuada y conveniente de acuerdo las
          necesidades de la empresa. Trabajamos con responsabilidad y eficiencia
          en el cumplimiento de los plazos estipulados.
        </p>
      </div>
      <div class="staff">
            <h2>Staff</h2>
            <div class="personas">
                <div class="persona">
                    <img src="images/nosotros/nosotros1.jpg" alt="Carlos Santana"/>
                    <h5>Carlos Principi</h5>
                    <h6>Gerente General</h6>
                    <p>Después de 28 años en el mundo IT, y tras liderar distintas áreas
              de negocios en diferentes compañias a lo largo de Sudamerica, pongo a disposición de nuestros clientes una amplia
              experiencia en el diseño y liderazgo de programas de
              transformación que crean valor y ventaja competitiva en esta nueva
              realidad donde tecnología e ingenio humano deben ir de la mano.
                    </p>


                </div>
                <div class="persona">
                    <img src="images/nosotros/nosotros2.jpg" alt="Julieta Pintos"/>
                    <h5>Julieta Pintos</h5>
                    <h6>Gerente Desarrollos</h6>
                    <p>Nuestro conocimiento y
                nuestras amplias capacidades de transformación - desde la
                consultoría estratégica, la analítica avanzada, la ingeniería de
                sowftare, la operación inteligente de procesos y sistemas o la
                creatividad y el marketing digital - nos permiten aportar
                soluciones a nuestros clientes y comprometernos con la
                entrega del producto.

                    </p>


                </div>
                <div class="persona">
                    <img src="images/nosotros/nosotros3.jpg" alt="Joaquin Prieto"/>
                    <h5>Joaquin Prieto</h5>
                    <h6>Full Stack Developer</h6>
                    <p> Como desarrollador full stack, especilizado en JavaScript, Java y algunas otras tecnologias, mi principal objetivo en esta etapa es acelerar la
                trasformación de negocio de nuestros clientes en esta nueva
                década de la promesa digital en los sectores de consumo, retail,
                farmacéutico, servicios, transporte, turismo o cualquier otro sector que requiera nuestros servicios.
               

                    </p>


                </div>
                <div class="persona">
                    <img src="images/nosotros/nosotros4.jpg" alt="Gimena Rodriguez"/>
                    <h5>Gimena Rodriguez</h5>
                    <h6>Software Developer</h6>
                    <p>Me siento muy inspirada por nuestro nuevo propósito; integrar la
                tecnología y el ingenio humano para acelerar la transformación
                de los negocios digitales de nuestros clientes aportando valor en
                todas sus dimensiones. Repensamos y
                apoyamos un nuevo mercado, donde todos coincidimos en que la tecnología informática tendra
                una larga vida.

                    </p>


                </div>
                <div class="persona">
                    <img src="images/nosotros/nosotros5.jpg" alt="Gustavo Rios"/>
                    <h5>Gustavo Rios</h5>
                    <h6>IT enginering</h6>
                    <p> Reacondicionamos y reinventamos productos y soluciones que
                aportan valor a empresas, instituciones y sociedad. Aportamos
                progreso y rentabilidad a nuestros clientes a través de la
                reinvención de la tecnología IT. Repensamos la tecnología y le
                damos capacidad para sobrevivir a través de un equipo de
                expertos guiados por la calidad como bandera. 

                    </p>


                </div>
               
            </div>
        </div>
    </section>
  );
};
export default NosotrosPage;
