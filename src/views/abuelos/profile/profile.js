export default function AbueloProfile() {
  return `
   <section class="abuelo-profile">
  <div class="abuelo-card">
    <div class="abuelo-avatar">
      <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740" alt="Foto de perfil del abuelo">
    </div>
    <div class="abuelo-info">
      <h2 class="abuelo-nombre"></h2>
      <p><strong>Usuario:</strong> <span class="abuelo-username"></span></p>
      <p><strong>Cédula:</strong> <span class="abuelo-cedula"></span></p>
      <p><strong>Teléfono:</strong> <span class="abuelo-telefono"></span></p>
      <p><strong>Rol:</strong> <span class="abuelo-rol"></span></p>
    </div>

    <!-- Botón al final de la tarjeta -->
    <div class="abuelo-boton">
      <button type="button" ><a href="/createDate" data-link class="boton-enlace">Crear una cita</a></button>
    </div>
  </div>
</section>
  `;
}
