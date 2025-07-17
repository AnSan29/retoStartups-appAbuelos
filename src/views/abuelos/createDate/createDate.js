export default function CreateDate() {
  return `
    <article class="container">
  <div class="card">
    <div class="card-header">
      <h2>Crear Nueva Cita</h2>
    </div>
    <div class="card-body">
      <form id="form-create-date">
        <div class="mb-3">
          <label for="nombre">Nombre completo:</label>
          <input type="text" name="nombre" id="nombre" placeholder="Ej: Juan Pérez" disabled>
        </div>

        <div class="mb-3">
          <label for="nombre">Cedula:</label>
          <input type="number" name="cedula" id="cedula" placeholder="cedula" disabled>
        </div>

        <div class="mb-3">
          <label for="telefono">Teléfono:</label>
          <input type="text" name="telefono" id="telefono" placeholder="Ej: 3001234567" disabled>
        </div>

        <div class="mb-3">
          <label for="direccion">Dirección:</label>
          <input type="text" name="direccion" id="direccion" placeholder="Ej: Calle 10 #5-45" required>
        </div>

        <div class="mb-3">
          <label for="fecha">Fecha de la cita:</label>
          <input type="date" name="fecha" id="fecha" required>
        </div>

        <div class="mb-3">
          <label for="hora">Hora:</label>
          <input type="time" name="hora" id="hora" required>
        </div>

        <div class="mb-3">
          <label for="descripcion">Motivo:</label>
          <textarea name="descripcion" id="descripcion" rows="3" placeholder="Describe brevemente la cita..." required></textarea>
        </div>

        <button type="submit">Guardar Cita</button>
      </form>
    </div>
  </div>
</article>
  `;
}
