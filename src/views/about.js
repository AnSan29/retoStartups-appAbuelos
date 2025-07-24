export default function About() {
  return `
  <section class="about-container">
      <div class="about-content">
        <h1>Desarrolladores</h1>
        <p class="subtitle">Grupo de desarrollo y atención al usuario.</p>
        <p>
          Somos un grupo de jóvenes apasionados por el cambio social.
          Este proyecto nace del corazón y del deseo de retribuir con tecnología el amor y la dignidad que nuestros adultos mayores merecen.
        </p>
        <p>
          Creemos en el poder de las ideas bien hechas, en los pequeños actos que transforman vidas, y en el código que conecta personas con propósitos.
        </p>
        <p>
          Si compartes nuestra visión o quieres aportar a este sueño —como voluntario, aliado, mentor o amigo— estás en el lugar correcto.
        </p>
        <p>
          Amamos lo que hacemos. Creamos soluciones con sentido.
          Construimos con empatía, propósito y comunidad.
          Contáctanos y caminemos juntos hacia un mundo donde nadie envejezca en soledad.
        </p>

        <h2>Contáctanos.</h2>
        <form class="contact-form">
          <div class="form-row">
            <input type="text" placeholder="Nombre" id="nombre" />
            <input type="text" placeholder="Apellido" id="apellido" />
          </div>
          <input type="email" placeholder="Correo Electrónico" id="correo" />
          <textarea placeholder="Escribe tu pregunta, solicitud, duda o sugerencia." id="mensaje"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>

      <div class="about-image">
        <img src="https://img.freepik.com/vector-gratis/grupo-jovenes-posando-foto_52683-19575.jpg?semt=ais_hybrid&w=740" alt="Equipo de desarrolladores" />
      </div>
    </section>
  `;
}
