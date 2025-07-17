export default function VoluntarioProfile() {
  return `
   <section class="voluntario-profile">
    <div class="voluntario-card">
      <div class="voluntario-avatar">
        <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740" alt="Foto de perfil del voluntario">
      </div>
      <div class="voluntario-info">
        <h2 class="voluntario-nombre"></h2>
        <p><strong>Usuario:</strong> <span class="voluntario-username"></span></p>
        <p><strong>Cédula:</strong> <span class="voluntario-cedula"></span></p>
        <p><strong>Teléfono:</strong> <span class="voluntario-telefono"></span></p>
        <p><strong>Rol:</strong> <span class="voluntario-rol"></span></p>
      </div>

      <!-- Botón al final de la tarjeta -->
      <div class="voluntario-boton">
        <button type="button"><a href="/dates" data-link>ayudar a un abuelito</a></button>
      </div>
    </div>
  </section>
  `;
}
