export default function Home() {
  return `
    <section class="intro">
  <div class="container">
    <h1>WOG - THE WORLD OF GRANDPA</h1>
    <p>
      Una comunidad creada para conectar a nuestros abuelitos con
      voluntarios dispuestos a brindar compañía, apoyo y amor.
    </p>
    <p>
      Nuestro propósito es promover la inclusión, el bienestar emocional y la
      dignidad de nuestros adultos mayores, mediante redes solidarias de apoyo
      humano.
    </p>
  </div>
</section>

<section class="abuelitos">
  <div class="container">
    <h2>¿Eres un abuelito y necesitas apoyo?</h2>
    <p>
      En WOG entendemos que la soledad puede ser difícil. Te ofrecemos la
      oportunidad de compartir momentos, recibir ayuda para tus diligencias,
      ir a tus citas médicas o simplemente conversar con alguien que se preocupe por ti.
    </p>
    <ul>
      <li>Acompañamiento a diligencias</li>
      <li>Visitas de compañía</li>
      <li>Apoyo emocional</li>
      <li>Acceso a eventos comunitarios</li>
    </ul>
    <button><a href="/register" data-link class="boton-enlace">Quiero ser ayudado!</a></button>
  </div>
</section>

<section class="voluntarios">
  <div class="container">
    <h2>¿Te gustaría ser voluntario?</h2>
    <p>
      Puedes marcar la diferencia en la vida de alguien. Nuestro programa de
      voluntariado está diseñado para que aportes tu tiempo de forma flexible y segura.
    </p>
    <ul>
      <li>Elige cuándo y cómo ayudar</li>
      <li>Conéctate con abuelitos cercanos</li>
      <li>Recibe formación en acompañamiento</li>
      <li>Forma parte de una comunidad solidaria</li>
    </ul>
    <button>Quiero ayudar</button>
  </div>
</section>

<section class="testimonios">
  <div class="container">
    <h2>Historias que inspiran</h2>
    <article class="testimonial">
      <blockquote>
        “Desde que me uní a WOG, ya no me siento sola. Cada visita de mi
        voluntario es una alegría inmensa.”
      </blockquote>
      <p>- Doña Carmenza, 78 años</p>
    </article>
    <article class="testimonial">
      <blockquote>
        “Acompañar a Don Efraín me ha enseñado más de la vida que cualquier
        libro.”
      </blockquote>
      <p>- Camilo, voluntario</p>
    </article>
  </div>
</section>
  `;
}
